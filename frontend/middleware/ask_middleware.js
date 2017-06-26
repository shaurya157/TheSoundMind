import {ASK, receiveRecommendations} from '../actions/ask_actions';
import {ask} from '../util/ask_util';

const AskMiddleware = ({dispatch}) => next => action => {
  let success = (data) => dispatch(receiveRecommendations(data));
  // TODO: write proper error handling
  let error = (data) => console.log(data);

  switch(action.type) {
    case ASK:
      ask(action.mood, action.location, action.activity, action.user_id, success, error);
      return next(action);
    default:
      return next(action);
  }
}

export default AskMiddleware;
