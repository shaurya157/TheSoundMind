import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT } from '../actions/session_actions';
import {RECEIVE_NEW_LIKED_SONGS, RECEIVE_NEW_DISLIKED_SONGS} from '../actions/feedback_actions';
import merge from 'lodash/merge';

const _defaultState = {
  currentUser: {
    liked_songs: [],
    disliked_songs: []
  },
  errors: []
};

const SessionReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.currentUser;
      newState.errors = [];
      return newState;
    case RECEIVE_ERRORS:
      // TODO: Look into this, doing error validation on frontend, still needed?
      newState.errors = action.errors
      return newState;
    case LOGOUT:
      return _defaultState;
    case RECEIVE_NEW_LIKED_SONGS:
      newState.currentUser.liked_songs = action.songs.liked_songs
      return newState;
    case RECEIVE_NEW_DISLIKED_SONGS:
      newState.currentUser.disliked_songs = action.songs.disliked_songs
      return newState;
    default:
      return oldState;
  }
}

export default SessionReducer;
