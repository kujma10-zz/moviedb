class CategoriesController < ApplicationController
  skip_before_action :authorize_request

  def index
    @categories = Category.all
    json_response(@categories)
  end
end
