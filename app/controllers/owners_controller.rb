class OwnersController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def create
        new_owner = Owner.create!(owner_params)
        session[:owner_id] = new_owner.id
        render json: new_owner, status: 201
    end

    def destroy
        owner = Owner.find(params[:id])
        owner.destroy
    end

    private

    def owner_params
        params.permit(:first_name, :last_name, :email, :account_type, :password, :password_confirmation).with_defaults(account_type: 'owner')
    end

end
