/*eslint-disable no-unused-vars */
import React, { Component } from 'preact-compat'
import HomeComponent from '../components/HomeComponent'
import CategoriesListComponent from '../components/CategoriesListComponent'
import NavbarComponent from '../components/NavbarComponent'
import ProductListComponent from '../components/ProductListComponent'
import HeaderContainer from '../containers/HeaderContainer'
import FooterContainer from './FooterContainer'
import Carousel from '../components/Carousel'


/*eslint-enable no-unused-vars */
import { bindActionCreators } from 'redux';
import { connect } from 'preact-redux';
import * as actionCreators from '../actions/actions';

class HomeContainer extends Component {
  
  componentDidMount() {
    this.props.getCategories();
  }

  
  render() {
    return (
			<div>
				{/*<HomeComponent />*/}
        <HeaderContainer />
        <CategoriesListComponent  categories={this.props.data.categories.categories} />
        <FooterContainer />
        <Carousel />
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

export default connect(mapStateToProps, mapDispachToProps)(HomeContainer)
