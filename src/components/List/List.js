import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import Book from 'components/Book/Book';
import styles from './List.scss';

const List = ({
  books,
  toggleRead,
  deleteBook,
  changeBookView,
  editBook }) => {

  return (
    <ul styleName='bookList'>
      {books.map((book) => {
        return (
          <Book
            key={book.id}
            {...book}
            toggleRead={toggleRead}
            deleteBook={deleteBook}
            changeBookView={changeBookView}
            editBook={editBook}
          />
        )
      })
      }
    </ul>
  )
}

export default CSSModules(List, styles);

List.propTypes = {
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