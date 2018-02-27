require 'rails_helper'

RSpec.describe 'Categories API', type: :request do
  describe 'GET /categories' do
    let!(:categories) { create_list(:category, 10) }

    before { get '/categories' }

    it 'returns categories' do
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /categories/:id/movies' do
    let!(:category) { create(:category) }
    let!(:other_category) { create(:category) }
    let!(:category_movies) { create_list(:movie, 5, category_id: category.id) }
    let!(:other_category_movies) { create_list(:movie, 3, category_id: other_category.id)}
    before { get "/categories/#{category.id}/movies" }

    it 'returns movies associated to category' do
      expect(json).not_to be_empty
      expect(json.size).to eq(5)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end
end
