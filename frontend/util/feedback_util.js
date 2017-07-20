export const like = (userId, songId, success) => {
  $.ajax({
    method: "POST",
    url: 'api/likes',
    data: {like: {user_id: userId, song_id: songId}},
    success
  });
}

export const dislike = (userId, songId, success) => {
  $.ajax({
    method: "POST",
    url: 'api/dislikes',
    data: {like: {user_id: userId, song_id: songId}},
    success
  });
}

// Put nil here because we don't need an id to destroy in the controller
// Just the song and user id. Still, we need an id to access destroy.

export const undoLike = (userId, songId, success) => {
  $.ajax({
    method: "DELETE",
    url: `api/likes/nil`,
    data: {like: {user_id: userId, song_id: songId}},
    success
  });
}

export const undoDislike = (userId, songId, success) => {
  $.ajax({
    method: "DELETE",
    url: 'api/dislikes/nil',
    data: {like: {user_id: userId, song_id: songId}},
    success
  });
}
