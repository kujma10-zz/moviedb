import React from 'react'
import { Field, reduxForm } from 'redux-form'

const SearchMovies = props => {
  const { handleSubmit, pristine, submitting } = props

  return (
    <form className="form-inline searchMoviesForm" onSubmit={handleSubmit}>
      <Field
        name="searchQuery"
        component="input"
        type="text"
        placeholder="Search"
        className="form-control mr-sm-2"
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" disabled={pristine || submitting}>
        Search
      </button>
    </form>
  )
}

export default reduxForm({
  form: 'searchMovie'
})(SearchMovies)
