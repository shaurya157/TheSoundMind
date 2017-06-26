# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Strictly testing purposes

# Users
User.create(email: 'shaurya157@gmail.com')
User.create(email: 'test@gmail.com')
User.create(email: '123@gmail.com')

# Songs
Song.create(url: 'qeweq', artist: 'link', name: 'WHAM!', duration: 123)
Song.create(url: '123', artist: 'zelda', name: 'adewdw', duration: 43)
Song.create(url: 'fdfs', artist: 'parl', name: '1e1e', duration: 675)
Song.create(url: 'qqqq', artist: 'woozaa', name: 'qweqweqw', duration: 321)
Song.create(url: 'aaaa', artist: 'coldplay', name: 'qQqM!', duration: 231)

# Moods
Mood.create(name: 'Happy', song_id: 1)
Mood.create(name: 'Sad', song_id: 2)
Mood.create(name: 'Sexy', song_id: 3)
Mood.create(name: 'Bored', song_id: 4)
Mood.create(name: 'Lolz', song_id: 1)
Mood.create(name: 'Confident', song_id: 2)

# Activity
Activity.create(name: 'Studying', song_id: 1)
Activity.create(name: 'Working', song_id: 2)
Activity.create(name: 'Partying', song_id: 3)
Activity.create(name: 'Cycling', song_id: 5)
Activity.create(name: 'Drinking', song_id: 2)
Activity.create(name: 'Gaming', song_id: 4)

# Location
Location.create(name: 'Cafe', song_id: 1)
Location.create(name: 'Office', song_id: 2)
Location.create(name: 'Home', song_id: 1)
Location.create(name: 'Park', song_id: 5)
Location.create(name: 'Library', song_id: 3)
Location.create(name: 'Club', song_id: 5)
