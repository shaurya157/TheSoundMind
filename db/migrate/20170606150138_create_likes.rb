class CreateLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :likes do |t|
      t.integer :song_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :likes, [:song_id, :user_id]
  end
end
