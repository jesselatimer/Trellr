Rails.application.routes.draw do
  root "static_pages#root"

  resource :user, only: [:new, :create, :destroy]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :boards, except: [:new, :edit]
    resources :lists, only: [:update, :destroy, :create]
    resources :cards, only: [:update, :destroy, :show, :create]
  end
end
