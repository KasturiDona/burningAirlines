Rails.application.routes.draw do
  get 'booking/home'

  get '/flights/search' => 'flights#search'
  get '/flights/results' => 'flights#results'

  root :to => 'flights#index'
  resources :users
  resources :reservations
  resources :flights
  resources :airplanes

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  delete '/login' => 'sessions#destroy'
  
  get '/reserve' => 'reservations#home'  # Start the backbone

end
