class BookingSerializer < ActiveModel::Serializer
  attributes :id, :date, :price, :provider_id, :task
  has_one :task
  has_one :provider
  has_one :property
end
