puts "📃 Seeding data..."


supplier_first = Supplier.create!(name: 'Columbia', address: '14375 NW Science Park Dr', city: 'Portland', state: 'OR', zip: 97229, country: 'US', phone: '503-985-4000')

supplier_second = Supplier.create!(name: 'Reel Legends', address: '1806 38th Ave E', city: 'Bradenton', state: 'FL', zip: 34208, country: 'US', phone: '941-737-3524')


user_first = User.create!(username: 'edehaan', first_name: 'Emily', last_name: 'DeHaan', email_address: 'emily@gmail.com', password: 'abc123', supplier: supplier_first)

user_second = User.create!(username: 'broach', first_name: 'Bree', last_name: 'R', email_address: 'bree@gmail.com', password: 'abc123', supplier: supplier_first)

user_third = User.create!(username: 'kdehaan', first_name: 'Kaleena', last_name: 'DeHaan', email_address: 'kaleena@gmail.com', password: 'abc123', supplier: supplier_second)


puts "✅ Done seeding"

