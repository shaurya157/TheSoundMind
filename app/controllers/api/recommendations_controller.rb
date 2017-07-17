class Api::RecommendationsController < ApplicationController
  # Need to add likes and dislikes as a metric for recommendation

  def index
    mood_songs = Mood.includes(:song).where(name: recommendation_params[:mood])
    activity_songs = Activity.includes(:song).where(name: recommendation_params[:activity])
    location_songs = Location.includes(:song).where(name: recommendation_params[:location])

    @recommendation = Recommendation.create(recommendation_params)
    @user = User.find_by_id(recommendation_params[:user_id])
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
    @user.query_frequency += 1
    @user.save
  end

  # Algorithm to select the importance of song display in recommendation
  # Songs that show on all 3 arrays have higher importance, 2 arrays next
  # only 1 array least important
  # TODO: Refactor later, method too big
  # TODO: Add likes and dislikes as a measure of sorting
  def song_sorter(arr1, arr2, arr3)
    sorted_songs = {}

    (arr1 + arr2 + arr3).each do |classifier|
      song = classifier.song
      sorted_songs[song] ? sorted_songs[song] += 1 : sorted_songs[song] = 1
    end

    result = {
      first_recommendation: [],
      second_recommendation:  [],
      third_recommendation: []
    }

    sorted_songs.each do |song, value|
      # TODO: Come back to this when you have async figured out
      # RecommendedSong.create(song_id: song.id,
      #                        recommendation_id: @recommendation.id)
      case value
      when 3
        result[:first_recommendation] << song
      when 2
        result[:second_recommendation] << song
      when 1
        result[:third_recommendation] << song
      end
    end

    result
  end
end
