class User < ApplicationRecord
    has_secure_password
    # Association for posts that a user has authored
  has_many :posts
  has_many :likes
  has_many :following_relationships, class_name: "Follow", foreign_key: "follower_id"
  has_many :followings, through: :following_relationships, source: :following

  has_many :follower_relationships, class_name: "Follow", foreign_key: "following_id"
  has_many :followers, through: :follower_relationships, source: :follower
  
  # Association for posts that a user has reviewed
  has_many :reviews
  has_many :reviewed_posts, through: :reviews, source: :post
    validates :username, uniqueness: true, presence: true
end

