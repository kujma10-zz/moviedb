import React, { Component } from 'react'

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    }
  }

  componentDidMount () {
    this.props.fetchCategories()
  }

  render () {
    const listItems = this.props.categories.map((category) =>
      this.listItem(category)
    );
    return (
      <div>
        <ul className="list-group">
          {listItems}
        </ul>
      </div>
    );
  }

  listItem (category) {
    let className = category.id === this.state.active ? 'list-group-item active' : 'list-group-item'
    return (
      <li key={category.id} className={className}>
        <a style={{cursor:'pointer'}} onClick={() => {
          this.setState({active: category.id});
          this.props.fetchCategoryMovies({id: category.id});
        }}>{category.name}</a>
      </li>
    )
  }
}

export default Categories
