puts "📃 Seeding data..."


supplier_first = Supplier.create!(name: 'Columbia', address: '14375 NW Science Park Dr', city: 'Portland', state: 'OR', zip: 97229, country: 'US', phone: '503-985-4000')

supplier_second = Supplier.create!(name: 'Reel Legends', address: '1806 38th Ave E', city: 'Bradenton', state: 'FL', zip: 34208, country: 'US', phone: '941-737-3524')



user_first = User.create!(username: 'edehaan', first_name: 'Emily', last_name: 'DeHaan', email_address: 'emily@gmail.com', password: 'abc123', supplier: supplier_second, address: '6497 65th ST N', city: 'Pinellas Park', state: 'FL', zip: 33781, country: 'US', phone: '727-555-1234')

user_second = User.create!(username: 'broach', first_name: 'Bree', last_name: 'R', email_address: 'bree@gmail.com', password: 'abc123', supplier: supplier_first, address: '1234 Ocean Way', city: 'Ocean City', state: 'MD', zip: 21842, country: 'US', phone: '727-555-4321')

user_third = User.create!(username: 'kdehaan', first_name: 'Kaleena', last_name: 'DeHaan', email_address: 'kaleena@gmail.com', password: 'abc123', supplier: supplier_second, address: '6497 65th ST N', city: 'Pinellas Park', state: 'FL', zip: 33781, country: 'US', phone: '727-555-1234')



order_first = Order.create!(po_num: 100111, supplier: supplier_first, supplier_name: supplier_first.name, pickup_date:'', pickup_name:'', pickup_address:'', pickup_city:'', pickup_state:'', pickup_zip:'', pickup_country:'', pickup_contact:'', pickup_phone:'', cartons:nil , weight:nil , volume:nil ,pallets:nil)

order_second = Order.create!(po_num: 200222, supplier: supplier_first, supplier_name: supplier_first.name, pickup_date:'', pickup_name:'', pickup_address:'', pickup_city:'', pickup_state:'', pickup_zip:'', pickup_country:'', pickup_contact:'', pickup_phone:'', cartons:nil , weight:nil , volume:nil ,pallets:nil)

order_third = Order.create!(po_num: 300333, supplier: supplier_first, supplier_name: supplier_first.name, pickup_date:'', pickup_name:'', pickup_address:'', pickup_city:'', pickup_state:'', pickup_zip:'', pickup_country:'', pickup_contact:'', pickup_phone:'', cartons:nil , weight:nil , volume:nil ,pallets:nil)

order_fourth = Order.create!(po_num: 400444, supplier: supplier_first, supplier_name: supplier_first.name, pickup_date:'', pickup_name:'', pickup_address:'', pickup_city:'', pickup_state:'', pickup_zip:'', pickup_country:'', pickup_contact:'', pickup_phone:'', cartons:nil , weight:nil , volume:nil ,pallets:nil)

order_fifth = Order.create!(po_num: 500555, supplier: supplier_first, supplier_name: supplier_first.name, pickup_date:'', pickup_name:'', pickup_address:'', pickup_city:'', pickup_state:'', pickup_zip:'', pickup_country:'', pickup_contact:'', pickup_phone:'', cartons:nil , weight:nil , volume:nil ,pallets:nil)

order_sixth = Order.create!(po_num: 600666, supplier: supplier_second, supplier_name: supplier_second.name, pickup_date:'', pickup_name:'', pickup_address:'', pickup_city:'', pickup_state:'', pickup_zip:'', pickup_country:'', pickup_contact:'', pickup_phone:'', cartons:nil , weight:nil , volume:nil ,pallets:nil)

order_seventh = Order.create!(po_num: 700777, supplier: supplier_second, supplier_name: supplier_second.name, pickup_date:'', pickup_name:'', pickup_address:'', pickup_city:'', pickup_state:'', pickup_zip:'', pickup_country:'', pickup_contact:'', pickup_phone:'', cartons:nil , weight:nil , volume:nil ,pallets:nil)

order_eighth = Order.create!(po_num: 800888, supplier: supplier_second, supplier_name: supplier_second.name, pickup_date:'', pickup_name:'', pickup_address:'', pickup_city:'', pickup_state:'', pickup_zip:'', pickup_country:'', pickup_contact:'', pickup_phone:'', cartons:nil , weight:nil , volume:nil ,pallets:nil)

order_ninth = Order.create!(po_num: 900999, supplier: supplier_second, supplier_name: supplier_second.name, pickup_date:'', pickup_name:'', pickup_address:'', pickup_city:'', pickup_state:'', pickup_zip:'', pickup_country:'', pickup_contact:'', pickup_phone:'', cartons:nil , weight:nil , volume:nil ,pallets:nil)

order_tenth = Order.create!(po_num: 110000, supplier: supplier_first, supplier_name: supplier_first.name, pickup_date:'', pickup_name:'', pickup_address:'', pickup_city:'', pickup_state:'', pickup_zip:'', pickup_country:'', pickup_contact:'', pickup_phone:'', cartons:nil , weight:nil , volume:nil ,pallets:nil)

order_eleventh = Order.create!(po_num: 120000, supplier: supplier_first, supplier_name: supplier_first.name, pickup_date:'', pickup_name:'', pickup_address:'', pickup_city:'', pickup_state:'', pickup_zip:'', pickup_country:'', pickup_contact:'', pickup_phone:'', cartons:nil , weight:nil , volume:nil ,pallets:nil)

order_twelfth = Order.create!(po_num: 130000, supplier: supplier_second, supplier_name: supplier_second.name, pickup_date:'', pickup_name:'', pickup_address:'', pickup_city:'', pickup_state:'', pickup_zip:'', pickup_country:'', pickup_contact:'', pickup_phone:'', cartons:nil , weight:nil , volume:nil ,pallets:nil)

order_thirteenth = Order.create!(po_num: 140000, supplier: supplier_second, supplier_name: supplier_second.name, pickup_date:'', pickup_name:'', pickup_address:'', pickup_city:'', pickup_state:'', pickup_zip:'', pickup_country:'', pickup_contact:'', pickup_phone:'', cartons:nil , weight:nil , volume:nil ,pallets:nil)

order_fourteenth = Order.create!(po_num: 150000, supplier: supplier_second, supplier_name: supplier_second.name, pickup_date:'', pickup_name:'', pickup_address:'', pickup_city:'', pickup_state:'', pickup_zip:'', pickup_country:'', pickup_contact:'', pickup_phone:'', cartons:nil , weight:nil , volume:nil ,pallets:nil)

order_fifteenth = Order.create!(po_num: 160000, supplier: supplier_second, supplier_name: supplier_second.name, pickup_date:'', pickup_name:'', pickup_address:'', pickup_city:'', pickup_state:'', pickup_zip:'', pickup_country:'', pickup_contact:'', pickup_phone:'', cartons:nil , weight:nil , volume:nil ,pallets:nil)

order_seventeenth = Order.create!(po_num: 170000, supplier: supplier_first, supplier_name: supplier_first.name, pickup_date:'', pickup_name:'', pickup_address:'', pickup_city:'', pickup_state:'', pickup_zip:'', pickup_country:'', pickup_contact:'', pickup_phone:'', cartons:nil , weight:nil , volume:nil ,pallets:nil)

order_eighteenth = Order.create!(po_num: 180000, supplier: supplier_first, supplier_name: supplier_first.name, pickup_date:'', pickup_name:'', pickup_address:'', pickup_city:'', pickup_state:'', pickup_zip:'', pickup_country:'', pickup_contact:'', pickup_phone:'', cartons:nil , weight:nil , volume:nil ,pallets:nil)

order_nineteenth = Order.create!(po_num: 190000, supplier: supplier_second, supplier_name: supplier_second.name, pickup_date:'', pickup_name:'', pickup_address:'', pickup_city:'', pickup_state:'', pickup_zip:'', pickup_country:'', pickup_contact:'', pickup_phone:'', cartons:nil , weight:nil , volume:nil ,pallets:nil)

order_twentieth = Order.create!(po_num: 200000, supplier: supplier_second, supplier_name: supplier_second.name, pickup_date:'', pickup_name:'', pickup_address:'', pickup_city:'', pickup_state:'', pickup_zip:'', pickup_country:'', pickup_contact:'', pickup_phone:'', cartons:nil , weight:nil , volume:nil ,pallets:nil)

order_twenty_first = Order.create!(po_num: 210000, supplier: supplier_second, supplier_name: supplier_second.name, pickup_date:'', pickup_name:'', pickup_address:'', pickup_city:'', pickup_state:'', pickup_zip:'', pickup_country:'', pickup_contact:'', pickup_phone:'', cartons:nil , weight:nil , volume:nil ,pallets:nil)

order_twenty_second= Order.create!(po_num: 220000, supplier: supplier_second, supplier_name: supplier_second.name, pickup_date:'', pickup_name:'', pickup_address:'', pickup_city:'', pickup_state:'', pickup_zip:'', pickup_country:'', pickup_contact:'', pickup_phone:'', cartons:nil , weight:nil , volume:nil ,pallets:nil)



puts "✅ Done seeding"

