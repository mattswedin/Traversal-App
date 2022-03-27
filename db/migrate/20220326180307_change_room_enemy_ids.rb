class ChangeRoomEnemyIds < ActiveRecord::Migration[5.2]
  def change
    remove_column :rooms, :enemy_id
    add_column :rooms, :enemies, :text, array: true, default: []
  end
end
