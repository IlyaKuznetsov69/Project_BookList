import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BookPage from 'components/BookPage/BookPage';
import { refreshBookList, setFilter, sendSearchValue } from 'actions/actions';
import { fetchBooksRequest, fetchFiltersRequest } from 'api/api';

class BookPageContainer extends Component {

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
    const getBookById = (books, id) => {
      return books.filter(book => book.id === id)[0];
    }
    const { id } = this.props.match.params;
    const { books } = this.props;

    return (
      <BookPage {...getBookById(books, id)} />
    )
  }
}

const mapStateToProps = ({ books }) => ({
  books: books
})

export default connect(mapStateToProps)(BookPageContainer);

BookPageContainer.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.shape({
      text: PropTypes.string.isRequired,
      isEditing: PropTypes.bool.isRequired
    }).isRequired,
    author: PropTypes.shape({
      text: PropTypes.string.isRequired,
      isEditing: PropTypes.bool.isRequired
    }).isRequired,
    year: PropTypes.shape({
      text: PropTypes.string.isRequired,
      isEditing: PropTypes.bool.isRequired
    }).isRequired,
    size: PropTypes.shape({
      text: PropTypes.string.isRequired,
      isEditing: PropTypes.bool.isRequired
    }).isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  dispatch: PropTypes.func.isRequired
}
