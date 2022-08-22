class UsersController < ApplicationController
    def index
        user = User.all
        render json: user
    end

    def show
        user = User.find(session[:user_id])
        render json: user
    end
    
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
      end
    
      private
    
      def user_params
        params.permit(:username, :first_name, :last_name, :email_address, :password)
      end


end
