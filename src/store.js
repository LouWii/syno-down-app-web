import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const stateStorageKey = 'syno-down-app'

const defaultState = {
  profiles: []
}

const persistedState = localStorage.getItem(stateStorageKey) ? JSON.parse(localStorage.getItem(stateStorageKey)) : defaultState
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
  )

export const history = syncHistoryWithStore(browserHistory, store)

export const saveState = (state) => {
  try {
    // TODO : Choose what to store in localStorage
    const serializedState = JSON.stringify({profiles: state.profiles})
    localStorage.setItem(stateStorageKey, serializedState)
  } catch (err) {
    // Ignore write errors.
	console.error(err)
  }
}

export default store