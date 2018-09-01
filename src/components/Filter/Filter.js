import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Filter.css';

const Filter = ({ text, selected, setIt }) => {

  const selectedFilter = (selected) => {
    if (selected) {
      return styles.selected
    } 
  }

  return (
    <li className={styles.container}>
      <button
        type="button"
        className={classNames(styles.filter, selectedFilter(selected))}
        onClick={setIt}
      >
        {text}
      </button>
    </li>
  )
}

export default Filter;

Filter.propTypes = {
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  setIt: PropTypes.func.isRequired
}