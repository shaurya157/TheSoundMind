import {receiveErrors,
        receiveCurrentUser,
        LOGIN} from '../actions/session_actions';
import {signupOrLogin} from '../util/session_api_util';

const SessionMiddleware = ({dispatch}) => next => action => {
  let success = (data) => dispatch(receiveCurrentUser(data));
  let error = (data) => dispatch(receiveErrors(data));

  switch (action.type) {
    case LOGIN:
      signupOrLogin(action.user, success, error)
      return next(action);
    default:
      return next(action);
  }
}

export default SessionMiddleware;
