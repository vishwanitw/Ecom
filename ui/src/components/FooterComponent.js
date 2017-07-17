/*eslint-disable no-unused-vars */
import React from 'preact-compat'
/*eslint-enable no-unused-vars */
import '../styles/footer.css'

const FooterComponent = (props) => ( //eslint-disable-line no-unused-vars
	<div className='container'>
        <div className='main-footer'>
            <div className="row">
                <div className="main-footer-col footer-logo-img col-sm-3">
                    <img src="https://www.akwholesale.com/image/catalog/logo-2.png" alt="logo" style="width:100%;"></img>
                </div>
                <div className='main-footer-col col-sm-3'>
                    <h5 className="footer-list-title">My Account</h5>
                    <ul class="footer-list-item">	
                      <li><a href=""><i class="fa fa-caret-right"></i> My Account</a></li>
                      <li><a href=""><i class="fa fa-caret-right"></i> Order History</a></li>
                      <li><a href=""><i class="fa fa-caret-right"></i> Wish List</a></li>
                      <li><a href=""><i class="fa fa-caret-right"></i> Newsletter</a></li>
                      <li><a href=""><i class="fa fa-caret-right"></i> Affiliates</a></li>
					</ul>
                </div>
                <div className='main-footer-col col-sm-3'>
                    <h5 class="footer-list-title">our services</h5>
                    <ul class="footer-list-item">	
						<li><a href=""><i class="fa fa-caret-right"></i> Contact Us</a></li>
						<li><a href=""><i class="fa fa-caret-right"></i> Returns</a></li>
						<li><a href=""><i class="fa fa-caret-right"></i> Site Map</a></li>
						<li><a href=""><i class="fa fa-caret-right"></i> Specials</a></li>
						<li><a href=""><i class="fa fa-caret-right"></i> Brands</a></li>
					</ul>
                </div>
                <div className='main-footer-col col-sm-3'>
                    <h5>Information</h5>
                    <ul class="footer-list-item">
                        <li><a href=""><i class="fa fa-caret-right"></i> About Us</a></li>
                        <li><a href=""><i class="fa fa-caret-right"></i> By Entering The Site, You</a></li>
                        <li><a href=""><i class="fa fa-caret-right"></i> Privacy Policy</a></li>
                        <li><a href=""><i class="fa fa-caret-right"></i> Terms &amp; Conditions</a></li>
                        <li><a href=""><i class="fa fa-caret-right"></i> Faq</a></li>
                        <li><a href=""><i class="fa fa-caret-right"></i> GCC And CRC Forms By Brand</a></li>
                    </ul>
                </div>
            </div>
            
        </div>
	</div>
)

export default FooterComponent;