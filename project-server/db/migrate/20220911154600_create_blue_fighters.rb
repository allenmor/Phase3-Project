class CreateBlueFighters < ActiveRecord::Migration[6.1]
  def change
    create_table :blue_fighters do |t|
      t.string :name
      t.integer :age
      t.integer :weight
      t.integer :height
      t.integer :reach
      t.string :image
    end
  end
end
