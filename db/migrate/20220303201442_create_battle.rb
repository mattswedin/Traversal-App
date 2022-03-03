class CreateBattle < ActiveRecord::Migration[5.2]
  def change
    create_table :battles do |t|
      t.string :gameText, null: false
      t.text :enemies, null: false, array: true, default: []
    end
  end
end
