import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setFilter } from 'actions/actions';
import Filter from 'components/Filter/Filter';

const FilterContainer = ({ selected, setIt, text }) => {

  return (
    <Filter
      selected={selected}
      setIt={setIt}
      text={text}
    />
  )
}

const mapStateToProps = (state, ownProps) => ({
  selected: state.selectedFilter === ownProps.ownFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setIt: () => dispatch(setFilter(ownProps.ownFilter))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);

FilterContainer.propTypes = {
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  setIt: PropTypes.func.isRequired
}