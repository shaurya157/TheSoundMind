class CreateLocations < ActiveRecord::Migration[5.1]
  def change
    create_table :locations do |t|
      t.string :name, null: false
      t.integer :song_id, null: false

      t.timestamps
    end

    add_index :locations, [:name, :song_id]
  end
end
