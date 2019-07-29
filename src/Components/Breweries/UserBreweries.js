import React, {Component} from 'react';

import {
MDBContainer,MDBRow,MDBCol,MDBCard, MDBNavbar, MDBBtn, MDBNavbarBrand, MDBNavbarNav,
MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline  ,
MDBDropdown,MDBCardBody,MDBInput, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,MDBIcon,
MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter,
} from "mdbreact";

import './Breweries.css';
import BreweriesListItem from './BreweriesListItem/BreweriesListItem';

class UserBreweries extends Component {
  constructor(props){
    super(props)
    this.state ={
     bookingStep:true,
    }

  }

render(){
    return(
  <MDBContainer fluid className="w-100-home">



      <MDBContainer className="main-breweries-section">
        <h2 className="breweries-title">Book a tour</h2>
        <p className="breweries-subtitle">there are 12 breweries matching your criterias:</p>
        <div className="hr-divider-bootom">
        </div>
        <div className="breweries-time-section">
          <div className="time-schedule">
             <p>Date</p>
            <input type="date"  data-date="" data-date-format="DD MMMM YYYY"/>
          </div>
          <div className="time-schedule">
             <p>Time</p>
            <input type="time"  data-date="" data-date-format="DD MMMM YYYY"/>
          </div>
          <div className="time-schedule">
             <p>Adults</p>
             <label className="year-section">16+ years</label>
             <button>-</button>
              <label className="number-of-adult">2</label>
             <button>+</button>
          </div>
          <div className="time-schedule">
             <p>.</p>
              <div className="search-btn-again">
                 <button>search again</button>
              </div>
          </div>
        </div>
      </MDBContainer>

      <MDBContainer className="breweries-list-item margin-brewery">
         <BreweriesListItem type={this.props.type}/>
      </MDBContainer>
     <div className="more-result">
      <a href="#">more results</a>
     </div>

  </MDBContainer>

  )
}




}

export default UserBreweries;
