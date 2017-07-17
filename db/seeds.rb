# Strictly testing purposes
require 'csv'

# Users
User.create(email: 'shaurya157@gmail.com')
User.create(email: 'test@gmail.com')
User.create(email: '123@gmail.com')

# Songs
CSV.foreach('./db/thesoundmind_recommendations.csv', encoding: 'iso-8859-1') do |row|
  next if row[0] == 'Location'

  song = Song.where(url: row[6])
  id = song.first.id unless song.empty?
  
  if song.empty?
    song = Song.new
    song.name = row[3]
    song.url = row[6]
    song.artist = row[4]
    song.save
    id = song.id
  end

  Mood.create(name: row[2], song_id: id)
  Location.create(name: row[0], song_id: id)
  Activity.create(name: row[1], song_id: id)
end
