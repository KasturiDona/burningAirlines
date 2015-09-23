# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Airplane.destroy_all
ap1 = Airplane.create :name => "747", :rows => 4, :columns => 24
ap2 = Airplane.create :name => "A380", :rows => 4, :columns => 40


Flight.destroy_all
fl1 = Flight.create :flight_number => "233", :to => "JFK", :from => "SFO", :flight_date => "15/12/2015"
fl2 = Flight.create :flight_number => "879", :to => "SFO", :from => "JFK", :flight_date => "12/10/2015"
fl3 = Flight.create :flight_number => "412", :to => "LAX", :from => "JFK", :flight_date => "15/11/2015"
fl4 = Flight.create :flight_number => "409", :to => "JFK", :from => "LAX", :flight_date => "12/12/2015"

fl5 = Flight.create :flight_number => "233", :to => "JFK", :from => "SFO", :flight_date => "30/11/2015"
fl6 = Flight.create :flight_number => "879", :to => "SFO", :from => "JFK", :flight_date => "05/12/2015"
fl7 = Flight.create :flight_number => "412", :to => "LAX", :from => "JFK", :flight_date => "04/10/2015"
fl8 = Flight.create :flight_number => "409", :to => "JFK", :from => "LAX", :flight_date => "14/10/2015"

User.destroy_all
u1 = User.create :name => 'Phil', :email => "phil@gmail.com", :password => 'chicken', :password_confirmation => 'chicken'
u2 = User.create :name => 'kylie', :email => "kylie@gmail.com", :password => 'chicken', :password_confirmation => 'chicken'
u3 = User.create :name => 'Guy', :email => "guy@gmail.com", :password => 'chicken', :password_confirmation => 'chicken', :admin => true
u4 = User.create :name => 'Kas', :email => "kas@gmail.com", :password => 'chicken', :password_confirmation => 'chicken'

Reservation.destroy_all
r1 = Reservation.create :row => 1, :column => 1
r2 = Reservation.create :row => 1, :column => 2
r3 = Reservation.create :row => 2, :column => 1
r4 = Reservation.create :row => 3, :column => 5

ap1.flights << fl1 << fl2 << fl5 << fl6
ap2.flights << fl3 << fl4 << fl7 << fl8

fl1.reservations << r1 << r2 
fl2.reservations << r3
fl5.reservations << r4

u1.reservations << r1
u2.reservations << r2
u3.reservations << r3
u4.reservations << r4
