class PropertySerializer < ActiveModel::Serializer
  attributes :id, :address, :owner_occupied, :tasks
  has_one :owner
  has_many :tasks
end
