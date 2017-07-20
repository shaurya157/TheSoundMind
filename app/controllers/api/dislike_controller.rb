class Api::DislikeController < ApplicationController
  before_action :get_user

  def create
    Dislike.create(like_params)
    render 'api/likes/show'
  end

  def destroy
    Dislike.destroy(like_params)
    render 'api/likes/show'
  end

  private

  def get_user
    @user = User.where(id: dislike_params[:user_id]).first
  end

  def dislike_params
    params.require(:dislike).permit([:user_id, :song_id])
  end
end
