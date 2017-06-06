class Mood < ApplicationRecord
  validates :name, :song_id, presence: true
  validates :name, uniqueness: { scope: song_id }
end
