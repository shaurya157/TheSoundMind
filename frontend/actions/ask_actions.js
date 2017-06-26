export const ASK = "ASK";
export const RECEIVE_RECOMMENDATIONS = "RECEIVE_RECOMMENDATIONS";

export const ask = (mood, location, activity, user_id) => ({
  type: ASK,
  mood,
  location,
  activity,
  user_id
})

export const receiveRecommendations = (recommendations) => ({
  type: RECEIVE_RECOMMENDATIONS,
  recommendations
})
