class OwnerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :account_type
  has_many :properties
end
