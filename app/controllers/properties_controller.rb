class PropertiesController < ApplicationController

    def show 
        selected_property = Property.find_by(id: params[:id])
        render json: selected_property, status: 200
    end

    def create
        new_property = Property.create!(property_params)
        render json: new_property, status: 201
    end

    private

    def property_params
        params.permit(:address, :city, :owner_occupied, :owner_id)
    end

end
