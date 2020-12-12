import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './App.module.css';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import Filter from './components/Filter/Filter.jsx';
import Notification from './components/Notification/Notification';
import notificationStyles from './components/Notification/Notification.module.css';
import { connect } from 'react-redux';

const App = ({ isExists }) => {
  return (
    <>
      <div>
        <CSSTransition
          in={true}
          appear={true}
          classNames={styles}
          timeout={500}
          unmountOnExit
        >
          <h1>Phonebook</h1>
        </CSSTransition>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
        <CSSTransition
          in={isExists}
          timeout={250}
          classNames={notificationStyles}
          unmountOnExit
        >
          <Notification />
        </CSSTransition>
      </div>
    </>
  );
};
const mapStateToProps = state => ({
  isExists: state.isExists,
});
export default connect(mapStateToProps)(App);
