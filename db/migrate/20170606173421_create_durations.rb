class CreateDurations < ActiveRecord::Migration[5.1]
  def change
    create_table :durations do |t|
      t.integer :user_id, null: false
      t.integer :song_id, null: false
      t.integer :song_duration_played, null: false
      t.integer :recommendation_id, null: false

      t.timestamps
    end
  end
end
