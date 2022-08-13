Rails.application.routes.draw do

  get "/hi", to: "hellos#hi"
  

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end