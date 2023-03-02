class ReviewsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    def create
        review=Review.create!(review_params)
        render json: review, status: :created
    end

    def destroy
      review=Review.find(params[:id])
      if review
        review.destroy
        render json: review, status: :ok
      else
        render_not_found_response
      end
    end

    private

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
      end

      def review_params
        params.permit(:user_id,:post_id,:content)
      end
      def render_not_found_response
        render json: { error: "Review not found" }, status: :not_found
      end
end
