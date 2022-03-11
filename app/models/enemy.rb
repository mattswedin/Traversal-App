# == Schema Information
#
# Table name: enemies
#
#  id         :bigint           not null, primary key
#  attack     :integer          default(1), not null
#  defense    :integer          default(1), not null
#  enemy_type :string
#  hit_points :integer          default(5), not null
#  image      :string           not null
#  level      :integer          default(1), not null
#  name       :string           not null
#  tagline    :string           not null
#
class Enemy < ApplicationRecord

    validates :enemy_type, presence: true
    validates :image, presence: true
    validates :hit_points, presence: true

end
