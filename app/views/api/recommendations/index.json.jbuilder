# Temporary workaround TODO: write a loop for this

json.firstRecommendation(@sorted_songs[:first_recommendation])
json.secondRecommendation(@sorted_songs[:second_recommendation])
json.thirdRecommendation(@sorted_songs[:third_recommendation])
json.id @recommendation.id
json.mood @recommendation.mood
json.activity @recommendation.activity
json.location @recommendation.location
json.feedback @recommendation.feedback
