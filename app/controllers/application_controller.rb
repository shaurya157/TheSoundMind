class ApplicationController < ActionController::Base
  # TODO: null session here is a placeholder for actual auth.
  # Since this is an alpha, don't need it yet, change later.

  # protect_from_forgery with: :exception
  protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token
  helper_method :current_user

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def login!(user)
    user.login_frequency += 1
    user.save
    session[:session_token] = user.session_token
  end

  def logout!
    current_user.reset_token!
    current_user.save
    session[:session_token] = nil
  end
end
