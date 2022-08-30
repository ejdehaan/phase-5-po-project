class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :email_address, :password_digest, :supplier_id, :address, :city, :state, :zip, :country, :phone, :open_orders, :completed_orders

  # belongs_to :supplier

  def open_orders
    object.supplier.orders.select{ |order| !order.completed }
  end

  def completed_orders
    object.supplier.orders.select{ |order| order.completed }
  end

end
