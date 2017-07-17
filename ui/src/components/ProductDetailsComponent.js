/*eslint-disable no-unused-vars*/
import React, { Component } from 'react'
import { Link,browserHistory} from 'preact-router';

import IndividualProductDetailComponent from '../components/IndividualProductDetailComponent'
/*eslint-enable no-unused-vars*/
/* need to add hiperlink inside a tag */
import '../styles/products.css'
/*eslint-enable no-unused-vars */
import { bindActionCreators } from 'redux';
import { connect } from 'preact-redux';
import * as actionCreators from '../actions/actions';

class ProductDetailsComponent extends Component {
  constructor() {
    super();
    this.state = {
      userID: "@vishwanitw_uidev",
      firstName: '',
      lastName: 'UI Dev',
      email: 'vishwanitw@gmail.com',
      disabled: true
    };

    this.sendValue = this.sendValue.bind(this);    
    this.setValue = this.setValue.bind(this);
  }

  setValue(e){
    this.setState({
      value: e.target.value
    });
  }
  sendValue(){
    //console.log(this.state.userID);
    browserHistory.push('/second/'+this.state.userID); 
  }

  componentDidMount(){
    this.state = {
      pname : this.props.product.name
    }
  }
 
  render() {
    return (
            <div className="product-layout product-grid col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="product-thumb">
                    <Link href={`/${this.props.product.name}}`}>
                        <div className="image">
                            <a href="#"><img className="img-responsive"  src={this.props.product.picture}></img></a>
                            
                        </div>
                    </Link>
                    <div className="caption">
                        <h4><a href="#"> {this.props.product.name} </a></h4>
                        <p><b>Availabitlity : {this.props.product.price}</b></p>
                    </div>

                    <div className="button-group">
                        <button type="button" class="qtybutton">Qty: </button>
                        <input type="text" value={this.props.product.quantity} className="form-control dirctinpt" />
                    </div>

                    <div class="button-group">
                        <button class="btn-link btn-add-cart" type="button" onclick=""><i class="fa fa-shopping-cart"></i> <span class="hidden-xs hidden-sm hidden-md">Add to Cart</span></button>
                        <button type="button" data-toggle="tooltip" title="" onclick="" data-original-title="Add to Wish List"><i class="fa fa-heart"></i></button>
                        <button type="button" data-toggle="tooltip" title="" onclick="" data-original-title="Compare this Product"><i class="fa fa-exchange"></i></button>
                    </div>
                </div>
            </div>
            
        )
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

export default connect(mapStateToProps, mapDispachToProps)(ProductDetailsComponent)

