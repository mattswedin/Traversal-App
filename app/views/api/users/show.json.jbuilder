json.extract! @user, :username, :level, :attack, :defense, :hasDungeon
json.partial! "api/users/user", user: @user