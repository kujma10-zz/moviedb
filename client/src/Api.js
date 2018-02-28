import { getAuthToken } from './helpers/Auth'

export default class Api {
  handleResponse (success, failure, response) {
    if (response.status === 204) {
      return success(null);
    }

    return response.json().then(body => {
      if (response.ok) {
        success(body);
      } else {
        failure(body);
      }
    });
  };

  authenticate (params, {onSuccess, onFailure}) {
    window.fetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => this.handleResponse(onSuccess, onFailure, response))
  }

  fetchMovies ({onSuccess, onFailure}) {
    window.fetch('/movies')
      .then(response => this.handleResponse(onSuccess, onFailure, response))
  }

  createMovie (params, {onSuccess, onFailure}) {
    window.fetch('/movies', {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
        "Authorization": getAuthToken()
      }
    })
      .then(response => this.handleResponse(onSuccess, onFailure, response))
  }

  updateMovie (params, {onSuccess, onFailure}) {
    window.fetch(`/movies/${params.id}`, {
      method: 'PUT',
      body: JSON.stringify(params.values),
      headers: {
        "Content-Type": "application/json",
        "Authorization": getAuthToken()
      }
    })
      .then(response => this.handleResponse(onSuccess, onFailure, response))
  }

  deleteMovie (params, {onSuccess, onFailure}) {
    window.fetch(`/movies/${params.id}`, {
      method: 'DELETE',
      headers: {
        "Authorization": getAuthToken()
      }
    })
      .then(response => this.handleResponse(onSuccess, onFailure, response))
  }

  fetchCategories ({onSuccess, onFailure}) {
    window.fetch('/categories')
      .then(response => this.handleResponse(onSuccess, onFailure, response))
  }

  fetchCategoryMovies (params, {onSuccess, onFailure}) {
    window.fetch(`/categories/${params.id}/movies`)
      .then(response => this.handleResponse(onSuccess, onFailure, response))
  }

  searchMovies (params, {onSuccess, onFailure}) {
    window.fetch(`/movies/search?q=${params.searchQuery}`)
      .then(response => this.handleResponse(onSuccess, onFailure, response))
  }
}
