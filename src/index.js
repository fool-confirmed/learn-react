import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import appReducers from './reducers/app-reducers';

const store = createStore(appReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


//const unsubscribe = store.subscribe(()=>console.log(store.getState()));
// store.dispatch(addValue("111"));
// store.dispatch(addValue("222"));
// store.dispatch(addValue("111"));
// unsubscribe();
