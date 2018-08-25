import filters from 'constants/filters';
import actionTypes from 'constants/actionTypes';

const { SET_FILTER } = actionTypes;

const toggleFilter = (state = filters.SHOW_ALL, { type, payload }) => {
  switch (type) {
    case SET_FILTER: {
      const { filter } = payload;
      return filter
    }
    default:
      return state
  }
}

export default toggleFilter;