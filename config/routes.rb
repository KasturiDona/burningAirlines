Rails.application.routes.draw do
  get 'booking/home'

  root :to => 'flights#index'
  resources :users
  resources :reservations
  resources :flights
  resources :airplanes

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  delete '/login' => 'sessions#destroy'
  

end
