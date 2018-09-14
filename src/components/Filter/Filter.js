import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './Filter.scss';

const Filter = ({ text, selected, setIt }) => {

  const selectedFilter = (selected) => {
    if (selected) {
      return styles.selected
    } 
  }

  return (
    <li styleName='container'>
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

export default CSSModules(Filter, styles);

Filter.propTypes = {
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  setIt: PropTypes.func.isRequired
}