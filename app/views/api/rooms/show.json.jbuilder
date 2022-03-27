json.extract! @room, :enemies, :name, :next_room_id
json.partial! "/api/rooms/room", room: @room