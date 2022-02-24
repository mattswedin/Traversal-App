class ChangeDungeonsNull < ActiveRecord::Migration[5.2]
  def change
    change_column_null :dungeons, :current_room, true
    change_column_null :dungeons, :visited_rooms, true
    remove_column :dungeons, :enemies
    remove_column :dungeons, :treasure
    remove_column :dungeons, :boss
  end
end
