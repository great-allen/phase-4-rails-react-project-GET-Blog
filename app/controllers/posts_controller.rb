class PostsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response


    def index
        render json: Post.all, status: :ok
    end

    def show
        post=find_post
        if post
            render json: post.reviews,  status: :ok
        else
            render_not_found_response
        end
    end

    def create
        post=Post.create!(post_params)
        render json: post, status: :created
    end

    def update
        post=find_post
        if post
            post.update(post_params)
            render json: post, status: :accepted
        else
            render_unprocessable_entity_response
        end
    end

    def destroy
        post=find_post
        if post
            post.destroy
            render json: {},status: :ok
        else
            render_not_found_response
        end
    end

    private

  def find_post
    Post.find(params[:id])
  end

  def post_params
    params.permit(:title,:content,:user_id,:image_url)
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found_response
    render json: { error: "Post not found" }, status: :not_found
  end
end
