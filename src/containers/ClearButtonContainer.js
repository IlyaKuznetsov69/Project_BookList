import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteAllRead } from 'actions/actions';
import ClearButton from 'components/ClearButton/ClearButton';

const ClearButtonContainer = ({ buttonVisible, clearCompleted }) => {

  return (
    <ClearButton
      buttonVisible={buttonVisible}
      clearCompleted={clearCompleted}
    />
  )
}

const getButtonState = (items) => {
  const completedQuantity = (items.filter(item => item.completed)).length;
  return completedQuantity > 0
}

const mapStateToProps = ({ books }) => ({
  buttonVisible: getButtonState(books)
})

const mapDispatchToProps = (dispatch) => ({
  clearCompleted: () => dispatch(deleteAllRead())
})

export default connect(mapStateToProps, mapDispatchToProps)(ClearButtonContainer);

ClearButtonContainer.propTypes = {
  buttonVisible: PropTypes.bool.isRequired,
  clearCompleted: PropTypes.func.isRequired
}