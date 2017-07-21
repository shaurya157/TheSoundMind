export const like = (userId, songId, success) => {
  $.ajax({
    method: "POST",
    url: 'api/likes',
    data: {like: {user_id: userId, song_id: songId, like: true}},
    success
  });
}

export const dislike = (userId, songId, success) => {
  $.ajax({
    method: "POST",
    url: 'api/dislikes',
    data: {dislike: {user_id: userId, song_id: songId, dislike: true}},
    success
  });
}

// Put 1 here because we need an id to destroy in the controller
// Just the song and user id. Still, we need an id to access destroy.

export const undoLike = (userId, songId, success) => {
  $.ajax({
    method: "POST",
    url: `api/likes`,
    data: {like: {user_id: userId, song_id: songId, like: false}},
    success
  });
}

export const undoDislike = (userId, songId, success) => {
  $.ajax({
    method: "POST",
    url: 'api/dislikes',
    data: {dislike: {user_id: userId, song_id: songId, dislike: false}},
    success
  });
}
