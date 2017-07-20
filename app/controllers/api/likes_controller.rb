class Api::LikesController < ApplicationController
  before_action :get_user

  def create
    Like.create(like_params)
  end

  def destroy
    Like.destroy(like_params)
  end

  def dislike
    Dislike.create(like_params)
  end

  def undo_dislike
    Dislike.destroy(like_params)
  end

  def get_user
    @user = User.where(id: like_params[:user_id])
  end

  private
  def like_params
    params.require(:like).permit([:user_id, :song_id])
  end
end
