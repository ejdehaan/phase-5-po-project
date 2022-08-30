class OrderSerializer < ActiveModel::Serializer
  attributes :id, :po_num, :supplier_id, :supplier_name, :pickup_date, :pickup_name, :pickup_address, :pickup_city, :pickup_state, :pickup_zip, :pickup_country, :pickup_contact, :pickup_phone, :cartons, :weight, :volume, :pallets, :completed
end
