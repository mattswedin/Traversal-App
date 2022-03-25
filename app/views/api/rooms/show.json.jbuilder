json.extract! @room, :enemy_id, :name, :next_room_id
json.partial! "/api/rooms/room", room: @room