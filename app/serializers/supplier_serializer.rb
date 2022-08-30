class SupplierSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city, :state, :zip, :country, :phone

  has_many :orders
end
