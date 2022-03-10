# == Schema Information
#
# Table name: dungeons
#
#  id             :bigint           not null, primary key
#  current_room   :text
#  entire_dungeon :text
#  name           :string
#  room_amount    :integer          default(3), not null
#  visited_rooms  :text
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  player_id      :integer          not null
#

class Dungeon < ApplicationRecord

   serialize :entire_dungeon, Object
   serialize :current_room, Object

   validates :player_id, presence: true
   validates :room_amount, presence: true

   belongs_to :user,
   foreign_key: :player_id,
   class_name: :User

   has_many :enemies,
   foreign_key: :dungeon_id,
   class_name: :Enemy

end
