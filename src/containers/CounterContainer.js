import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Counter from 'components/Counter/Counter';

const CounterContainer = ({ booksLeft }) => {

  return (
    <Counter
      booksLeft={booksLeft}
    />
  )
}

const countItemsLeft = (items) => {
  return (items.filter(item => !item.completed)).length
}

const mapStateToProps = ({ books }) => ({
  booksLeft: countItemsLeft(books)
})

export default connect(mapStateToProps)(CounterContainer);

CounterContainer.propTypes = {
  booksLeft: PropTypes.number.isRequired
}