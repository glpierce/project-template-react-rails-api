class ServiceSerializer < ActiveModel::Serializer
  attributes :id
  has_many :provider_services
end
