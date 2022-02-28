class ChangeUserAddDungeonBool < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :hasDungeon, :boolean, default: false
  end
end
