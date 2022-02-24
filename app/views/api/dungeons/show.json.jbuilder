json.extract! @dungeon, :player_id, :room_amount, :current_room, :visited_rooms, :dungeon
json.partial! "/api/dungeons/dungeon", dungeon: @dungeon