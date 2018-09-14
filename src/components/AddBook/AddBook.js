import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './AddBook.scss';

class AddBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputData: {
        title: '',
        author: '',
        year: '',
        size: ''
      }
    };
    this.addFieldText = this.addFieldText.bind(this);
    this.addFieldTextConfirm = this.addFieldTextConfirm.bind(this);
    this.onAddBook = this.onAddBook.bind(this);
    this.verifyData = this.verifyData.bind(this);
  }

  onAddBook(event) {
    event.preventDefault();
    const { inputData } = this.state;
    const { addBook } = this.props;
    const validationResult = this.verifyData(inputData);
    const id = Date.now().toString();
    if (validationResult === 4) {
      addBook({ ...inputData, id: id });
      this.setState({
        inputData: {
          title: '',
          author: '',
          year: '',
          size: ''
        }
      });
      event.currentTarget.reset();
    }
  }

  verifyData(data) {
    let result = 0;
    let message = '';
    const date = new Date().getFullYear();
    if (data.title !== '') {
      result += 1;
    } else {
      message += 'Заполните поле "название книги"\r';
    }
    if (data.author !== '') {
      result += 1;
    } else {
      message += 'Заполните поле "автор книги"\r';
    }
    if (data.year.match(/^\s*\d+\s*$/) && (+data.year > 0) && (+data.year <= date)) {
      result += 1;
    } else {
      message += `Заполните год издания книги без лишних символов\r(от 1 до ${date})\r`;
    }
    if (data.size.match(/^\s*\d+\s*$/) && (+data.size > 0) && (+data.size < 10000)) {
      result += 1;
    } else {
      message += "Заполните количество страниц книги без лишних символов\r(от 1 до 9999)";
    }
    if (message !== '') {
      alert(message);
    }
    return result;
  }

  addFieldText(event) {
    const { inputData } = this.state;
    const text = event.currentTarget.value;
    const fieldName = event.currentTarget.name;
    if (text !== '') {
      this.setState({
        inputData: { ...inputData, [fieldName]: text }
      });
    }
  }

  addFieldTextConfirm(event) {
    if (event.key === "Enter") {
      this.addFieldText(event);
    }
  }

  render() {
    const { inputData } = this.state;

    return (
      <form
        action="#"
        autoComplete="off"
        styleName='newBook'
        onSubmit={this.onAddBook}
      >
        <input
          onBlur={this.addFieldText}
          onKeyPress={this.addFieldTextConfirm}
          name="title"
          type="text"
          title="Введите название книги"
          styleName='newField'
          placeholder="Название книги"
          defaultValue={inputData.title}
        />
        <input
          onBlur={this.addFieldText}
          onKeyPress={this.addFieldTextConfirm}
          name="author"
          type="text"
          title="Введите автора книги"
          styleName='newField'
          placeholder="Автор"
          defaultValue={inputData.author}
        />
        <input
          onBlur={this.addFieldText}
          onKeyPress={this.addFieldTextConfirm}
          name="year"
          type="text"
          title="Введите год написания книги"
          styleName='newField'
          placeholder="Год издания"
          defaultValue={inputData.year}
        />
        <input
          onBlur={this.addFieldText}
          onKeyPress={this.addFieldTextConfirm}
          name="size"
          type="text"
          title="Введите количество страниц"
          styleName='newField'
          placeholder="Количество страниц"
          defaultValue={inputData.size}
        />
        <button
          type="submit"
          styleName='addButton'
          title="Нажмите, когда заполнили все поля"
        >
          Добавить
        </button>
      </form>
    )
  }
}

export default CSSModules(AddBook, styles);

AddBook.propTypes = {
  addBook: PropTypes.func.isRequired
};