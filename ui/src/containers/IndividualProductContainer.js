/*eslint-disable no-unused-vars */
import React, { Component } from 'preact-compat'
import IndividualProductDetailComponent from '../components/IndividualProductDetailComponent'
import HeaderContainer from './HeaderContainer'
import FooterContainer from './FooterContainer'

/*eslint-enable no-unused-vars */
import { bindActionCreators } from 'redux';
import { connect } from 'preact-redux';
import * as actionCreators from '../actions/actions';


class IndividualProductContainer extends Component {
  
  componentWillMount() {
    this.props.getProducts();
  }

  
  render() {
    return (
			<div>
        <HeaderContainer />
           <IndividualProductDetailComponent products={this.props.data.products.products} />
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

export default connect(mapStateToProps, mapDispachToProps)(IndividualProductContainer)
