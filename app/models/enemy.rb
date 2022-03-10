# == Schema Information
#
# Table name: enemies
#
#  id         :bigint           not null, primary key
#  attack     :integer          default(1), not null
#  defense    :integer          default(1), not null
#  hit_points :integer          default(5), not null
#  image      :string           not null
#  level      :integer          default(1), not null
#  name       :string           not null
#  tagline    :string           not null
#  type       :string           not null
#  dungeon_id :integer          not null
#
class Enemy < ApplicationRecord
    
    validates :dungeon_id, presence: true
    validates :type, presence: true

    belongs_to :dungeon,
    foreign_key: :dungeon_id,
    class_name: :Dungeon

end
