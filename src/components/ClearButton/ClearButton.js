import React from 'react';
import PropTypes from 'prop-types';

import styles from './ClearButton.scss';

const ClearButton = ({ buttonVisible, clearCompleted }) => {

  const classes = (state) => {
    if (state) {
      return styles.clearCompleted
    } return [styles.clearCompleted, styles.hidden].join(' ');
  }

  const handleClick = () => {
    const confirmed = confirm("Вы уверены, что хотите удалить все прочтенные книги?");
    if (confirmed) {
      clearCompleted();
    }
  }

  return (
    <button
      type="button"
      className={classes(buttonVisible)}
      onClick={handleClick}
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