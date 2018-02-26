import React from 'react'
import { Field, reduxForm } from 'redux-form'

const CreateMovieForm = props => {
  const { handleSubmit, pristine, submitting } = props

  return (
    <form className="createMovieForm" onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <div>
          <Field
            name="title"
            component="input"
            type="text"
            placeholder="Title"
          />
        </div>
      </div>
      <div>
        <label>Category</label>
        <div>
          <Field name="category" component="select">
            <option />
            <option value="Drama">Drama</option>
            <option value="Action">Action</option>
            <option value="Crime">Crime</option>
          </Field>
        </div>
      </div>
      <div>
        <label>Description</label>
        <div>
          <Field name="description" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Add
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'createMovie'
})(CreateMovieForm)
