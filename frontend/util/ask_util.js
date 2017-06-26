export const ask = (mood, location, activity, userId, success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/recommendations',
    data: { recommendation: {
                              mood: mood,
                              location: location,
                              activity: activity,
                              user_id: userId}},
    success,
    error
  })
}
