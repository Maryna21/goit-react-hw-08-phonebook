import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from 'components/AppBar';
import Container from 'components/Container/container';
import authOperations from 'redux/auth/auth-operations';
import { connect } from 'react-redux';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const HomeView = lazy(() => import('views/HomeView'));
const RegisterView = lazy(() => import('views/RegisterView'));
const LoginView = lazy(() => import('views/LoginView'));
const ContactsView = lazy(() => import('views/ContactsView'));


class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />
        <Suspense fallback={
          <Loader
                type="Circles"
                color="#00BFFF"
                height={100}
                width={100}
          />
        }>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <PublicRoute
            path="/register"
            restricted
            redirectTo="/contacts"
            component={RegisterView} />
          <PublicRoute
            path="/login"
            restricted
            component={LoginView}
            redirectTo="/contacts" />
          <PrivateRoute
            path="/contacts"
            redirectTo="/login"
            component={ContactsView} />
          </Switch>
          </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser
}



export default connect (null,mapDispatchToProps)(App);