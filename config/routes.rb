Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :destroy]
  end

  root to: 'static_pages#root'
end
