class Duration < ApplicationRecord
  validates :user_id, :song_id, :song_duration_played, :recommendation_id, presence: true

  belongs_to :recommendation
  belongs_to :user
  belongs_to :song

  def percentage_of_song_played
    song_duration_played * 1.0 / song.duration
  end
end
