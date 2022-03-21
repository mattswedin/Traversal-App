@battles.each do |battle|
    json.set! battle.id do
        json.partial! 'battle', battle: battle
    end
end