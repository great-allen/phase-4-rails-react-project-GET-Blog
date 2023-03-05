class LikesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    # added rescue_from
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    def index
      render json: Like.all, status: :ok
    end
    def create
        like=Like.create!(like_params)
        render json: like, status: :created
    end

    def destroy
        like=find_like
        if like
            like.destroy
            render json: like, status: :ok
        else
            render_not_found_response
        end
    end
    

    private

    def find_like
        Like.find(params[:id])
      end
    
      def like_params
        params.permit(:user_id,:post_id)
      end
    
      def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
      end
    
      def render_not_found_response
        render json: { error: "Like not found" }, status: :not_found
      end
end
