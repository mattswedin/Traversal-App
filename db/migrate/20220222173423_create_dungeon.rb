class CreateDungeon < ActiveRecord::Migration[5.2]
  def change
    create_table :dungeons do |t|
      t.integer :player_id, null: false
      t.integer :room_amount, null: false, default: 3
      t.text :dungeon, null: false
      t.text :current_room, null: false
      t.text :visited_rooms, null: false
      t.text :enemies, null: false, array: true
      t.text :treasure, null: false, array: true
      t.string :boss

      t.timestamps
    end
  end
end
