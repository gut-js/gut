import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import sayHello from './../reducers/reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(sayHello, initialState);

    return store;
}
