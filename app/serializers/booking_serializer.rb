class BookingSerializer < ActiveModel::Serializer
  attributes :date, :price, :provider_id, :property_id
  has_one :task
  has_one :provider
end
