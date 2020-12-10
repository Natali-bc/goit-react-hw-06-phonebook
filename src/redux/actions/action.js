import { ADD_CONTACT, REMOVE_CONTACT } from '../actionTypes';

const addContact = contact => ({
  type: ADD_CONTACT,
  payload: contact,
});

const removeContact = id => ({
  type: REMOVE_CONTACT,
  payload: id,
});

export default { addContact, removeContact };
