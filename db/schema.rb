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

ActiveRecord::Schema.define(version: 20170606165855) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.string "name", null: false
    t.integer "song_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name", "song_id"], name: "index_activities_on_name_and_song_id"
  end

  create_table "dislikes", force: :cascade do |t|
    t.integer "song_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["song_id", "user_id"], name: "index_dislikes_on_song_id_and_user_id"
  end

  create_table "likes", force: :cascade do |t|
    t.integer "song_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["song_id", "user_id"], name: "index_likes_on_song_id_and_user_id"
  end

  create_table "locations", force: :cascade do |t|
    t.string "name", null: false
    t.integer "song_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name", "song_id"], name: "index_locations_on_name_and_song_id"
  end

  create_table "moods", force: :cascade do |t|
    t.string "name", null: false
    t.integer "song_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name", "song_id"], name: "index_moods_on_name_and_song_id"
  end

  create_table "songs", force: :cascade do |t|
    t.string "url", null: false
    t.string "artist", null: false
    t.string "name", null: false
    t.integer "duration", null: false
    t.integer "impressions_in_recommendations", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name", "artist", "url", "duration"], name: "index_songs_on_name_and_artist_and_url_and_duration"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "session_token", null: false
    t.string "login_frequency", null: false
    t.string "query_frequency", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

end
