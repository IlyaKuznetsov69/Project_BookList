import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';

import App from 'components/App/App';
import BookPageContainer from 'containers/BookPageContainer'
import mainReducer from 'reducers/index';

const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(mainReducer),
  composeWithDevTools(
    applyMiddleware(
      thunk,
      routerMiddleware(history)
    ))
);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route exact path="/public/" component={App} />
          <Route path="/public/:id" component={BookPageContainer} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
