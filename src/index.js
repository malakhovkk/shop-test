import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import {getItems} from './actions/items';
import _items from './shop.json';

const store = createStore(rootReducer);

// console.log(_items)
store.dispatch(getItems(_items));
store.dispatch(
    {
      type: 'SET_ITEMS',
      payload: store.getState().Category.items[0].items,
    },
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
