/*eslint-disable no-unused-vars */
import React, { Component } from 'preact-compat'
import ProductListComponent from '../components/ProductListComponent'
import HeaderContainer from './HeaderContainer'
import FooterContainer from './FooterContainer'

/*eslint-enable no-unused-vars */
import { bindActionCreators } from 'redux';
import { connect } from 'preact-redux';
import * as actionCreators from '../actions/actions';



class ProductsContainer extends Component {
  
  componentWillMount() {
    this.props.getProducts();
    // this.props.getAllCategories();
  }

  
  render() {
    
    return (
			<div>
        <HeaderContainer />
           <ProductListComponent products={this.props.data.products.products} />
        <FooterContainer />
			</div>
		);
  }
}

function mapStateToProps(state) {
  return {
    data: state
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispachToProps)(ProductsContainer)
