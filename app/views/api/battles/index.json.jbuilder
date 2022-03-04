@dungeons.each do |battle|
    json.set! battle.player_id do
        json.partial! 'battle', battle: battle
    end
end