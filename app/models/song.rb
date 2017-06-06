class Song < ApplicationRecord
  validates :url, presence: true, uniqueness: true
  validates :artist, :name, :duration, presence: true

  after_initialize :first_impression

  # inverse of seems dicy here, might need to relook if anything breaks
  has_many :likes, inverse_of: :song
  has_many :dislikes, inverse_of: :song

  def first_impression
    self.impressions_in_recommendations = 0
  end

  def set_duration(duration)
    # TODO: Handles songs lesser than one hour, need to fix later on

    if duration.is_a?(Integer)
      self.duration = duration
    else
      arr = duration.split(':')
      arr[0] = arr[0].to_i * 60
      arr[1] = arr[1].to_i

      self.duration = arr.inject(:+)
    end
  end
end
