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
    console.log(params)

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
}
