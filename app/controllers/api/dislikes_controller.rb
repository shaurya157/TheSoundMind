class Api::DislikesController < ApplicationController
  before_action :get_user

  def create
    if dislike_params[:dislike] == "true"
      Dislike.create(user_id: dislike_params[:user_id], song_id: dislike_params[:song_id])
    else
      dislike = Dislike.find_by_user_id_and_song_id(dislike_params[:user_id], dislike_params[:song_id])
      dislike.destroy
    end
    render 'api/likes/show'
  end

  private

  def get_user
    @user = User.where(id: dislike_params[:user_id]).first
  end

  def dislike_params
    params.require(:dislike).permit([:user_id, :song_id, :dislike])
  end
end
