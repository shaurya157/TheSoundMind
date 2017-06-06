class CreateDislikes < ActiveRecord::Migration[5.1]
  def change
    create_table :dislikes do |t|
      t.integer :song_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :dislikes, [:song_id, :user_id]
  end
end
