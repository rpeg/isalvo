import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import configureStore, { history } from '../configureStore';
import './App.css';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <>
          <Switch>
            <Route exact path="/" render={() => (<div>Match</div>)} />
            <Route path="/work" render={() => (<div>Work</div>)} />
          </Switch>
        </>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
