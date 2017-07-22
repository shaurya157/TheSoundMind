export const LIKE = 'LIKE';
export const DISLIKE = 'DISLIKE';
export const UNDO_LIKE = 'UNDO_LIKE';
export const UNDO_DISLIKE = 'UNDO_DISLIKE';
export const RECEIVE_NEW_LIKED_SONGS = 'RECEIVE_NEW_LIKED_SONGS';
export const RECEIVE_NEW_DISLIKED_SONGS = 'RECEIVE_NEW_DISLIKED_SONGS';
export const RECO_FEEDBACK = 'RECOMMENDATION_FEEDBACK';
export const RECEIVE_RECO_FEEDBACK = 'RECEIVE_RECCO_FEEDBACK';

export const recoFeedback = (recommendationId, feedback) => ({
  type: RECO_FEEDBACK,
  recommendationId,
  feedback
});

export const receiveRecoFeedback = (recommendation) => ({
  type: RECEIVE_RECO_FEEDBACK,
  recommendation
});

export const receiveNewLikedSongs = (songs) => ({
  type: RECEIVE_NEW_LIKED_SONGS,
  songs
});

export const receiveNewDislikedSongs = (songs) => ({
  type: RECEIVE_NEW_DISLIKED_SONGS,
  songs
});

export const like = (userId, songId) => ({
  type: LIKE,
  userId,
  songId,
});

export const dislike = (userId, songId) => ({
  type: DISLIKE,
  userId,
  songId,
});

export const undoLike = (userId, songId) => ({
  type: UNDO_LIKE,
  userId,
  songId,
});

export const undoDislike = (userId, songId) => ({
  type: UNDO_DISLIKE,
  userId,
  songId,
});
