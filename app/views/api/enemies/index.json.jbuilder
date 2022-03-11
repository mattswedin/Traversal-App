@enemies.each do |enemy|
    json.set! enemy.id do
        json.partial! 'enemy', enemy: enemy
    end
end