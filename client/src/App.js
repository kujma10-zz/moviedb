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
        <li key={movie.id}>{movie.title}</li>
      );
      return (<ul>{listItems}</ul>);
    }
    return null;
  }
}

export default App
