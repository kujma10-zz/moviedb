class MoviesController < ApplicationController
  skip_before_action :authorize_request, only: [:index, :show, :search]

  def index
    @movies = Movie.all
    render :json => @movies, :include => :category, :except => [:category_id]
  end

  def create
    @movie = current_user.movies.create!(movie_params)
    json_response(@movie, :created)
  end

  def show
    @movie = Movie.find(params[:id])
    json_response(@movie)
  end

  def update
    @movie = current_user.movies.find(params[:id])
    @movie.update(movie_params)
    head :no_content
  end

  def destroy
    @movie = current_user.movies.find(params[:id])
    @movie.destroy
    head :no_content
  end

  def search
    @movies = Movie.search_for(params[:q])
    render :json => @movies, :include => :category, :except => [:category_id]
  end

  private

  def movie_params
    params.permit(:title, :description, :category_id, :created_by)
  end
end
