import { createAction } from '@reduxjs/toolkit';
// import {
//   ADD_CONTACT,
//   REMOVE_CONTACT,
//   CHANGE_FILTER,
//   NOTIFICATION,
// } from '../actionTypes';

// До использования библиотеки

// const addContact = contact => ({
//   type: ADD_CONTACT,
//   payload: contact,
// });

// const removeContact = id => ({
//   type: REMOVE_CONTACT,
//   payload: id,
// });

// const changeFilter = filter => ({
//   type: CHANGE_FILTER,
//   payload: filter,
// });
// const notification = payload => ({
//   type: NOTIFICATION,
//   payload,
// });

// После использования библиотеки
const addContact = createAction('ADD_CONTACT');
const removeContact = createAction('REMOVE_CONTACT');
const changeFilter = createAction('CHANGE_FILTER');
const notification = createAction('NOTIFICATION');

export { addContact, removeContact, changeFilter, notification };
