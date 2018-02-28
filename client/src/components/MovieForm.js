import React from 'react'
import { Field, reduxForm } from 'redux-form'

const EditMovieForm = props => {
  const { categories, handleSubmit, pristine, submitting } = props

  const categoryOption = category => {
    return (
      <option key={category.id} value={category.id}>{category.name}</option>
    )
  };

  const categoryOptions = categories.map((category) => {
    return categoryOption(category)
  });

  return (
    <form className="movieForm" onSubmit={handleSubmit}>
      <div>
        <label className="formLabel">Title</label>
        <div>
          <Field
            name="title"
            component="input"
            type="text"
            className="form-control mr-sm-2"
          />
        </div>
      </div>
      <div>
        <label className="formLabel">Category</label>
        <div>
          <Field name="category_id" component="select" className="form-control mr-sm-2">
            <option />
            {categoryOptions}
          </Field>
        </div>
      </div>
      <div>
        <label className="formLabel">Description</label>
        <div>
          <Field name="description" component="textarea" className="form-control mr-sm-2" />
        </div>
      </div>
      <div className="okButton">
        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit" disabled={pristine || submitting}>
          OK
        </button>
      </div>
    </form>
  )
}


export default reduxForm({
  form: 'movieForm'
})(EditMovieForm)
