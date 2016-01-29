import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { syncHistory, routeReducer } from 'react-router-redux';
import createHistory from 'history/lib/createHashHistory';
import configureStore from './store/configureStore';
import thunk from 'redux-thunk';

import authReducer from './reducers/authReducer';
import searchReducer from './reducers/searchReducer';
import pollReducer from './reducers/pollReducer';
import dinerReducer from './reducers/dinerReducer';

//Router stuff:
import routes from './routes';

//Containers
import HomePage from './containers/HomePage'

const history = createHistory();
const thunkMid = applyMiddleware(thunk)
const histMid = applyMiddleware(syncHistory(history));
const reducer = combineReducers({
  authReducer,
  searchReducer,
  pollReducer,
  dinerReducer,
  routing: routeReducer
})

const finalCreateStore = compose(
  thunkMid,
  histMid, 
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);


const store = finalCreateStore(reducer);

render(
  <Provider store={store}>
    <div>
      {routes}
    </div>
  </Provider>,
  document.getElementById('root')
);
