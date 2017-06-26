export const ask = (mood, location, activity, userId, success, error) => {
  $.ajax({
    method: 'SHOW',
    url: 'api/recommendations',
    data: { mood: mood, location: location,
            activity: activity, user_id: userId},
    success,
    error
  })
}
