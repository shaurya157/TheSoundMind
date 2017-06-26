class Api::RecommendationsController < ApplicationController
  # Need to add likes and dislikes as a metric for recommendation

  def index
    mood_songs = Mood.find_by_name(recommendation_params[:mood])
    activity_songs = Activity.find_by_name(recommendation_params[:activity])
    location_songs = Location.find_by_name(recommendation_params[:location])

    # Check if line below syntax is correct
    @recommendation = Recommendation.create(recommendation_params)
    increment_query

    @sorted_songs = song_sorter(mood_songs, activity_songs, location_songs)
    render 'api/recommendations/index'
  end

  private

  def recommendation_params
    params.require(:recommendation).permit([:mood,
                                            :activity,
                                            :location,
                                            :user_id])
  end

  def increment_query
    user = User.find_by_id(recommendation_params[:user_id])
    user.query_frequency += 1
    user.save
  end

  # Algorithm to select the importance of song display in recommendation
  # Songs that show on all 3 arrays have higher importance, 2 arrays next
  # only 1 array least important
  # TODO: Refactor later, method too big
  # TODO: Add likes and dislikes as a measure of sorting
  def song_sorter(arr1, arr2, arr3)
    sorted_songs = {}

    (arr1 + arr2 + arr3).each do |classifier|
      if sorted_songs[classifier]
        sorted_songs[classifier] += 1
      else
        sorted_songs[classifier] = 1
      end
    end

    result = {
      first_recommendation: [],
      second_recommendation:  [],
      third_recommendation: []
    }

    # TODO: this looks particularly slow; its hitting the database repeatedly
    # TODO: fix so that key.song is retrieved automatically
    sorted_songs.each do |key, value|
      Recommended_song.create(song_id: key.song.id,
                              recommendation_id: @recommendation.id)
      case value
      when 3
        result[:first_recommendation] << key.song
      when 2
        result[:second_recommendation] << key.song
      when 1
        result[:third_recommendation] << key.song
      end
    end

    result
  end
end
