class ChangeEnemyTwo < ActiveRecord::Migration[5.2]
  def change
    remove_column :enemies, :dungeon_id, :integer
  end
end
