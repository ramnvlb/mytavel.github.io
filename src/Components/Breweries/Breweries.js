import React, {Component} from 'react';

import {
MDBContainer,MDBRow,MDBCol,MDBCard, MDBNavbar, MDBBtn, MDBNavbarBrand, MDBNavbarNav,
MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline  ,
MDBDropdown,MDBCardBody,MDBInput, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,MDBIcon,
MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter,
} from "mdbreact";

import './Breweries.css';
import UserBreweries from './UserBreweries';
import AdminBreweries from './AdminBreweries';

import * as Constants from '../../utils/constants';

class Breweries extends Component {

  constructor(props){
    super(props)
    this.state ={
     bookingStep:true,
     type:Constants.TYPE
    }

  }

  componentDidMount(){
    let loginType = localStorage.getItem("userType");
    if( typeof loginType !== "undefined"){
      this.setState({type:loginType});
    }
  }
render(){
    return(
  <MDBContainer fluid className="w-100-home">
    {this.state.type === Constants.TYPE_ADMIN ?
      <AdminBreweries type={this.state.type}/>
      :  <UserBreweries type={this.state.type}/>}

  </MDBContainer>

  )
}




}

export default Breweries;
