# == Schema Information
#
# Table name: dungeons
#
#  id            :bigint           not null, primary key
#  current_room  :text
#  entireDungeon :text
#  room_amount   :integer          default(3), not null
#  visited_rooms :text
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  player_id     :integer          not null
#

class Dungeon < ApplicationRecord

   serialize :entireDungeon, Object

   validates :player_id, presence: true
   validates :room_amount, presence: true

   belongs_to :user,
   foreign_key: :player_id,
   class_name: :User

end
