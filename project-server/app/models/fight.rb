class Fight < ActiveRecord::Base
    belongs_to :blue_fighter
    belongs_to :red_fighter
end