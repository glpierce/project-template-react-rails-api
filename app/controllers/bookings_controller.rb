class BookingsController < ApplicationController

    def create
        new_booking = Booking.create!(booking_params)
        render json: new_booking, status: :created
    end

    def show 
        selected_booking = Booking.find(params[:id])
        render json: selected_booking, status: 200
    end

    def index 
        bookings = Booking.all
        render json: bookings, status: 200
    end
    def destroy
        selected_property = Booking.find(params[:id])
        selected_property.destroy
        head :no_content
    end

    private

    def booking_params
        params.permit(:provider_id, :task_id, :date, :price)
    end

end
