Rails.application.routes.draw do
  resources :messages, only: [ :index, :create, :destroy]
  resources :skills
  resources :projects
  
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :admins, only: [ :index, :show, :create, :update]

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
