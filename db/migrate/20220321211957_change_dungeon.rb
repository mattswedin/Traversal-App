class ChangeDungeon < ActiveRecord::Migration[5.2]
  def change
    remove_column :dungeons, :current_room
    remove_column :dungeons, :entire_dungeon
    remove_column :dungeons, :visited_rooms
    add_column :dungeons, :next_room_id, :integer
  end
end
