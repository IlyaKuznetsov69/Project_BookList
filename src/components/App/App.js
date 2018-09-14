import React from 'react';
import CSSModules from 'react-css-modules';

import AddBookContainer from 'containers/AddBookContainer';
import MainSectionContainer from 'containers/MainSectionContainer';
import styles from './App.scss';

const App = () => {

  return (
    <section styleName='bookapp'>
      <header>
        <h1>список книг</h1>
        <AddBookContainer />
      </header>
      <MainSectionContainer />
    </section>
  )
}

export default CSSModules(App, styles);