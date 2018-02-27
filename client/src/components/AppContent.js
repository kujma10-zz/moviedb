import React from 'react'
import Movies from '../containers/MoviesContainer'
import Categories from '../containers/CategoriesContainer'

const AppContent = () => {
  return (
    <div className="grid-container">
      <div className="grid-15">
        <Categories />
      </div>
      <div className="grid-85">
        <Movies />
      </div>
    </div>
  )
}

export default AppContent
