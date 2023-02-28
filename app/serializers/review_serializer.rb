class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :username ,:image_url

  def username
    self.object.user.username
  end

  def image_url
    self.object.user.image_url
  end
end
