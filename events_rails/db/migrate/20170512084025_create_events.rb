class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :title
      t.string :location
      t.integer :day
      t.integer :month
      t.integer :year
      t.integer :time

      t.timestamps
    end
  end
end
