json.extract! @dungeon, :player_id, :room_amount, :current_room, :visited_rooms, :entireDungeon
json.partial! "/api/dungeons/dungeon", dungeon: @dungeon