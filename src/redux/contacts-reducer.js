import { createStore, combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    changeFilter
} from 'redux/contacts-actions'

const initialContacts = [];

const items = createReducer(initialContacts, {
    [fetchContactsSuccess]: (_, {payload}) => payload,
    [addContactSuccess]: (state, { payload }) => [...state, ...payload],
    [deleteContactSuccess]: (state, { payload }) =>
        state.filter(({id})=> id !== payload)
})

const loading = createReducer(false, {
    [fetchContactsRequest]: () => true,
    [fetchContactsSuccess]: () => false,
    [fetchContactsError]:() => false,
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false
});

const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
    [addContactError]: setError,
    [deleteContactError]: setError,
    [fetchContactsError]: setError,
});

export default combineReducers({
    items,
    filter,
    loading,
    error
})
