import actionTypes from 'constants/actionTypes';

const { SEND_SEARCH_VALUE } = actionTypes;

const handleSearch = (state = '', { type, payload }) => {
  switch (type) {
    case SEND_SEARCH_VALUE: {
      const { newValue } = payload;
      return newValue
    }
    default:
      return state
  }
}

export default handleSearch;