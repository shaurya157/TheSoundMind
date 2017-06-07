class Api::UsersController < ApplicationController
  # Currently the user controller doubles as a session controller because
  # of lack of differenciation between login and signup.
  # TODO: add a session controller and redo user controller

  # TODO: null session here is a placeholder for actual auth.
  # Since this is an alpha, don't need it yet, change later.
  skip_before_action :verify_authenticity_token

  def create
    if user_params[:email] =~ /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
      @user = User.find_by_email(user_params[:email])
      @user = User.new(user_params) unless @user
      login!(@user)
      render 'api/users/show'
    else
      render json: ['Invalid email format'], status: 401
    end
  end

  # def show
  #
  # end

  def destroy
    if current_user
      logout!
      render json: {}
    else
      render json: ['No current user'], status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit([:email])
  end
end
