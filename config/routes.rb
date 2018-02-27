Rails.application.routes.draw do
  resources :movies

  get 'categories', to: 'categories#index'
  post 'auth/login', to: 'authentication#authenticate'
  post 'signup', to: 'users#create'
end
