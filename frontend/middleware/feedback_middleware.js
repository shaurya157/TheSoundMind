import {LIKE,
        DISLIKE,
        UNDO_LIKE,
        UNDO_DISLIKE,
        receiveNewLikedSongs,
        receiveNewDislikedSongs} from '../actions/feedback_actions';
import {like,
        dislike,
        undoLike,
        undoDislike} from '../util/feedback_util';

const FeedbackMiddleware = ({dispatch}) => next => action => {
  const likeSuccess = (data) => dispatch(receiveNewDislikedSongs(data));
  const dislikeSuccess = (data) => dispatch(receiveNewDislikedSongs(data));

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
      undoDislike(action.userId, action.songId, dislikeSuccess)
      return next(action);
    default:
      return next(action);
  }
}

export default FeedbackMiddleware;
