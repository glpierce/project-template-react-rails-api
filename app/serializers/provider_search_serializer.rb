class ProviderSearchSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :email, :account_type
  has_many :provider_services
  has_many :service_categories
end
