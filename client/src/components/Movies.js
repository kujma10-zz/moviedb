import React, { Component } from 'react'

class Movies extends Component {
  componentDidMount () {
    this.props.fetchMovies()
  }

  render () {
    let movies = this.props.movies.data;
    if (movies) {
      const listItems = movies.map((movie) =>
        this.listItem(movie)
      );
      return (
        <div className="list-group">
          {listItems}
        </div>
      );
    } else if (this.props.movies.loading) {
      return (<span>Loading ...</span>);
    }
    return (<span>No data</span>);
  }

  listItem (movie) {
    return (
      <a key={movie.id} className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{movie.title}</h5>
          <small className="text-muted">{movie.category.name}</small>
        </div>
        <p className="mb-1">{movie.description}</p>
      </a>
    )
  }
}

export default Movies
