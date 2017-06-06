class CreateActivities < ActiveRecord::Migration[5.1]
  def change
    create_table :activities do |t|
      t.string :name, null: false
      t.integer :song_id, null: false

      t.timestamps
    end

    add_index :activities, [:name, :song_id]
  end
end
