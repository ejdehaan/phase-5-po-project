class OrdersController < ApplicationController

    def index
        order = Order.all
        render json:order
    end

    def show
        order = Order.find_by(id: params[:id])
        if order
            render json: order
        else
            render json: { error: "order not found" }, status: :not_found
        end
    end

    def update
        order = Order.find_by(id: params[:id])
        order.update(order_params)
        render json: order
    end


    private

    def order_params
        params.permit(:id, :po_num, :supplier_id, :supplier_name, :pickup_date, :pickup_name, :pickup_address, :pickup_city, :pickup_state, :pickup_zip, :pickup_country, :pickup_contact, :pickup_phone, :cartons, :weight, :volume, :pallets, :completed)
    end

end
