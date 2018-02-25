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

  fetchMovies ({onSuccess, onFailure}) {
    window.fetch('/movies')
      .then(response => this.handleResponse(onSuccess, onFailure, response))
  }
}
