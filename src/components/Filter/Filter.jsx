import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../Filter/Filter.module.css';
import changeFilter from '../../redux/actions/actions';

const Filter = ({ handleChange, filter }) => {
  return (
    <label>
      <span className={styles.inputTitle}>Find contacts by name</span>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        className={styles.input}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: state.filter,
});
const mapDispatchToProps = {
  handleChange: changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
