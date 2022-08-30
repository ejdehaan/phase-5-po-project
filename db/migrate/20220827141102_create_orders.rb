class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.integer :po_num
      t.string :supplier_id
      t.string :supplier_name
      t.string :pickup_date
      t.string :pickup_name
      t.string :pickup_address
      t.string :pickup_city
      t.string :pickup_state
      t.string :pickup_zip
      t.string :pickup_country
      t.string :pickup_contact
      t.string :pickup_phone
      t.integer :cartons
      t.integer :weight
      t.integer :volume
      t.integer :pallets

      t.timestamps
    end
  end
end
