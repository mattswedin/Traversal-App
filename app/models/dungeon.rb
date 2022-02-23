# == Schema Information
#
# Table name: dungeons
#
#  id            :bigint           not null, primary key
#  boss          :string
#  current_room  :text             not null
#  dungeon       :text             not null
#  enemies       :text             not null, is an Array
#  room_amount   :integer          default(3), not null
#  treasure      :text             not null, is an Array
#  visited_rooms :text             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  player_id     :integer          not null
#

class Dungeon < ApplicationRecord
   validates :player_id, presence: true
   validates :room_amount, presence: true
   validates :visited_rooms, presence: true
   validates :current_room, presence: true
   validates :dungeon, presence: true
   validates :enemies, presence: true
   validates :treasure, presence: true
   validates :boss, presence: true

   belongs_to :user,
   foreign_key: :player_id,
   class_name: :User

end
