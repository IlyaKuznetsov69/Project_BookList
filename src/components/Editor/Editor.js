import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './Editor.scss';

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
        styleName='edit'
        defaultValue={text}
        autoFocus
      />
    )
  }
}

export default CSSModules(Editor, styles);

Editor.propTypes = {
  editBook: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired
}