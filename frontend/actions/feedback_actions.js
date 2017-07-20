export const LIKE = 'LIKE';
export const DISLIKE = 'DISLIKE';
export const UNDO_LIKE = 'UNDO_LIKE';
export const UNDO_DISLIKE = 'UNDO_DISLIKE';

export const like = (liked_songs) => ({
  type: LIKE,
  liked_songs
});

export const dislike = (disliked_songs) => ({
  type: LIKE,
  disliked_songs
});

// Seems like we can do this solely on the frontend instead of having an api
// call that gives us back the new liked and disliked songs
// TODO: may need to refractor this
export const undoLike = (liked_songs) => ({
  type: LIKE,
  liked_songs
});

export const undoDislike = (liked_songs) => ({
  type: LIKE,
  liked_songs
});
