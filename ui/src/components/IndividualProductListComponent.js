
/*eslint-disable no-unused-vars */
import React, { Component } from 'preact-compat'
import IndividualProductDetailComponent from './IndividualProductDetailComponent'


const IndividualProductListComponent = (props) => (
	<div className="">
		<div className="">
			<div  className="container">

				{
					props.products.length > 0 
					? props.products.map(function (product) {return <IndividualProductDetailComponent key={product._id} product={product} />}, props) 
					: <div>No product available.</div>
				}
				
			</div>
		</div>
	</div>
)

export default IndividualProductListComponent;