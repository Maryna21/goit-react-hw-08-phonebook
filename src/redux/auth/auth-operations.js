import axios from 'axios';
import authActions from 'redux/auth/auth-actions';
import contactsOperations from 'redux/contacts-operations';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const register = credentials => async dispatch => {
    dispatch(authActions.registerRequest());
    try {
        const response = await axios.post('/users/signup', credentials);
         dispatch(authActions.registerSuccess(response.data));
    }
    catch (error) {
        dispatch(authActions.registerError(error.message));
    }
   
 };

const logIn = credentials => async dispatch => {
    dispatch(authActions.loginRequest());
    try {
        const response = await axios.post('/users/login', credentials);

        token.set(response.data.token);
        dispatch(authActions.loginSuccess(response.data));
        
    } catch (error) {
        dispatch(authActions.loginError(error.message));
    }
};

const logOut = () => async dispatch => {
    dispatch(authActions.logoutRequest());
    try {
        await axios.post('/users/logout');
        token.unset();
        dispatch(authActions.logoutSuccess());
        dispatch(contactsOperations.resetContacts());
        
    } catch (error) {
        dispatch(authActions.logoutError(error.message));
    }
 };

const getCurrentUser = () => async (dispatch, getState) => {
    const {
        auth: { token: persistedToken },
    } = getState();
    if (!persistedToken) {
        return;
    }
    token.set(persistedToken);

    dispatch(authActions.getCurrentUserRequest());

    try {
        const response = await axios.get('/users/current');
        dispatch(authActions.getCurrentUserSuccess(response.data));

    } catch (error) {
        dispatch(authActions.getCurrentUserError(error.message));
    }
 };

export default { register, logOut, logIn, getCurrentUser };