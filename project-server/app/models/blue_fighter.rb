class BlueFighter < ActiveRecord::Base
    has_many :fights
    has_many :red_fighters, through: :fights
end