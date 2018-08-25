import React from 'react';
import PropTypes from 'prop-types';

import styles from './ClearButton.css';

const ClearButton = ({ buttonVisible, clearCompleted }) => {

  const classes = (state) => {
    if (state === true) {
      return styles.clearCompleted
    } return [styles.clearCompleted, styles.hidden].join(' ');
  }

  return (
    <button
      type="button"
      className={classes(buttonVisible)}
      onClick={clearCompleted}
    >
      Удалить прочтенные
    </button>
  )
}

export default ClearButton;

ClearButton.propTypes = {
  buttonVisible: PropTypes.bool.isRequired,
  clearCompleted: PropTypes.func.isRequired
}