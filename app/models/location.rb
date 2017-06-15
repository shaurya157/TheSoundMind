class Location < ApplicationRecord
  validates :name, :song_id, presence: true
  validates :name, uniqueness: { scope: song_id }

  # TODO: seems hacky
  belongs_to :song
end
