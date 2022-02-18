class ProviderServiceSerializer < ActiveModel::Serializer
  attributes :id
  has_one :provider
  has_one :service_category
end
