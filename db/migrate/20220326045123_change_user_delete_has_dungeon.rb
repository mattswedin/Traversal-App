class ChangeUserDeleteHasDungeon < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :hasDungeon
  end
end
