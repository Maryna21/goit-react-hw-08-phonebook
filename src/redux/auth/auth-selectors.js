const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUsername = state => state.auth.user.name;

const getToken = state => state.auth.token;

export default {
    getIsAuthenticated,
    getUsername,
    getToken
};