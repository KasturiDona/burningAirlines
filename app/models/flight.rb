# == Schema Information
#
# Table name: flights
#
#  id            :integer          not null, primary key
#  flight_number :text
#  to            :text
#  from          :text
#  flight_date   :date
#  airplane_id   :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Flight < ActiveRecord::Base
	has_many :reservations
	belongs_to :airplane
	validates_uniqueness_of :to, :case_sensitive => false
	validates_uniqueness_of :from, :case_sensitive => false
end
