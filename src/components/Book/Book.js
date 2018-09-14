import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';

import BookField from 'components/BookField/BookField';
import styles from './Book.scss';

const Book = ({
  id,
  title,
  author,
  year,
  size,
  completed,
  toggleRead,
  editBook,
  deleteBook,
  changeBookView }) => {

  return (
    <ul styleName='book'>
      <div styleName='back'>
        <input
          styleName='toggle'
          type="checkbox"
          onChange={() => toggleRead(id)}
          checked={completed}
        />
      </div>
      <BookField
        name="title"
        completed={completed}
        data={title}
        id={id}
        editBook={editBook}
        changeBookView={changeBookView}
      />
      <BookField
        name="author"
        completed={completed}
        data={author}
        id={id}
        editBook={editBook}
        changeBookView={changeBookView}
      />
      <BookField
        name="year"
        completed={completed}
        data={year}
        id={id}
        editBook={editBook}
        changeBookView={changeBookView}
      />
      <BookField
        name="size"
        completed={completed}
        data={size}
        id={id}
        editBook={editBook}
        changeBookView={changeBookView}
      />
      <div styleName='wrap'>
        <Link to={`/${id}`}>
          <div
            styleName='link'
            title="Посмотреть описание книги"
          />
        </Link>
        <button
          type="button"
          styleName='destroy'
          title="Удалить книгу"
          onClick={() => deleteBook(id)}
        />
      </div>
    </ul>
  )
}

export default CSSModules(Book, styles);

Book.propTypes = {
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
  completed: PropTypes.bool.isRequired,
  toggleRead: PropTypes.func.isRequired,
  editBook: PropTypes.func.isRequired,
  deleteBook: PropTypes.func.isRequired,
  changeBookView: PropTypes.func.isRequired
}