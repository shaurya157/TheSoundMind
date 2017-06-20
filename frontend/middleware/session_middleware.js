import {receiveErrors,
        receiveCurrentUser,
        LOGIN} from '../actions/session_actions';
import {signupOrLogin} from '../util/session_api_util';
import {HashRouter} from 'react-router-dom';

const SessionMiddleware = ({dispatch}) => next => action => {
  // let success = (data) => dispatch(receiveCurrentUser(data));
  // let error = (data) => dispatch(receiveErrors(data));
  let success = (data) => console.log(data);
  let error = (data) => console.log(data);

  switch (action.type) {
    case LOGIN:
      signupOrLogin(action.user, success, error)
      return next(action);
    default:
      return next(action);
  }
}

export default SessionMiddleware;
