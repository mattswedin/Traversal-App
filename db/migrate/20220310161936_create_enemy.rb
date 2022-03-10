class CreateEnemy < ActiveRecord::Migration[5.2]
  def change
    create_table :enemies do |t|
      t.string :name, null: false
      t.string :type, null: false
      t.string :tagline, null: false
      t.string :image, null: false
      t.integer :hit_points, null: false, default: 5
      t.integer :attack, null: false, default: 1
      t.integer :defense, null: false, default: 1
      t.integer :level, null: false, default: 1
      t.integer :dungeon_id, null: false
    end
  end
end
