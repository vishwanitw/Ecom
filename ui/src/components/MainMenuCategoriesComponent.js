
/*eslint-disable no-unused-vars */
import React, { Component } from 'preact-compat'



class MainMenuCategoriesComponent extends Component {
  constructor() {
    super();
    this.state={
      isVisibleCategories: false
    }
    this.displayCategories = this.displayCategories.bind(this);
  }
  displayCategories() {

  }
  render() {
    return (
            <div className="paddingTop100">
                <nav className="categoryMenu">
                    <ul>
                        <li><a href="#">Men</a></li>
                        <li><a href="#" onMouseOver={this.displayCategories}>women </a></li>
                    </ul>
                </nav>

            </div>

        );
  }
}

export default MainMenuCategoriesComponent;