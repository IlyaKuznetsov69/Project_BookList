import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import filters from 'constants/filters';
import * as actionCreators from 'actions/actions';
import List from 'components/List/List';

const ListContainer = ({
  books,
  toggleRead,
  deleteBook,
  changeBookView,
  editBook }) => {

  return (
    <List
      books={books}
      toggleRead={toggleRead}
      deleteBook={deleteBook}
      changeBookView={changeBookView}
      editBook={editBook}
    />
  )
}

const getFilteredList = (items, filter) => {
  const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = filters;
  switch (filter) {
    case SHOW_ALL:
      return items;
    case SHOW_COMPLETED:
      return items.filter(item => item.completed);
    case SHOW_ACTIVE:
      return items.filter(item => !item.completed);
    default:
      return items;
  }
}

const getSearchedList = (books, selectedFilter, searchValue) => {
  const list = getFilteredList(books, selectedFilter);
  const value = searchValue.toLowerCase();
  return list.filter((book) => {
    const titleText = book.title.text.toLowerCase();
    const authorText = book.author.text.toLowerCase();
    const yearText = book.year.text.toLowerCase();
    const sizeText = book.size.text.toLowerCase();
    return (
      ~titleText.indexOf(value) ||
      ~authorText.indexOf(value) ||
      ~yearText.indexOf(value) ||
      ~sizeText.indexOf(value)
    )
  })
}

const mapStateToProps = ({ books, selectedFilter, searchValue }) => ({
  books: getSearchedList(books, selectedFilter, searchValue)
})

const mapDispatchToProps = (dispatch) => {
  const {
    deleteBook,
    toggleRead,
    changeBookView,
    editBook } = bindActionCreators(actionCreators, dispatch);
  return {
    toggleRead: (id) => toggleRead(id),
    deleteBook: (id) => deleteBook(id),
    changeBookView: (id, field) => changeBookView(id, field),
    editBook: (id, field, text) => editBook(id, field, text)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);

ListContainer.propTypes = {
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
  toggleRead: PropTypes.func.isRequired,
  editBook: PropTypes.func.isRequired,
  deleteBook: PropTypes.func.isRequired,
  changeBookView: PropTypes.func.isRequired
}