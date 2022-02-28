@dungeons.each do |dungeon|
    json.set! dungeon.player_id do
        json.partial! 'dungeon', dungeon: dungeon
    end
end