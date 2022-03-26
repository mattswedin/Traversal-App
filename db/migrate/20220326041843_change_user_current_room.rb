class ChangeUserCurrentRoom < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :current_room_id, :integer
  end
end
