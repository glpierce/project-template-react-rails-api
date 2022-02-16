class BookingSerializer < ActiveModel::Serializer
  attributes :date, :price, :provider_id
  belongs_to :property
  belongs_to :provider
end
