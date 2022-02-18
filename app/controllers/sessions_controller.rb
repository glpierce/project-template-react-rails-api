class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create, :email]

    def create
       if (Owner.find_by(email: params[:email]))
            owner = Owner.find_by(email: params[:email])
            if owner&.authenticate(params[:password])
                session[:owner_id] = owner.id
                render json: owner,  status: :created
                # session[:owner_id] = owner.id
                # render json: owner
            else
                render json: {errors: "Invalid email or password"}, status: 401
            end
        elsif (Provider.find_by(email: params[:email]))
            provider = Provider.find_by(email: params[:email])
            if provider&.authenticate(params[:password])
                session[:provider_id] = provider.id
                render json: provider, status: :created
                # session[:owner_id] = owner.id
                # render json: owner
            else
                render json: {errors: "Invalid email or password"}, status: 401
            end
        else
            render json: {errors: "Invalid email or password"}, status: 401
        end
    #     elsif (Provider.find_by(email: params[:email]))
    #         provider = Provider.find_by(email: params[:email])
    #         if (params[:password] == provider.password_digest)
    #             session[:provider_id] = provider.id
    #             render json: provider
    #         else
    #             render json: {errors: "Invalid email or password"}, status: 401
    #         end
    #     else
    #         render json: {errors: "Invalid email or password"}, status: 401
    #     end
    end

    def show
        render json: @current_user, include: ['properties', 'properties.tasks', 'tasks.bookings'], status: 200
    end

    def email
        if (Owner.find_by(email: params[:email]) || Provider.find_by(email: params[:email]))
            render json: {error: "email already exists"}, status: 401
        else
            head :no_content
        end
    end

    def destroy
        session.delete (params[:owner] ? :owner_id : :provider_id)
        head :no_content
    end

end
