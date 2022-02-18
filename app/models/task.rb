class Task < ApplicationRecord
    belongs_to :property
    belongs_to :service_category
    has_many :bookings, dependent: :destroy
    has_many :providers, through: :bookings
end
