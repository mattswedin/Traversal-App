class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.integer :level, null: false, default: 1
      t.integer :attack, null: false, default: 10
      t.integer :defense, null: false, default: 10
      t.timestamps
    end
    add_index :users, :username
  end
end
