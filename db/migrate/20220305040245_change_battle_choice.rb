class ChangeBattleChoice < ActiveRecord::Migration[5.2]
  def change
    add_column :battles, :choice, :boolean, default: false
  end
end
