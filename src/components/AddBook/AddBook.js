import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
  }

  onAddBook(event) {
    event.preventDefault();
    const { inputData } = this.state;
    const { addBook } = this.props;
    const id = Date.now().toString();
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
        className={styles.newBook}
        onSubmit={this.onAddBook}
      >
        <input
          onBlur={this.addFieldText}
          onKeyPress={this.addFieldTextConfirm}
          name="title"
          type="text"
          title="Введите название книги"
          className={styles.newField}
          placeholder="Название книги"
          defaultValue={inputData.title}
          required
        />
        <input
          onBlur={this.addFieldText}
          onKeyPress={this.addFieldTextConfirm}
          name="author"
          type="text"
          title="Введите автора книги"
          className={styles.newField}
          placeholder="Автор"
          defaultValue={inputData.author}
          required
        />
        <input
          onBlur={this.addFieldText}
          onKeyPress={this.addFieldTextConfirm}
          name="year"
          type="text"
          title="Введите год написания книги"
          className={styles.newField}
          placeholder="Год издания"
          defaultValue={inputData.year}
          required
        />
        <input
          onBlur={this.addFieldText}
          onKeyPress={this.addFieldTextConfirm}
          name="size"
          type="text"
          title="Введите количество страниц"
          className={styles.newField}
          placeholder="Количество страниц"
          defaultValue={inputData.size}
          required
        />
        <button
          type="submit"
          className={styles.addButton}
          title="Нажмите, когда заполнили все поля"
        >
          Добавить
        </button>
      </form>
    )
  }
}

export default AddBook;

AddBook.propTypes = {
  addBook: PropTypes.func.isRequired
};