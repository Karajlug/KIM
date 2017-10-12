import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import createHistory from 'history/createMemoryHistory';
import { Provider, connect } from 'react-redux';
import { ConnectedRouter, syncHistoryWithStore } from 'react-router-redux';

import configureStore from './src/store';

import SignIn from './src/SignIn';

export default class App extends Component<{}> {
  render() {
    const history = createHistory();
    const store = configureStore(history);

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={SignIn} title="ورود" />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}
