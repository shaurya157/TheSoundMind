class AddNumSongsPlayedToRecommendations < ActiveRecord::Migration[5.1]
  def change
    add_column :recommendations, :num_songs_played, :integer, default: 0
  end
end
