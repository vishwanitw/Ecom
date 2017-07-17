/*eslint-disable no-unused-vars*/
import React, { Component } from 'react'
import { Link } from 'preact-router'

/*eslint-enable no-unused-vars*/

class AllCategoriesDetailsComponent extends Component {

  render() {
    return (

      <div>
        <Link href={`/${this.props.categorie.name}/${this.props.categorie.id}`}>
          {this.props.categorie.name}
        </Link>
      </div>
    )
  }
}

export default AllCategoriesDetailsComponent
