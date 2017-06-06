class CreateRecommendations < ActiveRecord::Migration[5.1]
  def change
    create_table :recommendations do |t|
      t.string :mood, null: false
      t.string :activity, null: false
      t.string :location, null: false
      t.boolean :feedback
      t.integer :user_id, null: false
      t.integer :time_spent, null: false, default: 0

      t.timestamps
    end
  end
end
