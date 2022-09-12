class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'
  
    get '/fights' do
        fights = Fight.all
        fights.to_json(include: [:blue_fighter, :red_fighter])
    end
    


end