import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Filter.css';

const Filter = ({ href, text, selected, setIt }) => {

  const selectedFilter = (selected) => {
    if (selected) {
      return styles.selected
    } 
  }

  return (
    <li className={styles.container}>
      <a
        href={href}
        className={classNames(styles.filter, selectedFilter(selected))}
        onClick={setIt}
      >
        {text}
      </a>
    </li>
  )
}

export default Filter;

Filter.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  setIt: PropTypes.func.isRequired
}