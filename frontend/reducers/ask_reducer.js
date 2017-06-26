import { RECEIVE_RECOMMENDATIONS } from '../actions/ask_actions';
import merge from 'lodash/merge';

const _defaultState = {
  firstRecommendation: [],
  secondRecommendation: [],
  thirdRecommendation: []
}

const AskReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch (action.type) {
    case RECEIVE_RECOMMENDATIONS:
      newState.firstRecommendation = action.recommendations.firstRecommendation;
      newState.secondRecommendation = action.recommendations.secondRecommendation;
      newState.thirdRecommendation = action.recommendations.thirdRecommendation;

      return newState
    default:
      return oldState;
  }
}

export default AskReducer;
