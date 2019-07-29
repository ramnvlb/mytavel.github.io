import React, {Component} from 'react';

import {
MDBContainer,MDBRow,MDBCol,MDBCard, MDBNavbar, MDBBtn, MDBNavbarBrand, MDBNavbarNav,
MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline  ,
MDBDropdown,MDBCardBody,MDBInput, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,MDBIcon,
MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter,
} from "mdbreact";

import './Breweries.css';
import BreweriesListItem from './BreweriesListItem/BreweriesListItem';

class AdminBreweries extends Component {

  constructor(props){
    super(props)
    this.state ={
     bookingStep:true,
    }

  }

render(){
    return(
  <MDBContainer className="">
    <h2 className="user-booking-title m-t-30 p-t-25">Breweries</h2>
    <p className="user-booking-subtitle">Breweries</p>
    <div className="divider-booking"></div>
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

export default AdminBreweries;
