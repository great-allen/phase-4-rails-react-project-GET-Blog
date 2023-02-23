class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :post_id, :user_id, :content
end
