import React from 'react';
import PropTypes from 'prop-types';

import ToggleAllContainer from 'containers/ToggleAllContainer';
import ListContainer from 'containers/ListContainer';
import Footer from 'components/Footer/Footer';
import styles from './MainSection.css';

const MainSection = ({ itemsQuantity }) => {

  if (itemsQuantity > 0) {
    return (
      <section className={styles.main}>
        <ToggleAllContainer />
        <ListContainer />
        <Footer />
      </section>
    )
  } return null
}

export default MainSection;

MainSection.propTypes = {
  itemsQuantity: PropTypes.number.isRequired
}