import { connect } from 'react-redux';
import Result from './result';
import {like,
        dislike,
        undoLike,
        undoDislike,
        recoFeedback,
        songPlayed} from '../../actions/feedback_actions';

// TODO: map first second and third recommendations to this
const mapStateToProps = ({session, recommendations}) => ({
  currentUser: session.currentUser,
  recommendation: recommendations,
  firstRecommendation: recommendations.firstRecommendation,
  secondRecommendation: recommendations.secondRecommendation,
  thirdRecommendation: recommendations.thirdRecommendation,
  likedSongs: session.currentUser.liked_songs,
  dislikedSongs: session.currentUser.disliked_songs
});

const mapDispatchToProps = dispatch  => ({
  like: (user_id, song_id) => dispatch(like(user_id, song_id)),
  dislike: (user_id, song_id) => dispatch(dislike(user_id, song_id)),
  undoLike: (user_id, song_id) => dispatch(undoLike(user_id, song_id)),
  undoDislike: (user_id, song_id) => dispatch(undoDislike(user_id, song_id)),
  recoFeedback: (recoId, feedback) => dispatch(recoFeedback(recoId, feedback)),
  songPlayed: (recoId) => dispatch(songPlayed(recoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Result);
