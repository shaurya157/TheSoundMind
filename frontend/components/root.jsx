import React from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter } from 'react-router-dom';
import SplashContainer from './splash/splash_container'

const Root = ({ store }) => {
  const _requireLogin = (nextState, replace) => {
    if(!store.getState().session.currentUser) {
      replace("/");
    }
  }
  return (
    <Provider store={ store }>
      <HashRouter>
        <div>
          <Route exact path="/" component={ SplashContainer } />
        </div>
      </HashRouter>
    </Provider>
  )
}

export default Root;
