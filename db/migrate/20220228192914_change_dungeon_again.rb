class ChangeDungeonAgain < ActiveRecord::Migration[5.2]
  def change
    remove_column :dungeons, :entireDungeon, :text
    add_column :dungeons, :entireDungeon, :text
  end
end
