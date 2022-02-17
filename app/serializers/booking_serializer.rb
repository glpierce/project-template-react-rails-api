class BookingSerializer < ActiveModel::Serializer
  attributes :date, :price, :provider_id
  has_one :property
  has_one :provider
end
