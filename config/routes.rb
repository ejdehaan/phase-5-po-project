Rails.application.routes.draw do
  resources :orders, only: [:index, :show, :edit, :update]
  resources :suppliers
  resources :users, only: [:index, :show, :edit, :update]


  get "/me", to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/signup", to: "users#create"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end