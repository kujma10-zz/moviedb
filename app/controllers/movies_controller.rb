class MoviesController < ApplicationController
  skip_before_action :authorize_request, only: [:index, :show]

  def index
    @movies = Movie.all
    json_response(@movies)
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

  private

  def movie_params
    params.permit(:title, :description, :category, :created_by)
  end
end
