class MoviesController < ApplicationController
  before_action :set_movie, only: [:show, :update, :destroy]

  def index
    @movies = Movie.all
    json_response(@movies)
  end

  def create
    @movie = Movie.create!(movie_params)
    json_response(@movie, :created)
  end

  def show
    json_response(@movie)
  end

  def update
    @movie.update(movie_params)
    head :no_content
  end

  def destroy
    @movie.destroy
    head :no_content
  end

  private

  def movie_params
    params.permit(:title, :description, :category)
  end

  def set_movie
    @movie = Movie.find(params[:id])
  end
end
