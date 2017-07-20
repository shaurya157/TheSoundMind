Rails.application.routes.draw do
  get 'likes/post'

  get 'likes/delete'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :destroy]
    resources :recommendations, only: [:index]
    resources :likes, only: [:create, :destroy]
    resources :dislikes, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
end
