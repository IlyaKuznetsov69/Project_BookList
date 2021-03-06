import React from 'react';
import CSSModules from 'react-css-modules';

import filters from 'constants/filters';
import CounterContainer from 'containers/CounterContainer';
import ClearButtonContainer from 'containers/ClearButtonContainer';
import FilterContainer from 'containers/FilterContainer';
import SearchContainer from 'containers/SearchContainer';
import styles from './Footer.scss';

const Footer = () => {

  const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = filters

  return (
    <footer styleName='footer'>
      <div styleName='wrapper'>
        <CounterContainer />
        <ul styleName='filters'>
          <FilterContainer
            ownFilter={SHOW_ALL}
            text="Всего"
          />
          <FilterContainer
            ownFilter={SHOW_ACTIVE}
            text="Осталось"
          />
          <FilterContainer
            ownFilter={SHOW_COMPLETED}
            text="Прочитано"
          />
        </ul>
        <ClearButtonContainer />
      </div>
      <SearchContainer />
    </footer>
  )
}

export default CSSModules(Footer, styles);