class ChangeEnemy < ActiveRecord::Migration[5.2]
  def change
    remove_column :enemies, :type, :string
    add_column :enemies, :enemy_type, :string
  end
end
