import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './BookPage.scss';

const BookPage = ({
  id,
  title,
  author,
  year,
  size,
  completed }) => {

  return (
    <div>
      <h1 className={styles.header}>описание книги</h1>
      <div className={styles.list}>
        <div className={styles.description}>Номер книги в каталоге: {id}</div>
        <div className={styles.description}>Название книги: {title.text}</div>
        <div className={styles.description}>Автор книги: {author.text}</div>
        <div className={styles.description}>Год издания: {year.text}</div>
        <div className={styles.description}>Количество страниц: {size.text}</div>
        <div className={styles.description}>{completed ? "Прочитана" : "Пока не прочитана"}</div>
        <Link
          to="/"
          className={styles.link}
        >
          <button
            type="button"
            className={styles.linkButton}
          >
            Назад к списку книг
          </button>
        </Link>
      </div>
    </div>
  )
}

export default BookPage;

BookPage.propTypes = {
  id: PropTypes.string,
  title: PropTypes.shape({
    text: PropTypes.string,
    isEditing: PropTypes.bool
  }),
  author: PropTypes.shape({
    text: PropTypes.string,
    isEditing: PropTypes.bool
  }),
  year: PropTypes.shape({
    text: PropTypes.string,
    isEditing: PropTypes.bool
  }),
  size: PropTypes.shape({
    text: PropTypes.string,
    isEditing: PropTypes.bool
  }),
  completed: PropTypes.bool
}

BookPage.defaultProps = {
  id: "Loading...",
  title: {
    text: "Loading...",
    isEditing: false
  },
  author: {
    text: "Loading...",
    isEditing: false
  },
  year: {
    text: "Loading...",
    isEditing: false
  },
  size: {
    text: "Loading...",
    isEditing: false
  },
  completed: false
}