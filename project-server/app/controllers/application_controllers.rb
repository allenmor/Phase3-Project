class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'
  
    round_arr = [3,5]
    all_weightclasses = ["Heavyweight", "Light Heavyweight", "Middleweight", "Welterweight", "Lightweight", "Featherweight", "Bantamweight", "Flyweight", "Strawweight"]
    all_states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']



    get '/fights' do
        fights = Fight.all
        fights.to_json(include: [:blue_fighter, :red_fighter])
    end

    post '/blue' do
       blue = BlueFighter.create(
            name: params[:name],
            age: params[:age],
            image: params[:image],
            reach: params[:reach],
            weight: params[:weight],
            height: params[:height]
        )
        blue.to_json
      end
    post '/red' do
       red = RedFighter.create(
            name: params[:name],
            age: params[:age],
            image: params[:image],
            reach: params[:reach],
            weight: params[:weight],
            height: params[:height]
        )
        red.to_json
      end

    post '/fight' do
       fight = Fight.create(
            blue_fighter_id: BlueFighter.last.id,
            red_fighter_id: RedFighter.last.id,
            rounds: round_arr.sample,
            weight_class: all_weightclasses.sample,
            state: all_states.sample

        )
        fight.to_json
      end
    
      patch '/blue/:id' do 
        blue = BlueFighter.find(params[:id])
        blue.update(
            name: params[:name],
            image: params[:image]
        )
        blue.to_json
      end
    
      patch '/red/:id' do 
        red = RedFighter.find(params[:id])
        red.update(
            name: params[:name],
            image: params[:image]
        )
        red.to_json
      end

      delete '/fight/:id' do
        fight = Fight.find(params[:id])
        fight.destroy
        fight.to_json
      end


end