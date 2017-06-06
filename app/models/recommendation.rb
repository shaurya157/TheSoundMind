class Recommendation < ApplicationRecord
  validates :mood, :activity, :location, :user_id, presence: true
end
