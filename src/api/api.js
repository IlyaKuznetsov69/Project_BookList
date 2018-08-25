import request from 'superagent';

const booksPath = 'http://localhost:3000/books';
const filtersPath = 'http://localhost:3000/filters';

const throwError = (err) => {
  return alert(`Что-то не так пошло! ${err.status} (${err.message})`);
};

export const fetchBooksRequest = async () => {
  const { body } = await request.get(booksPath)
    .catch((err) => throwError(err));
  return body;
};

export const fetchFiltersRequest = async () => {
  const { body } = await request.get(filtersPath)
    .catch((err) => throwError(err));
  return body;
};

export const addBookRequest = async (book) => {
  await request
    .post(booksPath)
    .send(book)
    .catch((err) => throwError(err));
  const books = await fetchBooksRequest();
  return books;
};

export const deleteBookRequest = async (id) => {
  await request.delete(`${booksPath}/${id}`)
    .catch((err) => throwError(err));
  const books = await fetchBooksRequest();
  return books;
};

export const sendBookDataRequest = (id, book) => {
  request.put(`${booksPath}/${id}`)
    .send(book)
    .catch((err) => throwError(err));
};

export const sendAllBooksRequest = (books) => {
  books.forEach((book) => {
    request.put(`${booksPath}/${book.id}`)
      .send(book)
      .catch((err) => throwError(err));
  });
};

export const deleteAllReadRequest = async (books) => {
  await Promise.all(books.map(({ id }) => 
    request
      .delete(`${booksPath}/${id}`)
      .catch((err) => throwError(err)))
    );
  const newBooks = await fetchBooksRequest();
  return newBooks;
};

export const sendFilterRequest = (filter) => {
  request.patch(filtersPath)
    .send({selectedFilter: filter})
    .catch((err) => throwError(err));
};

export const sendSearchValueRequest = (value) => {
  request.patch(filtersPath)
    .send({searchValue: value})
    .catch((err) => throwError(err));
};