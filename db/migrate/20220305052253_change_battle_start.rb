class ChangeBattleStart < ActiveRecord::Migration[5.2]
  def change
    add_column :battles, :current_battle, :boolean, default: false
  end
end
