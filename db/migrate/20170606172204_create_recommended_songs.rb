class CreateRecommendedSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :recommended_songs do |t|
      t.integer :song_id, null: false
      t.integer :recommendation_id, null: false

      t.timestamps
    end
  end
end
