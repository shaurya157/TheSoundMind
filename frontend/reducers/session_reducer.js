import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT } from '../actions/session_actions';
import merge from 'lodash/merge'

const _defaultState = {
  currentUser: {},
  errors: []
};

const SessionReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type){
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.currentUser;
      newState.errors = [];
      return newState
    case RECEIVE_ERRORS:
      // TODO: Look into this, doing error validation on frontend, still needed?
      newState.errors = action.errors
      return newState
    case LOGOUT:
      return _defaultState;
    default:
      return oldState;
  }
}

export default SessionReducer;
