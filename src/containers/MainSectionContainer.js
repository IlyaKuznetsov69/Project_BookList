import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MainSection from 'components/MainSection/MainSection';
import { preloadData } from 'actions/actions';

class MainSectionContainer extends Component {

  componentDidMount() {
    const { preloadData } = this.props;
    preloadData();
  }

  render() {
    const { itemsQuantity } = this.props;
    return (
      <MainSection
        itemsQuantity={itemsQuantity}
      />
    )
  }
}

const mapStateToProps = ({ books }) => ({
  itemsQuantity: books.length
});

const mapDispatchToProps = (dispatch) => ({
  preloadData: () => dispatch(preloadData())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSectionContainer);

MainSectionContainer.propTypes = {
  itemsQuantity: PropTypes.number.isRequired,
  preloadData: PropTypes.func.isRequired
}