class PropertiesController < ApplicationController

    def show 
        selected_property = Property.find(params[:id])
        render json: selected_property, status: 200
    end

    # def bookings
    #     properties = @current_user.properties
    #     bookings = properties.tasks.bookings
    #     render json: bookings, include: ['provider'], status: 200
    # end

    def create
        new_property = Property.create!(property_params)
        render json: new_property, status: 201
    end

    def destroy
        selected_property = Property.find(params[:id])
        selected_property.destroy
        head :no_content
    end

    private

    def property_params
        params.permit(:address, :city, :owner_occupied, :owner_id)
    end

end
