# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_03_10_190911) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "battles", force: :cascade do |t|
    t.text "enemies", default: [], null: false, array: true
    t.string "game_text"
    t.integer "player_id"
    t.boolean "choice", default: false
    t.boolean "current_battle", default: false
  end

  create_table "dungeons", force: :cascade do |t|
    t.integer "player_id", null: false
    t.integer "room_amount", default: 3, null: false
    t.text "current_room"
    t.text "visited_rooms"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "entire_dungeon"
    t.string "name"
  end

  create_table "enemies", force: :cascade do |t|
    t.string "name", null: false
    t.string "tagline", null: false
    t.string "image", null: false
    t.integer "hit_points", default: 5, null: false
    t.integer "attack", default: 1, null: false
    t.integer "defense", default: 1, null: false
    t.integer "level", default: 1, null: false
    t.string "enemy_type"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.integer "level", default: 1, null: false
    t.integer "attack", default: 10, null: false
    t.integer "defense", default: 10, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "hasDungeon", default: false
    t.index ["username"], name: "index_users_on_username"
  end

end
