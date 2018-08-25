import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AddBook from 'components/AddBook/AddBook';
import { addBook } from 'actions/actions';

const AddBookContainer = ({ addBook }) => {

  return (
    <AddBook
      addBook={addBook}
    />
  )
};

const mapDispatchToProps = (dispatch) => ({
  addBook: (inputData) => dispatch(addBook(inputData))
});

export default connect(null, mapDispatchToProps)(AddBookContainer);

AddBookContainer.propTypes = {
  addBook: PropTypes.func.isRequired
};