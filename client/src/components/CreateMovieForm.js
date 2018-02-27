import React from 'react'
import { Field, reduxForm } from 'redux-form'

const CreateMovieForm = props => {
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
          <Field name="category_id" component="select">
            <option />
            {categoryOptions}
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
