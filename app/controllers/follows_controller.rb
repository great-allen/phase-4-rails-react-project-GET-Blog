class FollowsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  # added rescue_from
  
  def index
    render json: Follow.all, status: :ok
end

def create
    follow=Follow.create!(follow_params)
    render json: follow, status: :created
end
def destroy
    follow=find_follow
    if post
        follow.destroy
        render json: follow,status: :ok
    else
        render_not_found_response
    end
end
    private

    def find_follow
        Follow.find(params[:id])
      end

    def follow_params
        params_permit(:follower_id,:following_id)
    end
    def render_not_found_response
        render json: { error: "Follow not found" }, status: :not_found
      end
    
      
end
