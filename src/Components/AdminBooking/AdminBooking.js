
/**********************************************************************
* UserBooking component to add Header
*
*************************************************************************/
import React, {Component} from 'react';
import {
MDBContainer,MDBRow,MDBCol,MDBCard, MDBNavbar, MDBBtn, MDBNavbarBrand, MDBNavbarNav,
MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline  ,
MDBDropdown,MDBCardBody,MDBInput, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,MDBIcon
} from "mdbreact";
import { MDBMedia } from 'mdbreact';




import './AdminBooking.css';
import Header from '../Header/Header';
import UserBookingItem from '../UserBooking/UserBookingItem/UserBookingItemUI';

import LoginFooter from '../LoginFooter/LoginFooter';

class AdminBooking extends Component {

  constructor(props){
    super(props)
    this.state ={
      bookingStep:true,
      userBooking:false

    }
  }

  render(){

    let bookings = this.state.bookingDetails;

    return(
  <MDBContainer fluid className="w-100-home">
      <MDBContainer fluid className="w-100-home bg-color-user-booking">
          <MDBContainer className="header-top-user-booking">
          {
            this.state.bookingStep?<Header/>:""}
          </MDBContainer>
      </MDBContainer>

       <MDBContainer>
         {this.state.userBooking?<UserBookingItem/>:""}
       </MDBContainer>


      <LoginFooter/>
  </MDBContainer>



    )
  }

}


export default AdminBooking;
