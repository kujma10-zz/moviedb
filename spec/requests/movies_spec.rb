require 'rails_helper'

RSpec.describe 'Movies API', type: :request do
  let(:user) { create(:user) }
  let(:category) { create(:category) }
  let!(:movies) { create_list(:movie, 10, created_by: user.id, category_id: category.id) }
  let(:movie_id) { movies.first.id }
  let(:headers) { valid_headers }

  describe 'GET /movies' do
    before { get '/movies' }

    it 'returns movies' do
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /movies/:id' do
    before { get "/movies/#{movie_id}" }

    context 'when the record exists' do
      it 'returns the movie' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(movie_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:movie_id) { 100 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Movie/)
      end
    end
  end

  describe 'POST /movies' do
    let(:valid_attributes) do
      {title: 'Matrix', description: 'great movie', category_id: category.id, created_by: user.id.to_s}.to_json
    end

    context 'when the request is valid' do
      before { post '/movies', params: valid_attributes, headers: headers }

      it 'creates a movie' do
        expect(json['title']).to eq('Matrix')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      before { post '/movies', params: { title: 'Star Wars' }.to_json, headers: headers }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do
        expect(response.body)
          .to match(/Validation failed/)
      end
    end
  end

  describe 'PUT /movies/:id' do
    let(:valid_attributes) { { title: 'Start Wars' }.to_json }

    context 'when the record exists' do
      before { put "/movies/#{movie_id}", params: valid_attributes, headers: headers }

      it 'updates the record' do
        expect(response.body).to be_empty
      end

      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end
  end

  describe 'DELETE /movies/:id' do
    before { delete "/movies/#{movie_id}", headers: headers }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end

  describe 'GET /movies/search' do
    let!(:movie) { create(:movie, category_id: category.id, title: "Pulp Fiction") }

    before { get '/movies/search?q=ficti' }

    it 'returns movies matching the search param' do
      expect(json).not_to be_empty
      expect(json.size).to eq(1)
      expect(json[0]["title"]).to eq("Pulp Fiction")
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end
end
