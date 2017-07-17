/*eslint-disable no-unused-vars*/
import React, { Component } from 'react'
import { Link } from 'preact-router'
/*eslint-enable no-unused-vars*/
/* need to add hiperlink inside a tag */
import '../styles/products.css'

class IndividualProductDetailComponent extends Component {
  constructor(props) {
    super(props);

  }
  componentWillMount() {
    
  }

  render() {
    return (
        <div className="container">
           {this.props}
            {/*<div className="row">
                <div class="col-xs-12">
                    <ul class="breadcrumb">
                        <li><a href=""><i class="fa fa-home"></i></a></li>
                        <li><a href="">SMOKTech TFV12 CLOUD BEAST KING 6ml TANK -SILVER</a></li>
                    </ul>
                </div>

                <div className="col-sm-8">
                    <div className="col-xs-12">
                        <ul class="thumbnails">
                            <li class="thumbnail">
                                <i class="fa fa-search-plus zoombutton"></i>
                                <div style="height:400px;width:400px;" class="zoomWrapper">
                                    <img class="img-responsive" id="zoom_elev" src={this.props.product.picture}  title={this.props.product.name} alt={this.props.product.name}></img>
                                </div>

                            </li>
                        </ul>
                    </div>

                    <ul class="nav nav-tabs">
                        <li class="active"><a href="#tab-description" data-toggle="tab">{this.props.product.description}</a></li>
                        <li><a href="#tab-review" data-toggle="tab">{this.props.product.reviews}</a></li>
                    </ul>
                </div>
            </div>*/}
            <h2>Inside IndividualProductDetailComponent</h2>
            <h2> name is {this.props.name}</h2>
        </div>
    )
  }
}




export default IndividualProductDetailComponent
