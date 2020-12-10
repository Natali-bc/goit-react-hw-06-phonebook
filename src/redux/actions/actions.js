import { ADD_CONTACT, REMOVE_CONTACT, CHANGE_FILTER } from '../actionTypes';

const addContact = contact => ({
  type: ADD_CONTACT,
  payload: contact,
});

const removeContact = id => ({
  type: REMOVE_CONTACT,
  payload: id,
});

const changeFilter = filter => ({
  type: CHANGE_FILTER,
  payload: filter,
});

export default { addContact, removeContact, changeFilter };
