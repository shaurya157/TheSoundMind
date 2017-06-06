class RecommendedSong < ApplicationRecord
  validates :song_id, :recommendation_id, presence: true
  validates :recommendation_id, uniqueness: { scope: :song_id }

  belongs_to :recommendation
  belongs_to :song
end
