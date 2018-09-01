import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import BookField from 'components/BookField/BookField';
import styles from './Book.css';

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
    <ul className={styles.book}>
      <div className={styles.back}>
        <input
          className={styles.toggle}
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
      <Link to={`/public/${id}`}>
        <div
          className={styles.link}
          title="Посмотреть описание книги"
        />
      </Link>
      <button
        type="button"
        className={styles.destroy}
        onClick={() => deleteBook(id)}
      />
    </ul>
  )
}

export default Book;

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