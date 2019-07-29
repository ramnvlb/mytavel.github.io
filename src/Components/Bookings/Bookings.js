
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




import './Bookings.css';
import AdminBookings from './AdminBookings';
import UserBookings from './UserBookings';
import AppHeader from '../Header/AppHeader';
import BookingReviewDialog from '../BookingReviewDialog/BookingReviewDialog';
import BookingStatusDialog from '../BookingStatusDialog/BookingStatusDialog';
import * as Constants from '../../utils/constants'

const REVIEW_ADD ="add";
const REVIEW_EDIT ="edit";

class Bookings extends Component {

  constructor(props){
    super(props)
    this.state ={
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
    {
      this.state.type === Constants.TYPE_ADMIN?
      <AdminBookings type={this.state.type} />
      :  <UserBookings type={this.state.type} />

    }

  </MDBContainer>



    )
  }

}


export default Bookings;
