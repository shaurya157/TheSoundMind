class CreateSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :songs do |t|
      t.string :url, null: false
      t.string :artist, null: false
      t.string :name, null: false
      t.integer :duration, null: false
      t.integer :impressions_in_recommendations, null: false

      t.timestamps
    end

    add_index :songs, [:name, :artist, :url, :duration]
  end
end
