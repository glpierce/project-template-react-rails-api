class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
       if (Owner.find_by(email: params[:email]))
            owner = Owner.find_by(email: params[:email])
            session[:owner_id] = owner.id
            render json: owner
        elsif (Provider.find_by(email: params[:email]))
            provider = Provider.find_by(email: params[:email])
            session[:provider_id] = provider.id
            render json: provider
        else
            render json: {errors: "Invalid email or password"}, status: 401
        end
    end

    def show
        render json: @current_user
    end

    def destroy
        session.delete { :owner_id ? :owner_id : :provider_id }
        head :no_content
    end

end
