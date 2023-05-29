class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id,  :username, :image_url, :bio,:url

  def url
    url_for(object.avatar) if object.avatar.attached?
  end
end

