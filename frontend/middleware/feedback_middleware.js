import {LIKE,
        DISLIKE,
        UNDO_LIKE,
        UNDO_DISLIKE,
        receiveNewLikedSongs,
        receiveNewDislikedSongs,
        RECO_FEEDBACK,
        receiveRecoFeedback} from '../actions/feedback_actions';
import {like,
        dislike,
        undoLike,
        undoDislike,
        recoFeedback} from '../util/feedback_util';

const FeedbackMiddleware = ({dispatch}) => next => action => {
  const likeSuccess = (data) => dispatch(receiveNewLikedSongs(data));
  const dislikeSuccess = (data) => dispatch(receiveNewDislikedSongs(data));
  const recoSuccess = (data) => dispatch(receiveRecoFeedback(data));
  switch(action.type) {
    case LIKE:
      like(action.userId, action.songId, likeSuccess);
      return next(action);
    case DISLIKE:
      dislike(action.userId, action.songId, dislikeSuccess);
      return next(action);
    case UNDO_LIKE:
      undoLike(action.userId, action.songId, likeSuccess);
      return next(action);
    case UNDO_DISLIKE:
      undoDislike(action.userId, action.songId, dislikeSuccess);
      return next(action);
    case RECO_FEEDBACK:
      recoFeedback(action.recommendationId, action.feedback, recoSuccess);
      return next(action);
    default:
      return next(action);
  }
}

export default FeedbackMiddleware;
