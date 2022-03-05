json.extract! @battle, :player_id, :id, :enemies, :game_text
json.partial! "/api/battles/battle", battle: @battle