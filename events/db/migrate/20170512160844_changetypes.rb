class Changetypes < ActiveRecord::Migration[5.1]
  def change


      
        remove_column :events, :day, :integer
        remove_column :events, :month, :integer


  end
end
