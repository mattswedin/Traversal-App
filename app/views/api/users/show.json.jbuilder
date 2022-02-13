json.extract! @user, :username, :level, :attack, :defense
json.partial! "api/users/user", user: @user