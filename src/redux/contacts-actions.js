import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction('contacts/addContactRequest');
export const fetchContactsSuccess = createAction('contacts/addContactSuccess');
export const fetchContactsError = createAction('contacts/addContactError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess',
//     (payload) => {
//     return {
//         payload
//     }
// }
);
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction('contacts/deleteContactRequest');
export const deleteContactSuccess = createAction('contacts/deleteContactSuccess ');
export const deleteContactError = createAction('contacts/deleteContactError');




export const changeFilter = createAction('contacts/changeFilter');

