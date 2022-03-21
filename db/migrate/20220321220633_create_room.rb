class CreateRoom < ActiveRecord::Migration[5.2]
  def change
    create_table :rooms do |t|
      t.integer :enemy_id, null: false
      t.integer :next_room_id
      t.string :name, null: false
    end
  end
end
