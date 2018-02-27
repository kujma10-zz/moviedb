import React, { Component } from 'react'

class Categories extends Component {
  componentDidMount () {
    this.props.fetchCategories()
  }

  render () {
    let categories = this.props.categories;
    if (categories) {
      const listItems = categories.map((category) =>
        this.listItem(category)
      );
      return (
        <ul className="list-group">
          {listItems}
        </ul>
      );
    }
    return (<span></span>);
  }

  listItem (category) {
    return (
      <li key={category.id} className="list-group-item">{category.name}</li>
    )
  }
}

export default Categories
