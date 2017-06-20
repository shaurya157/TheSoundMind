class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :session_token, null: false
      t.integer :login_frequency, null: false, default: 0
      t.integer :query_frequency, null: false, default: 0

      t.timestamps
    end

    add_index :users, :email, unique: true
  end
end
