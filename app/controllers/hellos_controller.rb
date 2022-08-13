class HellosController < ApplicationController
    def hi
      render json: {hello: "world"}
    end
  end