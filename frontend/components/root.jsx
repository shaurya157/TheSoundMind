import React from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter } from 'react-router-dom';

const Root = ({ store }) => {
  const _requireLogin = (nextState, replace) => {
    if(!store.getState().session.currentUser) {
      replace("/");
    }
  }
debugger
// <Provider store={ store }>
//   <Router history = { hashHistory }>
//     <h1>Temp h1</h1>
//   </Router>
// </Provider>
  return (
    <HashRouter>
      <div>
        <Route exact path="/" render={()=><div>Hello!</div>} />
      </div>
    </HashRouter>
  )
}

export default Root;
