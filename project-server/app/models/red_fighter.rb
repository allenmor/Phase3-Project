class RedFighter < ActiveRecord::Base
    has_many :fights
    has_many :blue_fighters, through: :fights
end