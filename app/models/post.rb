class Post < ApplicationRecord
    validates :title, presence: true
    validates :content, presence: true
    validates :image_url, presence: true
    belongs_to :user
  has_many :reviews,dependent: :destroy
  has_many :reviewers, through: :reviews, source: :user
  has_many :likes,dependent: :destroy
end
