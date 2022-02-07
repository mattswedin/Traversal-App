Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root' # (root = '/') static_pages controller #root 
  # when the url is only '/', we're gonna go to static_pages controller, hitting the root method

end
