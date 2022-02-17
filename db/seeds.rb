# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "Seeding owners..."
o1 = Owner.create!(first_name: "Test User 1", last_name: "", email: "testuser1@gmail.com", password_digest: "password123", account_type: "owner")
o2 = Owner.create!(first_name: "Test User 2", last_name: "", email: "testuser2@gmail.com", password_digest: "password123", account_type: "owner")

puts "Seeding providers..."

Provider.create!(name: 'Bob\'s Bush Brushing', email: 'bobsbrushing@gmail.com', location: 'miami', account_type: 'provider', password_digest: 'password')
Provider.create!(name: 'Paul\'s Pipe Polishing', email: 'paulspolishing@gmail.com', location: 'houston', account_type: 'provider', password_digest: 'password')
Provider.create!(name: 'Jim\'s Junk Removal', email: 'jimsremoval@gmail.com', location: 'seattle', account_type: 'provider', password_digest: 'password')

puts "Seeding properties..."
p1 = Property.create!(  address: "141 Buena Vista Ave E, San Francisco, CA 94117 USA",
                        city: "San Francisco, CA",
                        owner_occupied: true,
                        owner_id: o1.id)

p2 = Property.create!(  address: "1600 Pennsylvania Ave NW, Washington, DC 20500 USA",
                        city: "Washington, DC",
                        owner_occupied: false,
                        owner_id: o1.id)

p3 = Property.create!(  address: "1433 Russell St, Nashville, TN 37206 USA",
                        city: "Nashville, TN",
                        owner_occupied: false,
                        owner_id: o1.id)

p4 = Property.create!(  address: "11 Wall St, New York, NY 10005 USA",
                        city: "New York, NY",
                        owner_occupied: false,
                        owner_id: o2.id)

puts "Seeding tasks..."

puts "Seeding Completed!"