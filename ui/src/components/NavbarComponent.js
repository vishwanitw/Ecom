
/*eslint-disable no-unused-vars */
import React, { Component } from 'preact-compat'
import '../styles/navbar.css'



class NavbarComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div className="navBackground">
          <nav className="navFont">
            <ul>
              <li><a href="#">Register</a></li>
              <li><a href="#">Login </a></li>
            </ul>
          </nav>

        </div>

    );
  }
}

export default NavbarComponent;