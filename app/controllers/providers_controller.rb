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
        provider = Provider.find_by(id: session[:provider_id])
        render json: provider, status: 200
    end

    private

    def provider_params
        params.permit(:name, :email, :account_type, :password, :password_confirmation, :location).with_defaults(account_type: 'provider')
    end
end
