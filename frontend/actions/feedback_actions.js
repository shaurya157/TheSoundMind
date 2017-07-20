export const LIKE = 'LIKE';
export const DISLIKE = 'DISLIKE';
export const UNDO_LIKE = 'UNDO_LIKE';
export const UNDO_DISLIKE = 'UNDO_DISLIKE';

export const receiveNewLikedSongs = (liked_songs) => ({
  type: LIKE,
  liked_songs
});

export const receiveNewDislikedSongs = (disliked_songs) => ({
  type: DISLIKE,
  disliked_songs
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
