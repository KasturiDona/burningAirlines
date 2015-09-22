# == Schema Information
#
# Table name: reservations
#
#  id         :integer          not null, primary key
#  row        :integer
#  column     :integer
#  flight_id  :integer
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Reservation < ActiveRecord::Base
	belongs_to :flight
	belongs_to :user

	def display_row
        case row
        when 1
        	"A"
        when 2
        	"B"
        when 3
        	"C"
        when 4
        	"D"
        when 5
        	"E"
        end
    end
end


