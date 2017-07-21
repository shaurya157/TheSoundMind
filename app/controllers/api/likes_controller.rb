class Api::LikesController < ApplicationController
  before_action :get_user

  def create
    if like_params[:like] == "true"
      Like.create(user_id: like_params[:user_id], song_id: like_params[:song_id])
    else
      like = Like.find_by_user_id_and_song_id(like_params[:user_id], like_params[:song_id])
      like.destroy
    end
    render 'api/likes/show'
  end

  private

  def get_user
    @user = User.where(id: like_params[:user_id]).first
  end

  def like_params
    params.require(:like).permit([:user_id, :song_id, :like])
  end
end
