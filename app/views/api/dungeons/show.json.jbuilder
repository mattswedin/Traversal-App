json.extract! @dungeon, :player_id, :room_amount, :current_room, :visited_rooms, :entire_dungeon, :name
json.partial! "/api/dungeons/dungeon", dungeon: @dungeon