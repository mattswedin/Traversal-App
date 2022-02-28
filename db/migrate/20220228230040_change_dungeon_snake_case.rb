class ChangeDungeonSnakeCase < ActiveRecord::Migration[5.2]
  def change
    remove_column :dungeons, :entireDungeon, :text
    add_column :dungeons, :entire_dungeon, :text
    
  end
end
