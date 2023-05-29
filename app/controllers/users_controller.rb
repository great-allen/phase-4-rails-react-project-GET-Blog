class UsersController < ApplicationController
  # before_action :authorize
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
      render json: User.all
    end
    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end
 
      def create
        user = User.create(user_params)
        session[:user_id]=user.id
        if user.valid?
          render json: user, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def update
        user = User.find_by(id: session[:user_id])
        if user
        user.update!(user_params)
        render json: user, status: :accepted
      else
        render_unprocessable_entity_response
      end
    end
      
      
      

  private

  def authorize
    return render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
  end
  

  def user_params
    params.permit(:username, :password, :password_confirmation, :image_url, :bio,:avatar)
  end
  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found_response
    render json: { error: "User not found" }, status: :not_found
  end
end
