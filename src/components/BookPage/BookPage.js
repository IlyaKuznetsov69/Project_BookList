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
          to="/public"
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
}