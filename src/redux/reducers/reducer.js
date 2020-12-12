import utils from '../../components/utils';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  removeContact,
  changeFilter,
  notification,
} from '../actions/actions';
// import {
//   ADD_CONTACT,
//   REMOVE_CONTACT,
//   CHANGE_FILTER,
//   NOTIFICATION,
// } from '../actionTypes.js';

const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) || [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
  isExists: false,
};

// До использования библиотеки

// const contactsReducer = (state = initialState.contacts, { type, payload }) => {
//   switch (type) {
//     case ADD_CONTACT:
//       return [...state, { ...payload, id: utils() }];
//     case REMOVE_CONTACT:
//       return state.filter(item => item.id !== payload);
//     default:
//       return state;
//   }
// };

// const filterReducer = (state = initialState.filter, { type, payload }) => {
//   switch (type) {
//     case CHANGE_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };

// const notificationReducer = (
//   state = initialState.isExists,
//   { type, payload },
// ) => {
//   switch (type) {
//     case NOTIFICATION:
//       return payload;
//     default:
//       return state;
//   }
// };

// После использования библиотеки

const onAddContact = (state, action) => [
  ...state,
  { ...action.payload, id: utils() },
];
const onRemoveContact = (state, action) =>
  state.filter(item => item.id !== action.payload);

const contactsReducer = createReducer(initialState.contacts, {
  [addContact]: onAddContact,
  [removeContact]: onRemoveContact,
});
const filterReducer = createReducer(initialState.filter, {
  [changeFilter]: (state, action) => action.payload,
});
const notificationReducer = createReducer(initialState.isExists, {
  [notification]: (state, action) => action.payload,
});

export { contactsReducer, filterReducer, notificationReducer };
