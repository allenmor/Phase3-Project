require 'faker'

round_arr = [3, 5]
all_weightclasses = ["Heavyweight", "Light Heavyweight", "Middleweight", "Welterweight", "Lightweight", "Featherweight", "Bantamweight", "Flyweight", "Strawweight"]

all_states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']


10.times do |t|
    BlueFighter.create(
        name: Faker::Name.name,
        age: rand(18..37),
        weight: rand(115..265),
        height: rand(62..84),
        reach: rand(34..85),
        image: Faker::LoremFlickr.image(size: "300x300", search_terms: ['ufc'])
    )
end

10.times do |t|
    RedFighter.create(
        name: Faker::Name.name,
        age: rand(18..37),
        weight: rand(115..265),
        height: rand(62..84),
        reach: rand(34..85),
        image: Faker::LoremFlickr.image(size: "300x300", search_terms: ['ufc'])
    )
end

10.times do |t|
    Fight.create(
        blue_fighter_id: BlueFighter.all.sample.id,
        red_fighter_id: RedFighter.all.sample.id,
        rounds: round_arr.sample,
        weight_class: all_weightclasses.sample,
        state: all_states.sample
    )
end

