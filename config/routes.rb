Rails.application.routes.draw do
  # namespace :api do
    resources :services
    resources :provider_services
    
    resources :tasks, only: [:create, :update, :destroy]
    resources :bookings, only: [:create]
    resources :owners, only: [:create, :show, :destroy]
    resources :providers, only: [:create, :show, :index, :destroy]
    resources :properties, only: [:create, :show]

    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    get "/me", to: "sessions#show"
    # get "/owners/me", to: "owners#show"
    # get "/providers/me", to: "providers#show"
  # end

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
