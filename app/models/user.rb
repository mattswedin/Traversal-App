# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  attack          :integer          default(1)
#  defense         :integer          default(1)
#  hit_points      :integer          default(10)
#  level           :integer          default(1), not null
#  password_digest :string           not null
#  session_token   :string           not null
#  username        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  current_room_id :integer
#
# Indexes
#
#  index_users_on_username  (username)
#
class User < ApplicationRecord

    validates :username, presence: true, uniqueness: true
    validates :session_token, presence: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}

    has_one :dungeon,
    foreign_key: :player_id,
    class_name: :Dungeon
    
    has_one :battle,
    foreign_key: :player_id,
    class_name: :Battle
    

    after_initialize :ensure_session_token 
    attr_reader :password

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end
end
