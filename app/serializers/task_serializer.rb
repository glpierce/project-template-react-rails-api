class TaskSerializer < ActiveModel::Serializer
  attributes :id, :task_name, :frequency, :last_completed, :status, :property_id, :service_category_id, :bookings
  has_one :property
  has_many :bookings
end
