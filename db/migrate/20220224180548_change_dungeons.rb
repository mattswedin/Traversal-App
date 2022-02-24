class ChangeDungeons < ActiveRecord::Migration[5.2]
  def change
    change_column_null :dungeons, :dungeon, true
  end
end
