import React from 'react';
import PropTypes from 'prop-types';

import styles from './ToggleAll.css';

const ToggleAll = ({ toggle, togglerChecked }) => {

  return (
    <div>
      <input
        id="togglerInput"
        className={styles.toggleAll}
        type="checkbox"
        checked={togglerChecked}
        onChange={(event) => toggle(event.currentTarget.checked)}
      />
      <label
        className={styles.forToggleAll}
        htmlFor="togglerInput"
      />
    </div>
  )
}

export default ToggleAll;

ToggleAll.propTypes = {
  toggle: PropTypes.func.isRequired,
  togglerChecked: PropTypes.bool.isRequired
}