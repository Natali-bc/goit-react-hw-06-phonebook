//импортируем весь файл action.js
// и представляем его как объект с именем actions
import utils from '../../components/utils';
import actions from '../actions/actions';
import { ADD_CONTACT, REMOVE_CONTACT, CHANGE_FILTER } from '../actionTypes.js';
import { combineReducers } from 'redux';
// деструктуризируем наш объект actions
const { addContact, removeContact, changeFilter } = actions;

const contactsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [...state, { ...payload, id: utils() }];
    case REMOVE_CONTACT:
      return state.filter(item => item.id !== payload);
    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
