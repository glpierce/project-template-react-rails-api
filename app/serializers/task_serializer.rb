class TaskSerializer < ActiveModel::Serializer
  attributes :task_name, :frequency, :last_completed, :status, :property_id, :bookings
  has_one :property
  has_many :bookings
end
