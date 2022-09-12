class CreateFights < ActiveRecord::Migration[6.1]
  def change
    create_table :fights do |t|
      t.integer :blue_fighter_id
      t.integer :red_fighter_id
      t.integer :rounds
      t.string :weight_class
      t.string :state
    end
  end
end
