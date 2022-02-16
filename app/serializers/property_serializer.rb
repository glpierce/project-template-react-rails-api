class PropertySerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :owner_occupied
  has_one :user
end
