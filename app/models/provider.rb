class Provider < ApplicationRecord
    has_secure_password
    
    has_many :provider_services, dependent: :destroy
    has_many :service_categories, through: :provider_services
    has_many :bookings, dependent: :destroy
    has_many :tasks, through: :bookings
end
