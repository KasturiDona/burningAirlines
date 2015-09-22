json.array!(@flights) do |flight|
  json.extract! flight, :id, :flight_number, :to, :from, :flight_date
  json.url flight_url(flight, format: :json)
end
