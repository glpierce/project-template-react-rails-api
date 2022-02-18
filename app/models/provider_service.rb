class ProviderService < ApplicationRecord
    belongs_to :provider
    belongs_to :service_category
end
