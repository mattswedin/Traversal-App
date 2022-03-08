# == Schema Information
#
# Table name: battles
#
#  id             :bigint           not null
#  choice         :boolean          default(FALSE)
#  current_battle :boolean          default(FALSE)
#  enemies        :text             default([]), not null, is an Array
#  game_text      :string
#  player_id      :integer          primary key
#
class Battle < ApplicationRecord
    
    serialize :enemies, Object
    self.primary_key = :player_id

    belongs_to :user,
    foreign_key: :player_id,
    class_name: :User

end
