// import { combineReducers, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';
import {
  contactsReducer,
  filterReducer,
  notificationReducer,
} from './reducers/reducer';

// До использования библиотеки

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
//   isExists: notificationReducer,
// });
// const store = createStore(rootReducer, composeWithDevTools());

// После использования библиотеки
const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    isExists: notificationReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem('contacts', JSON.stringify(store.getState().contacts));
});

export default store;
