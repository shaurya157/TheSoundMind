Rails.application.routes.draw do
  get 'likes/post'

  get 'likes/delete'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :destroy]
    resources :recommendations, only: [:index]
  end

  root to: 'static_pages#root'
end
