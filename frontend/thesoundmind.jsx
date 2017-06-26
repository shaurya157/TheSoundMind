import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'
import {login} from './actions/session_actions'

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
  // window.login = login
  window.success = (data) => console.log(data);
  window.error = data => console.log(data);

  ReactDOM.render(<Root store={store} />, rootEl);
});
