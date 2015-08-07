Rails.application.routes.draw do
  root "static_pages#root"

  resource :user, only: [:new, :create, :destroy]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :boards, except: [:new, :edit] do
      resources :lists, only: :create do
        resources :cards, only: :create
      end
    end
    resources :lists, only: [:update, :destroy]
    resources :cards, only: [:update, :destroy, :show]
  end
end
