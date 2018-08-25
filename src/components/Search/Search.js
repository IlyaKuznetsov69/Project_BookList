import React from 'react';
import PropTypes from 'prop-types';

import styles from './Search.scss';

const Search = ({ searchValue, sendSearchValue }) => {

  let newValue = searchValue;

  const handleChange = (event) => {
    newValue = event.currentTarget.value;
  }

  return (
    <div className={styles.search}>
      <input
        className={styles.searchInput}
        type="text"
        onInput={handleChange}
        defaultValue={searchValue}
      />
      <button
        className={styles.searchButton}
        type="button"
        onClick={() => sendSearchValue(newValue)}
      >
        Найти
      </button>
    </div>
  )
}

export default Search;

Search.propTypes = {
  searchValue: PropTypes.string.isRequired,
  sendSearchValue: PropTypes.func.isRequired
}