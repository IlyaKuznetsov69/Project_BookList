import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import Editor from 'components/Editor/Editor';
import styles from './BookField.scss';

const BookField = ({
  name,
  completed,
  data,
  id,
  editBook,
  changeBookView }) => {

  const bookIsCompleted = completed ? styles.completed : '';
  const fieldIsEdited = (field) => {
    if (field.isEditing) {
      return styles.editing;
    } return '';
  }

  return (
    <li
      className={[
        styles.bookField,
        bookIsCompleted,
        fieldIsEdited(data)].join(' ')}
    >
      {data.isEditing &&
        <Editor id={id} field={name} editBook={editBook} text={data.text} />
      }
      <div styleName='view'>
        <div
          styleName='lab'
          onDoubleClick={() => changeBookView(id, name)}
        >
          {data.text}
        </div>
      </div>
    </li>
  )
}

export default CSSModules(BookField, styles);

BookField.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  data: PropTypes.shape({
    text: PropTypes.string.isRequired,
    isEditing: PropTypes.bool.isRequired
  }).isRequired,
  completed: PropTypes.bool.isRequired,
  editBook: PropTypes.func.isRequired,
  changeBookView: PropTypes.func.isRequired
}