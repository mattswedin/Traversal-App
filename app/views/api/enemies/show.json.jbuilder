json.extract! @enemy, :id, :name, :enemy_type, :hit_points, :attack, :defense, :level, :image, :tagline
json.partial! "/api/enemies/enemy", enemy: @enemy