import React from 'react';

import AddBookContainer from 'containers/AddBookContainer';
import MainSectionContainer from 'containers/MainSectionContainer';
import styles from './App.css';

const App = () => {

  return (
    <section className={styles.bookapp}>
      <header className={styles.header}>
        <h1>список книг</h1>
        <AddBookContainer />
      </header>
      <MainSectionContainer />
    </section>
  )
}

export default App;