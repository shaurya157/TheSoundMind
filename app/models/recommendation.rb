class Recommendation < ApplicationRecord
  validates :mood, :activity, :location, :user_id, presence: true

  has_many :recommended_songs
  has_many :songs, through: :recommended_songs, source: :song
end
