import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './Search.scss';

class Search extends Component {
  constructor(props) {
    super(props);
    this.newValue = this.props.searchValue;
    this.input = React.createRef();
  }

  handleChange = (event) => {
    this.newValue = event.currentTarget.value;
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.props.sendSearchValue(this.newValue);
    }
  }

  handleReset = () => {
    this.input.current.value = "";
    this.props.sendSearchValue("");
  }

  render() {
    const { searchValue, sendSearchValue } = this.props;

    return (
      <div styleName='search'>
        <input
          styleName='searchInput'
          type="text"
          onInput={this.handleChange}
          onKeyPress={this.handleKeyPress}
          defaultValue={searchValue}
          ref={this.input}
        />
        <button
          styleName='searchButton'
          type="button"
          onClick={() => sendSearchValue(this.newValue)}
        >
          Найти
        </button>
        <button
          styleName='searchButton'
          type="button"
          onClick={this.handleReset}
        >
          Очистить
        </button>
      </div>
    )
  }
}

export default CSSModules(Search, styles);

Search.propTypes = {
  searchValue: PropTypes.string.isRequired,
  sendSearchValue: PropTypes.func.isRequired
}