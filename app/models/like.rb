class Like < ApplicationRecord
  validates :song_id, :user_id, presence: true
  validates :song_id, uniqueness: { scope: :user }

  belongs_to :song
  belongs_to :user

  def self.destroy_and_dislike(song_id, user_id)
    Like.reverse_like(song_id, user_id)
    Dislike.create(song_id: song_id, user_id: user_id)
  end
end
