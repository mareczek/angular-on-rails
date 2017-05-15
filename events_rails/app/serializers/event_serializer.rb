class EventSerializer < ActiveModel::Serializer
  attributes :title, :location, :eventDate
end
