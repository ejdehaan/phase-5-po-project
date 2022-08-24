class SuppliersController < ApplicationController

    def index
        supplier = Supplier.all
        render json: supplier
    end

end
