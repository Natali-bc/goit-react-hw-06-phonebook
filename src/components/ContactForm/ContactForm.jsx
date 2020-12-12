import React, { Component } from 'react';
import styles from '../ContactForm/ContactForm.module.css';
import { connect } from 'react-redux';
import { addContact, notification } from '../../redux/actions/actions';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const contact = { name: this.state.name, number: this.state.number };

    if (this.props.contacts.find(contact => contact.name === this.state.name)) {
      this.props.notification(true);
      setTimeout(() => {
        this.props.notification(false);
      }, 2000);
      this.setState({ name: '', number: '' });
    } else {
      this.props.addContact(contact);
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            <span className={styles.inputTitle}>Name</span>
            <input
              name="name"
              value={name}
              onChange={this.handleChange}
              className={styles.input}
            />
          </label>
          <label>
            <span className={styles.inputTitle}>Number</span>
            <input
              name="number"
              value={number}
              onChange={this.handleChange}
              className={styles.input}
            />
          </label>
          <button type="submit" className={styles.btn}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts,
});

const mapDispatchToProps = {
  addContact,
  notification,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
