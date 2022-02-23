json.extract! @dungeon, :id, :player_id, :room_amount, :current_room, :visited_rooms, :dungeon, :enemies, :treasure, :boss
json.partial! '/api/dungeons/dungeon", dungeon: @dungeon