import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {}
    this.getMovies = this.getMovies.bind(this)
  }

  componentDidMount () {
    this.getMovies()
  }

  fetch (endpoint) {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }

  getMovies () {
    this.fetch('/movies')
      .then(movies => {
        this.setState({movies: movies})
      })
  }

  render () {
    let movies = this.state.movies;
    if (movies) {
      const listItems = movies.map((movie) =>
        this.listItem(movie)
      );
      return (
        <div>
          <nav class="navbar navbar-light bg-light justify-content-between">
            <a href="#" class="navbar-brand">MovieDB</a>
          </nav>
          <div class="list-group">
            {listItems}
          </div>
        </div>
      );
    }
    return null;
  }

  listItem (movie) {
    return (
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{movie.title}</h5>
          <small class="text-muted">{movie.category}</small>
        </div>
        <p class="mb-1">{movie.description}</p>
      </a>
    )
  }
}

export default App
