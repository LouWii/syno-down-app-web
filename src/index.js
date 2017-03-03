import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ProfilesList from './components/ProfilesList'
import ProfileAdd from './components/ProfileAdd'
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history, saveState } from './store';

store.subscribe(() => {
  saveState(store.getState())
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={ProfilesList}></IndexRoute>
        <Route path="/profile/add" component={ProfileAdd}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
