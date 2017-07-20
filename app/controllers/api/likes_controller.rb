class Api::LikesController < ApplicationController
  before_action :get_user

  def create
    Like.create(like_params)
    render 'api/show'
  end

  def destroy
    Like.destroy(like_params)
    render 'api/show'
  end

  private
  
  def get_user
    @user = User.where(id: like_params[:user_id])
  end

  def like_params
    params.require(:like).permit([:user_id, :song_id])
  end
end
