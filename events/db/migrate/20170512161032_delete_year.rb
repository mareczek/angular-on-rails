class DeleteYear < ActiveRecord::Migration[5.1]
  def change

            remove_column :events, :year, :integer
            add_column :events, :eventDate, :date

  end
end
E