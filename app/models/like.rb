class Like < ApplicationRecord
  validates :song_id, :user_id, presence: true
  validates :song_id, uniqueness: { scope: :user }

  belongs_to :song
  belongs_to :user
end
