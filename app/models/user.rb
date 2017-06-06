class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true
  after_initialize :ensure_session_token, :first_login

  # Inverse of looks dicy here, might have to relook if anything breaks
  has_many :likes, inverse_of: :user
  has_many :liked_songs, through: :likes, source: :song
  has_many :dislikes, inverse_of: :user
  has_many :disliked_songs, through: :likes, source: :song

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64
  end

  def first_login
    self.login_frequency = 0
    self.query_frequency = 0
  end
end
