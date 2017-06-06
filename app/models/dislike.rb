class Dislike < ApplicationRecord
  validates :song_id, :user_id, presence: true
  validates :song_id, uniqueness: { scope: :user }

  belongs_to :song
  belongs_to :user

  def self.reverse_dislike(song_id, user_id)
    dislike = Dislike.find_by_song_id_and_user_id(song_id, user_id)
    dislike.destroy if dislike
  end

  def self.destroy_and_like(song_id, user_id)
    Dislike.reverse_dislike(song_id, user_id)
    Like.create(song_id: song_id, user_id: user_id)
  end
end
