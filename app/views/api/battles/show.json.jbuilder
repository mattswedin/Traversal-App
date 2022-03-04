json.extract! @battle, :id, :player_id, :enemies, :game_text
json.partial! "/api/battles/battle", battle: @battle