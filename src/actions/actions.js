import actionTypes from 'constants/actionTypes';
import {
  addBookRequest,
  deleteBookRequest,
  sendBookDataRequest,
  sendAllBooksRequest,
  deleteAllReadRequest,
  sendFilterRequest,
  sendSearchValueRequest
} from 'api/api';

const {
  REFRESH_BOOKLIST,
  TOGGLE_READ,
  EDIT_BOOK,
  CHANGE_BOOK_VIEW,
  SET_FILTER,
  TOGGLE_ALL,
  SEND_SEARCH_VALUE } = actionTypes;

const sendBookData = (id, getState) => {
  const book = getState().books.filter(book => book.id === id)[0];
  sendBookDataRequest(id, book);
};

export const refreshBookList = (books) => ({
  type: REFRESH_BOOKLIST,
  payload: {
    books
  }
});

export const addBook = ({
  title,
  author,
  year,
  size,
  id }) => async (dispatch) => {
    const book = {
      id,
      title: {
        text: title,
        isEditing: false
      },
      author: {
        text: author,
        isEditing: false
      },
      year: {
        text: year,
        isEditing: false
      },
      size: {
        text: size,
        isEditing: false
      },
      completed: false
    };
    const books = await addBookRequest(book);
    return dispatch(refreshBookList(books));
  };

export const deleteBook = (id) => async (dispatch) => {
  const books = await deleteBookRequest(id);
  return dispatch(refreshBookList(books));
};

export const toggleRead = (id) => (dispatch, getState) => {
  dispatch({
    type: TOGGLE_READ,
    payload: {
      id
    }
  });
  sendBookData(id, getState);
};

export const editBook = (id, field, text) => (dispatch, getState) => {
  dispatch({
    type: EDIT_BOOK,
    payload: {
      id,
      field,
      text
    }
  });
  dispatch(changeBookView(id, field));
  sendBookData(id, getState);
}

export const changeBookView = (id, field) => ({
  type: CHANGE_BOOK_VIEW,
  payload: {
    id,
    field
  }
});

export const setFilter = (filter) => (dispatch) => {
  dispatch({
    type: SET_FILTER,
    payload: {
      filter
    }
  });
  sendFilterRequest(filter);
};

export const toggleAllItems = (switchState) => (dispatch, getState) => {
  dispatch({
    type: TOGGLE_ALL,
    payload: {
      switchState
    }
  });
  const books = getState().books;
  sendAllBooksRequest(books);
};

export const deleteAllRead = () => async (dispatch, getState) => {
  const books = getState().books.filter((book) => book.completed === true);
  const newBooks = await deleteAllReadRequest(books);
  return dispatch(refreshBookList(newBooks));
};

export const sendSearchValue = (newValue) => (dispatch) => {
  dispatch({
    type: SEND_SEARCH_VALUE,
    payload: {
    newValue
    }
  });
  sendSearchValueRequest(newValue);
};