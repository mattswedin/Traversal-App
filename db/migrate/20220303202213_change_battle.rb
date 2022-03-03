class ChangeBattle < ActiveRecord::Migration[5.2]
  def change
    remove_column :battles, :gameText, :string
    add_column :battles, :game_text, :string
    add_column :battles, :player_id, :integer
  end
end
