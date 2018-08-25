import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { sendSearchValue } from 'actions/actions';
import Search from 'components/Search/Search';

const SearchContainer = ({ searchValue, sendSearchValue }) => {

  return (
    <Search
      searchValue={searchValue}
      sendSearchValue={sendSearchValue}
    />
  )
}

const mapStateToProps = ({ searchValue }) => ({
  searchValue: searchValue
})

const mapDispatchToProps = (dispatch) => ({
  sendSearchValue: (newValue) => dispatch(sendSearchValue(newValue))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);

SearchContainer.propTypes = {
  searchValue: PropTypes.string.isRequired,
  sendSearchValue: PropTypes.func.isRequired
}