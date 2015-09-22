json.array!(@reservations) do |reservation|
  json.extract! reservation, :id, :rows, :columns, :flight_id
  json.url reservation_url(reservation, format: :json)
end
