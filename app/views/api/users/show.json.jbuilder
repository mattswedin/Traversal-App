json.set! @user.id do
    json.extract! @user, :username, :level, :attack, :defense
end

json.partial! "api/users/user", user: @user