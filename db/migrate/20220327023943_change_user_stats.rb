class ChangeUserStats < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :attack
    remove_column :users, :defense
    add_column :users, :attack, :integer, default: 1
    add_column :users, :defense, :integer, default: 1
    add_column :users, :hit_points, :integer, default: 10
  end
end
