json.array! @sorted_songs do |song|
  json.extract! song, :id, :likes, :dislikes, :url, :artist, :name, :duration
end
