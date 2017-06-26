import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'
import {ask} from './actions/ask_actions'

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  let store;
  if(window.currentUser){
    store = configureStore({session: {currentUser: window.currentUser}})
  } else {
    store = configureStore();
  }

// debugging purposes
  window.store = store;
  window.success = (data) => console.log(data);
  window.error = data => console.log(data);
  window.ask = ask;
  ReactDOM.render(<Root store={store} />, rootEl);
});
