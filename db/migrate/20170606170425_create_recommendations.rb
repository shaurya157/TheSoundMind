class CreateRecommendations < ActiveRecord::Migration[5.1]
  def change
    create_table :recommendations do |t|
      t.integer :mood_id, null: false
      t.integer :activity_id, null: false
      t.integer :location_id, null: false
      t.boolean :feedback
      t.integer :user_id, null: false
      t.string :time_spent, null: false

      t.timestamps
    end
  end
end
