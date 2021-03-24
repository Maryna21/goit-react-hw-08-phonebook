import React, { Component } from 'react';
import ContactForm from 'components/ContactForm/contactForm';
import ContactList from 'components/ContactList/contactList';
import Filter from 'components/Filter/filter';
import s from 'app.module.css';
import Container from 'components/Container/container';
import { CSSTransition } from 'react-transition-group';
import logoTransition from 'logoTransition.module.css';
import { connect } from 'react-redux';
import contactsOperations from 'redux/contacts-operations';
import { getLoading } from 'redux/contacts-selectors';

class ContactsView extends Component {

  componentDidMount() {
  this.props.fetchContacts();  
  }

  render() {
    return (
      <Container>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames={logoTransition}
        unmountOnExit
        >
          <h1 className={s.title}>Phonebook</h1>
          </CSSTransition>
     <ContactForm/>
        <Filter />
        {this.props.isloadingContacts && <h1>loading...</h1>}
        <ContactList/>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isloadingContacts: getLoading(state),
})

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts())
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);