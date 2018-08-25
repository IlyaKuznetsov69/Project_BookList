import actionTypes from 'constants/actionTypes';

const {
  REFRESH_BOOKLIST,
  TOGGLE_READ,
  EDIT_BOOK,
  CHANGE_BOOK_VIEW,
  TOGGLE_ALL } = actionTypes;

const handleBooks = (state = [], { type, payload }) => {
  switch (type) {
    case REFRESH_BOOKLIST:
      return payload.books;
    case TOGGLE_READ:
      return state.map(book => {
        if (book.id === payload.id) {
          return { ...book, completed: !book.completed }
        } return book;
      });
    case EDIT_BOOK: {
      const { id, field, text } = payload;
      if (text !== '') {
        return state.map(book => {
          if (book.id === id) {
            const newField = Object.assign({}, book[field], { text: text });
            return { ...book, [field]: newField }
          } return book;
        })
      } return state;
    }
    case CHANGE_BOOK_VIEW: {
      const { id, field } = payload;
      return state.map(book => {
        if (book.id === id) {
          const fieldCopy = Object.assign({}, book[field]);
          const newField = { ...fieldCopy, isEditing: !fieldCopy.isEditing };
          return { ...book, [field]: newField }
        } return book;
      });
    }
    case TOGGLE_ALL:
      return state.map(book => {
        if (payload.switchState === true) {
          return { ...book, completed: true }
        } return { ...book, completed: false }
      });
    default:
      return state;
  }
}

export default handleBooks;