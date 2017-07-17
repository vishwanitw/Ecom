/*eslint-disable no-unused-vars*/
import React, {Component} from 'react'
import AllCategoriesDetailsComponent from './AllCategoriesDetailsComponent'
// require('../styles/categories');
import '../styles/categories.css'

/*eslint-enable no-unused-vars*/


class AllCategoriesComponent extends Component {

  constructor(props){
    super(props);
    this.handleCategories = this.handleCategories.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }
  getInitialState() {
    this.state = {
      hover : false
    }

  }
  handleCategories() {
    // alert('this.props : ',this.props.AllCategories.length);
  }

  handleMouseOver() {
    // alert('hover: ',this.state.hover);
  }

  render(){
    return (
    <div className='container'>
      <div className='navbarBGcolor'> 
      <nav id="menu" className=" dropdown-categories">
        <span className="dropbtn">
           <a href="" >CATEGORIES</a>	
        </span>
      
          <div className='dropdown-content-categories'>
              {
                this.props.AllCategories.length > 0 
                ? this.props.AllCategories.map(function (categorie) {return <div className="ViswaDude"><AllCategoriesDetailsComponent key={categorie.id} categorie={categorie} /></div>}, this.props) 
                : <div>No Categories available.</div>
              }		 
          </div>
      </nav>
      <nav id="menu" className=" dropdown-categories">
        <span className="dropbtn">
           <a href="" >WHATS' NEW</a>	
        </span>
      
          <div className='dropdown-content-categories'>
              {
                this.props.AllCategories.length > 0 
                ? this.props.AllCategories.map(function (categorie) {return <div className="ViswaDude"><AllCategoriesDetailsComponent key={categorie.id} categorie={categorie} /></div>}, this.props) 
                : <div>No Categories available.</div>
              }		 
          </div>
      </nav>

      
      <nav id="menu" className=" dropdown-categories">
        <span className="dropbtn">
           <a href="" >Smoking  Pipe</a>	
        </span>
      
          <div className='dropdown-content-categories'>
              {
                this.props.AllCategories.length > 0 
                ? this.props.AllCategories.map(function (categorie) {return <div className="ViswaDude"><AllCategoriesDetailsComponent key={categorie.id} categorie={categorie} /></div>}, this.props) 
                : <div>No Categories available.</div>
              }		 
          </div>
      </nav>
      <nav id="menu" className=" dropdown-categories">
        <span className="dropbtn">
           <a href="" >Smoking  Pipe</a>	
        </span>
      
          <div className='dropdown-content-categories'>
              {
                this.props.AllCategories.length > 0 
                ? this.props.AllCategories.map(function (categorie) {return <div className="ViswaDude"><AllCategoriesDetailsComponent key={categorie.id} categorie={categorie} /></div>}, this.props) 
                : <div>No Categories available.</div>
              }		 
          </div>
      </nav>


      <nav id="menu" className=" dropdown-categories">
        <span className="dropbtn">
           <a href="" >e-liquid</a>	
        </span>
      
          <div className='dropdown-content-categories'>
              {
                this.props.AllCategories.length > 0 
                ? this.props.AllCategories.map(function (categorie) {return <div className="ViswaDude"><AllCategoriesDetailsComponent key={categorie.id} categorie={categorie} /></div>}, this.props) 
                : <div>No Categories available.</div>
              }		 
          </div>
      </nav>

      <nav id="menu" className=" dropdown-categories">
        <span className="dropbtn">
           <a href="" >Vaporizer</a>	
        </span>
      
          <div className='dropdown-content-categories'>
              {
                this.props.AllCategories.length > 0 
                ? this.props.AllCategories.map(function (categorie) {return <div className="ViswaDude"><AllCategoriesDetailsComponent key={categorie.id} categorie={categorie} /></div>}, this.props) 
                : <div>No Categories available.</div>
              }		 
          </div>
      </nav>

      <nav id="menu" className=" dropdown-categories">
        <span className="dropbtn">
           <a href="" >SMOK ACCESSORIES</a>	
        </span>
      
          <div className='dropdown-content-categories'>
              {
                this.props.AllCategories.length > 0 
                ? this.props.AllCategories.map(function (categorie) {return <div className="ViswaDude"><AllCategoriesDetailsComponent key={categorie.id} categorie={categorie} /></div>}, this.props) 
                : <div>No Categories available.</div>
              }		 
          </div>
      </nav>

      <nav id="menu" className=" dropdown-categories">
        <span className="dropbtn">
           <a href="" >DIGITAL SCALES</a>	
        </span>
      
          <div className='dropdown-content-categories'>
              {
                this.props.AllCategories.length > 0 
                ? this.props.AllCategories.map(function (categorie) {return <div className="ViswaDude"><AllCategoriesDetailsComponent key={categorie.id} categorie={categorie} /></div>}, this.props) 
                : <div>No Categories available.</div>
              }		 
          </div>
      </nav>
      </div>
    </div>
	)
  }
	
}
export default AllCategoriesComponent;