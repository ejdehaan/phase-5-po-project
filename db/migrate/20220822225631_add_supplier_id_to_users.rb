class AddSupplierIdToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :supplier_id, :integer
  end
end
