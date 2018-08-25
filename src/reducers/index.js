import { combineReducers } from 'redux';

import handleBooks from './handleBooks';
import toggleFilter from './toggleFilter';
import handleSearch from './handleSearch';

const mainReducer = combineReducers({
  books: handleBooks,
  selectedFilter: toggleFilter,
  searchValue: handleSearch
});

export default mainReducer;