class User < ApplicationRecord
    has_secure_password
    # Association for posts that a user has authored
  has_many :posts

  # Association for posts that a user has reviewed
  has_many :reviews
  has_many :reviewed_posts, through: :reviews, source: :post
    validates :username, uniqueness: true, presence: true
end
