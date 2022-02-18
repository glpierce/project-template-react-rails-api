class ProviderServicesController < ApplicationController

    def show
        render json: ProviderService.where(service_category_id: params[:id])
    end

end