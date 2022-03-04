# == Schema Information
#
# Table name: battles
#
#  id        :bigint           not null, primary key
#  enemies   :text             default([]), not null, is an Array
#  game_text :string
#  player_id :integer
#
class Battle < ApplicationRecord

    serialize :enemies, Object
    # self.primary_key = :player_id

    belongs_to :user,
    foreign_key: :player_id,
    class_name: :User

end
