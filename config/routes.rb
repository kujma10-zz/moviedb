Rails.application.routes.draw do
  get 'movies/search', to: 'movies#search'
  resources :movies

  get 'categories', to: 'categories#index'
  get 'categories/:id/movies', to: 'categories#movies'

  post 'auth/login', to: 'authentication#authenticate'
  post 'signup', to: 'users#create'
end
