import { createStore } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';

const storage = window.localStorage
const stateStorageKey = 'syno-down-app'

const defaultState = {
  profiles: []
}

const persistedState = storage.getItem(stateStorageKey) ? JSON.parse(localStorage.getItem(stateStorageKey)) : defaultState

const store = createStore(rootReducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const history = syncHistoryWithStore(browserHistory, store)

export const saveState = (state) => {
  try {
    // TODO : Choose what to store in localStorage
    const serializedState = JSON.stringify(state)
    localStorage.setItem(stateStorageKey, serializedState)
  } catch (err) {
    // Ignore write errors.
	console.error(err)
  }
}

export default store