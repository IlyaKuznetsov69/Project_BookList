import React from 'react';
import PropTypes from 'prop-types';

import styles from './Counter.css';

const Counter = ({ booksLeft }) => {

  const text = (count) => {
    return (count === 1) ? 'книга осталась' : 'книг осталось'
  }

  return (
    <span className={styles.bookCount}>
      <strong>{booksLeft}</strong>
      {' ' + text(booksLeft)}
    </span>
  )
}

export default Counter;

Counter.propTypes = {
  booksLeft: PropTypes.number.isRequired
}