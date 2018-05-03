Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope ENV['MYAPP_RELATIVE_URL_ROOT'] || '/' do
    resources :signups
    resources :sample_requests
    resources :sales
    resources :chats
    end
end
