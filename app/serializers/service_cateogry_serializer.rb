class ServiceCategorySerializer < ActiveModel::Serializer
  attributes :id
  has_many :provider_services
end
