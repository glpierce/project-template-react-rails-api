class ProvidersController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def create
        new_provider = Provider.create!(provider_params)
        session[:provider_id] = new_provider.id
        render json: new_provider, status: 201
    end

    def destroy
        provider = Provider.find(params[:id])
        provider.destroy
    end

    def show
        render json: Provider.find(params[:id])
    end

    def index
        render json: Provider.all
    end

    private

    def provider_params
        params.permit(:name, :email, :account_type, :password, :location).with_defaults(account_type: 'provider')
    end
end
