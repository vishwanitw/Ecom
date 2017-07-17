
/*eslint-disable no-unused-vars */
import React, { Component } from 'preact-compat'
import FooterComponent from '../components/FooterComponent'
/*eslint-enable no-unused-vars */

class FooterContainer extends Component {
  
  render() {
    
    return (
			<footer className="footer-1">
                <FooterComponent />
			</footer>
		);
  }
}

export default FooterContainer;