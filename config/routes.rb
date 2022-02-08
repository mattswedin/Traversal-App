Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: {format: :json} do
    resources :users, except: [:new]
    resource :session, only: [:create, :destroy, :show]
  end

  root 'static_pages#root' # (root = '/') static_pages controller #root 
  # when the url is only '/', we're gonna go to static_pages controller, hitting the root method

end
