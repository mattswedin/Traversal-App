json.extract! @dungeon, :player_id, :room_amount, :name, :next_room_id
json.partial! "/api/dungeons/dungeon", dungeon: @dungeon