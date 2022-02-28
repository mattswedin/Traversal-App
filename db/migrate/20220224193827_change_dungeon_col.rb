class ChangeDungeonCol < ActiveRecord::Migration[5.2]
  def change
    remove_column :dungeons, :dungeon, :text
    add_column :dungeons, :entireDungeon, :text
  end
end
