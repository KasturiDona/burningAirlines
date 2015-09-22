class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.text :flight_number
      t.text :to
      t.text :from
      t.date :flight_date
      t.integer :airplane_id

      t.timestamps null: false
    end
  end
end
