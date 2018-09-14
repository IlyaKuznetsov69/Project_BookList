import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './Counter.scss';

const Counter = ({ booksLeft }) => {

  const getText = (num) => {
    const str = String(num);
    if (num === 0) {
      return "Книг не осталось"
    } else if ((num < 2 || num > 20) && str.match(/1$/)) {
      return "книга осталась"
    } else if ((num < 5 || num > 21) && str.match(/[234]$/)) {
      return "книги осталось"
    } return "книг осталось"
  }

  return (
    <span styleName='bookCount'>
      <strong>{booksLeft || ""}</strong>
      {" " + getText(booksLeft)}
    </span>
  )
}

export default CSSModules(Counter, styles);

Counter.propTypes = {
  booksLeft: PropTypes.number.isRequired
}