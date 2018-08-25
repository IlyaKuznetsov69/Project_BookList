import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Editor.css';

class Editor extends Component {

  handleKeyPress = (event) => {
    const { editBook, id, field } = this.props;
    if (event.key === 'Enter') {
      editBook(id, field, event.currentTarget.value);
    }
  }

  handleBlur = (event) => {
    const { editBook, id, field } = this.props;
    editBook(id, field, event.currentTarget.value);
  }

  render() {
    const { text } = this.props;
    return (
      <input
        onBlur={this.handleBlur}
        onKeyPress={this.handleKeyPress}
        type="text"
        className={styles.edit}
        defaultValue={text}
        autoFocus
      />
    )
  }
}

export default Editor;

Editor.propTypes = {
  editBook: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired
}