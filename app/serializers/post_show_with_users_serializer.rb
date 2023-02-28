class PostShowWithUsersSerializer < ActiveModel::Serializer
  attributes :id, :title,:content,:image_url,:user_id

  has_many :reviews, serializer: ReviewWithUsernameSerializer
  
  
end
