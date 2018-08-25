import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MainSection from 'components/MainSection/MainSection';
import { refreshBookList, setFilter, sendSearchValue } from 'actions/actions';
import { fetchBooksRequest, fetchFiltersRequest } from 'api/api';

class MainSectionContainer extends Component {

  componentDidMount() {
    const { dispatch } = this.props;    
    const preLoad = async (dispatch) => {
      const books = await fetchBooksRequest();
      const filters = await fetchFiltersRequest();
      dispatch(refreshBookList(books));
      dispatch(setFilter(filters.selectedFilter));
      dispatch(sendSearchValue(filters.searchValue));
    };
    return preLoad(dispatch);
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

export default connect(mapStateToProps)(MainSectionContainer);

MainSectionContainer.propTypes = {
  itemsQuantity: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
}