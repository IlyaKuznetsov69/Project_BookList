import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import ToggleAllContainer from 'containers/ToggleAllContainer';
import ListContainer from 'containers/ListContainer';
import Footer from 'components/Footer/Footer';
import styles from './MainSection.scss';

const MainSection = ({ itemsQuantity }) => {

  if (itemsQuantity > 0) {
    return (
      <section styleName='main'>
        <ToggleAllContainer />
        <ListContainer />
        <Footer />
      </section>
    )
  } return null
}

export default CSSModules(MainSection, styles);

MainSection.propTypes = {
  itemsQuantity: PropTypes.number.isRequired
}