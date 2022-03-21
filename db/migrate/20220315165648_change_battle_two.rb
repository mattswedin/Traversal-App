class ChangeBattleTwo < ActiveRecord::Migration[5.2]
  def change
    remove_column :battles, :enemies
  end
end
