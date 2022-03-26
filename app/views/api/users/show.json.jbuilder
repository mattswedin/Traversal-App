json.extract! @user, :username, :level, :attack, :defense, :current_room_id
json.partial! "api/users/user", user: @user