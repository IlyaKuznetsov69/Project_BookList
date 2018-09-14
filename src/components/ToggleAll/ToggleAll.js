import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './ToggleAll.scss';

const ToggleAll = ({ toggle, togglerChecked }) => {

  return (
    <div>
      <input
        id="togglerInput"
        styleName='toggleAll'
        type="checkbox"
        checked={togglerChecked}
        onChange={(event) => toggle(event.currentTarget.checked)}
      />
      <label
        styleName='forToggleAll'
        htmlFor="togglerInput"
      />
    </div>
  )
}

export default CSSModules(ToggleAll, styles);

ToggleAll.propTypes = {
  toggle: PropTypes.func.isRequired,
  togglerChecked: PropTypes.bool.isRequired
}