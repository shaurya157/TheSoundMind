import React from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter } from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import AskContainer from './ask/ask_container';
import ResultContainer from './result/result_container';

const Root = ({ store }) => {
  // TODO: this doesnt work, need to fix routing
  const _requireLogin = (nextState, replace) => {
    if(!store.getState().session.currentUser) {
      replace("/");
    } else {
      replace("/ask");
    }
  }

  return (
    <Provider store={ store }>
      <HashRouter>
        <div>
          <Route exact path="/" component={ SplashContainer } onEnter={ _requireLogin }/>
          <Route exact path="/ask" component={ AskContainer } onEnter={ _requireLogin }/>
          <Route exact path="/ask/result" component={ ResultContainer }/>
        </div>
      </HashRouter>
    </Provider>
  )
}

export default Root;
