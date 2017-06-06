class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true
  after_initialize :ensure_session_token, :first_login

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
