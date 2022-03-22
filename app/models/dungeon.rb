# == Schema Information
#
# Table name: dungeons
#
#  id           :bigint           not null, primary key
#  name         :string
#  room_amount  :integer          default(3), not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  next_room_id :integer
#  player_id    :integer          not null
#

class Dungeon < ApplicationRecord

   serialize :entire_dungeon, Object
   serialize :current_room, Object

   validates :player_id, presence: true
   validates :next_room_id, presence: true
   validates :room_amount, presence: true

   belongs_to :user,
   foreign_key: :player_id,
   class_name: :User

   has_one :room,
   foreign_key: :next_room_id,
   class_name: :Room

end
