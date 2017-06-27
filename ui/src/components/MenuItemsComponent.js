/*eslint-disable no-unused-vars*/
import React, { Component } from 'preact-compat'
import { MenuItem} from 'react-bootstrap';
/*eslint-enable no-unused-vars*/

class MenuItems extends Component {

  render() {
    return (
            <div className="paddingTop100">
                
                    <ul className="dropdown-menu open">
                      <MenuItem header>Header</MenuItem>
                      <MenuItem>link</MenuItem>
                      <MenuItem divider/>
                      <MenuItem header>Header</MenuItem>
                      <MenuItem>link</MenuItem>
                      <MenuItem disabled>disabled</MenuItem>
                      <MenuItem title="See? I have a title.">
                        link with title
                      </MenuItem>
                      <MenuItem eventKey={1} href="#someHref">
                        link that alerts
                      </MenuItem>
                    </ul>
            </div>

        );
  }

} 

export default MenuItems;