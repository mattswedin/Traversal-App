json.set! @user.id do
    json.extract! @user, :username, :level, :attack, :defense
end