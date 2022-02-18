# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "Seeding owners..."
o1 = Owner.create!(first_name: "Test User 1", last_name: "", email: "testuser1@gmail.com", password: "password123", account_type: "owner")
o2 = Owner.create!(first_name: "Test User 2", last_name: "", email: "testuser2@gmail.com", password: "password123", account_type: "owner")

puts "Seeding providers..."
r1 = Provider.create!(name: 'Bob\'s Bush Brushing', email: 'bobsbrushing@gmail.com', location: 'miami', account_type: 'provider', password: 'password')
r2 = Provider.create!(name: 'Paul\'s Pipe Polishing', email: 'paulspolishing@gmail.com', location: 'houston', account_type: 'provider', password: 'password')
r3 = Provider.create!(name: 'Jim\'s Junk Removal', email: 'jimsremoval@gmail.com', location: 'seattle', account_type: 'provider', password: 'password')
r4 = Provider.create!(name: 'Flora\'s Flora', email: 'florasflora@gmail.com', location: 'boston', account_type: 'provider', password: 'password')

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

puts 'seeding service categories...'
s1 = ServiceCategory.create!(   category: 'trees',
                                description: 'get all of your trees trimmed')
s2 = ServiceCategory.create!(   category: 'gutters',
                                description: 'get all of your gutters cleaned')
s3 = ServiceCategory.create!(   category: 'landscape',
                                description: 'get all of your landscaping needs taken care of')
s4 = ServiceCategory.create!(   category: 'pool',
                                description: 'get your pool cleaned and hardware maintained')
s5 = ServiceCategory.create!(   category: 'chimney',
                                description: 'get your chimney inspected and cleaned')

puts 'seeding provider services...'
ps1 = ProviderService.create!(  price: 300, 
                                provider_id: r1.id, 
                                service_category_id: s3.id)

ps2 = ProviderService.create!(  price: 250,
                                provider_id: r1.id,
                                service_category_id: s1.id)

ps3 = ProviderService.create!(  price: 128.65,
                                provider_id: r2.id,
                                service_category_id: s2.id)

ps4 = ProviderService.create!(  price: 99.99,
                                provider_id: r3.id,
                                service_category_id: s5.id)

ps5 = ProviderService.create!(  price: 279.99,
                                provider_id: r4.id,
                                service_category_id: s3.id)

ps5 = ProviderService.create!(  price: 249.99,
                                provider_id: r4.id,
                                service_category_id: s1.id)

puts "Seeding tasks..."
t1 = Task.create!(  task_name: "Landscape",
                    frequency: 60,
                    last_completed: DateTime.new(2022, 1, 26, 1, 5),
                    status: "upcoming",
                    property_id: p1.id,
                    service_category_id: s3.id)

t2 = Task.create!(  task_name: "Clean Gutters",
                    frequency: 90,
                    last_completed: DateTime.new(2021, 2, 26, 1, 5),
                    status: "past due",
                    property_id: p2.id,
                    service_category_id: s2.id)

t3 = Task.create!(  task_name: "Trim Trees",
                    frequency: 365,
                    last_completed: DateTime.new(2020, 6, 19, 1, 5),
                    status: "past due",
                    property_id: p1.id,
                    service_category_id: s1.id)

puts "Seeding bookings..."
b1 = Booking.create!(  date: DateTime.new(2022, 2, 26, 1, 5),
                       price: ps1.price,
                       provider_id: r1.id,
                       task_id: t1.id)
b2 = Booking.create!(  date: DateTime.new(2022, 3, 26, 1, 5),
                       price: ps3.price,
                       provider_id: r2.id,
                       task_id: t2.id)


puts "Seeding Completed!"