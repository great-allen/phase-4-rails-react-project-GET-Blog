class UserSerializer < ActiveModel::Serializer
  attributes :id, :password_digest, :username, :image_url, :bio
end
