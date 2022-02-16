class ProviderSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :email, :account_type
end
