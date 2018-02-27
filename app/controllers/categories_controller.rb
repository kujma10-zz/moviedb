class CategoriesController < ApplicationController
  skip_before_action :authorize_request

  def index
    @categories = Category.all
    json_response(@categories)
  end

  def movies
    @category = Category.find(params[:id])
    render :json => @category.movies, :include => :category, :except => [:category_id]
  end
end
