import React, { Component } from 'react'
import Modal from 'react-responsive-modal'
import EditMovieForm from '../containers/EditMovieFormContainer'
import { getUserId } from '../helpers/Auth'

class Movies extends Component {
  state = {
    open: false,
  };

  componentDidMount () {
    this.props.fetchMovies()
  }

  onOpenModal = (movie) => {
    this.setState({ open: true, movie});
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render () {
    let movies = this.props.movies.data;
    if (movies) {
      const listItems = movies.map((movie) =>
        this.listItem(movie)
      );
      return (
        <div>
          <div className="list-group">
            {listItems}
          </div>
          <Modal open={this.state.open} onClose={this.onCloseModal} little>
            <EditMovieForm closeModal={this.onCloseModal} movie={this.state.movie} />
          </Modal>
        </div>
      );
    } else if (this.props.movies.loading) {
      return (<span>Loading ...</span>);
    }
    return (<span>No data</span>);
  }

  listItem (movie) {
    const actionButtons = (
      <div className="actionButtons">
        <button onClick={() => this.onOpenModal(movie)} type="button" className="btn btn-primary btn-sm">
          Edit
        </button>
        <button onClick={() => this.props.deleteMovie({id: movie.id})} type="button" className="btn btn-danger btn-sm">
          Delete
        </button>
      </div>
    );

    return (
      <a key={movie.id} className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{movie.title}</h5>
          <small className="text-muted">{movie.category.name}</small>
        </div>
        <p className="mb-1">{movie.description}</p>
        {getUserId() === movie.created_by ? actionButtons : null}
      </a>
    )
  }
}

export default Movies
