import { RECEIVE_RECOMMENDATIONS } from '../actions/ask_actions';
import { RECEIVE_RECO_FEEDBACK } from '../actions/feedback_actions';
import merge from 'lodash/merge';

const _defaultState = {
  firstRecommendation: [],
  secondRecommendation: [],
  thirdRecommendation: [],
  id: null,
  feedback: null,
  mood: "",
  location: "",
  activity: ""
}

const AskReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch (action.type) {
    case RECEIVE_RECOMMENDATIONS:
      newState.firstRecommendation = action.recommendations.firstRecommendation;
      newState.secondRecommendation = action.recommendations.secondRecommendation;
      newState.thirdRecommendation = action.recommendations.thirdRecommendation;
      newState.id = action.recommendations.id;
      newState.mood = action.recommendations.mood;
      newState.location = action.recommendations.location;
      newState.activity = action.recommendations.activity;
      newState.feedback = action.recommendations.feedback;

      return newState;
    case RECEIVE_RECO_FEEDBACK:
      newState.feedback = action.feedback
      
      return newState;
    default:
      return oldState;
  }
}

export default AskReducer;
