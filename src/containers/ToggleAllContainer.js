import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ToggleAll from 'components/ToggleAll/ToggleAll';
import { toggleAllItems } from 'actions/actions';

const ToggleAllContainer = ({ togglerChecked, toggle }) => {

  return (
    <ToggleAll
      togglerChecked={togglerChecked}
      toggle={toggle}
    />
  )
};

const getTogglerState = (items) => {
  const totalQuantity = items.length;
  const completedQuantity = (items.filter(item => item.completed)).length;
  if (totalQuantity === 0) {
    return false
  } return totalQuantity === completedQuantity
};

const mapStateToProps = ({ books }) => ({
  togglerChecked: getTogglerState(books)
});

const mapDispatchToProps = (dispatch) => ({
  toggle: (checked) => {
    dispatch(toggleAllItems(checked))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ToggleAllContainer);

ToggleAllContainer.propTypes = {
  toggle: PropTypes.func.isRequired,
  togglerChecked: PropTypes.bool.isRequired
}