json.extract! @battle, :id, :game_text, :choice, :current_battle
json.partial! "/api/battles/battle", battle: @battle