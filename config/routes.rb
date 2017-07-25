Rails.application.routes.draw do
  get 'likes/post'

  get 'likes/delete'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :destroy]
    resources :recommendations, only: [:index] do
      member do
        post :feedback
        post :song_played
      end
    end
    resource :likes, only: [:create, :destroy]
    resource :dislikes, only: [:create, :destroy]
  end
  root to: 'static_pages#root'
end
