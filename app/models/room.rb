# == Schema Information
#
# Table name: rooms
#
#  id           :bigint           not null, primary key
#  enemies      :text             default([]), is an Array
#  name         :string           not null
#  next_room_id :integer
#
class Room < ApplicationRecord

    validates :name, presence: true

    # has_one :room,
    # foreign_key: :next_room_id,
    # class_name: :Room

    # belongs_to :room,
    # foreign_key: :next_room_id,
    # class_name: :Room

    # belongs_to :dungeon,
    # foreign_key: :next_room_id,
    # class_name: :Dungeon


end
