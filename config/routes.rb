Rails.application.routes.draw do
  resources :follows, only: [:index,:create,:destroy]
  resources :likes, only: [:index,:create,:destroy]
  resources :reviews
  resources :users
  get '/favicon.ico', to: proc { [204, {}, ['']] }

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  resources :reviews, only: [:create,:destroy]
  resources :posts
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
