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
  routing: routeReducer
})

const finalCreateStore = compose(
  thunkMid,
  histMid
)(createStore);

const store = finalCreateStore(reducer);
// middleware.listenForReplays(store);

render(
  <Provider store={store}>
    <div>
<<<<<<< a4f2f81cb22d853f1ff40f4fe0d3f93e669c5ae5
      {routes}
=======
      <Router routes={routes} />
>>>>>>> [fix] removes browserHistory
    </div>
  </Provider>,
  document.getElementById('root')
);
