class ProviderServiceSerializer < ActiveModel::Serializer
  attributes :id, :price, :provider_id, :service_category_id
  belongs_to :provider
  belongs_to :service_category
end
