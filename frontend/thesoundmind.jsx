import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  let store;
  if(window.currentUser){
    store = configureStore({session: {currentUser: window.currentUser}})
  } else {
    store = configureStore();
  }
  // debugger
  ReactDOM.render(<Root store={store} />, rootEl);
});
