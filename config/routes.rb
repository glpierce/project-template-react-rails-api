Rails.application.routes.draw do
  # namespace :api do
    resources :services
    resources :provider_services, only: [:show]
    
    resources :tasks, only: [:index, :create, :show, :update, :destroy]
    resources :bookings, only: [:create, :show, :destroy]
    resources :owners, only: [:create, :show, :destroy]
    resources :providers, only: [:create, :show, :index, :destroy]
    resources :properties, only: [:index, :create, :show, :destroy]

    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    get "/me", to: "sessions#show"
    post "/email", to: "sessions#email"
    # get "/owners/me", to: "owners#show"
    # get "/providers/me", to: "providers#show"
  # end

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
