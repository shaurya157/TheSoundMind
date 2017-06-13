class Api::RecommendationsController < ApplicationController
  # Need to add likes and dislikes as a metric for recommendation
  
  def show
    mood_songs = Mood.find_by_name(recommendation_params[:mood])
    activity_songs = Activity.find_by_name(recommendation_params[:activity])
    location_songs = Location.find_by_name(recommendation_params[:location])

    sorted_songs = song_sorter(mood_songs, activity_songs, location_songs)
    render 'api/recommendations/show'
  end

  private

  def recommendation_params
    params.require(:recommendation).permit([:mood, :activity, :location])
  end

  # Algorithm to select the importance of song display in recommendation
  # Songs that show on all 3 arrays have higher importance, 2 arrays next
  # only 1 array least important
  # TODO: Refactor later, method too big
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

    sorted_songs.each do |key, value|
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
