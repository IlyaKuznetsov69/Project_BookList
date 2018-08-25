import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setFilter } from 'actions/actions';
import Filter from 'components/Filter/Filter';

const FilterContainer = ({ selected, setIt, href, text }) => {

  return (
    <Filter
      selected={selected}
      setIt={setIt}
      href={href}
      text={text}
    />
  )
}

const getFilterState = (stateFilter, propsFilter) => {
  return (stateFilter === propsFilter) ? true : false
}

const mapStateToProps = (state, ownProps) => ({
  selected: getFilterState(state.selectedFilter, ownProps.ownFilter)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setIt: () => dispatch(setFilter(ownProps.ownFilter))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);

FilterContainer.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  setIt: PropTypes.func.isRequired
}