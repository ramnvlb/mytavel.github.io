
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
import BookingItem from './BookingItem/BookingItem';
import BookingReviewDialog from '../BookingReviewDialog/BookingReviewDialog';
import BookingStatusDialog from '../BookingStatusDialog/BookingStatusDialog';
import * as Constants from '../../utils/constants'

const REVIEW_ADD ="add";
const REVIEW_EDIT ="edit";

class AdminBookings extends Component {

  constructor(props){
    super(props)
    this.state ={
      bookingStep:true,
      updateStatus:false,
      type:Constants.TYPE
    }
  }



updateStatus =() =>{

  this.setState({updateStatus:true,rewiewType: REVIEW_EDIT })
}

onClose =() =>{

  this.setState({updateStatus:false })
}
onSave =() =>{

  this.setState({updateStatus:false })
}
  render(){
    //{this.state.rewiewModal || true &&  <BookingStatusDialog />}


    return(
  <MDBContainer fluid className="w-100-home">
  {this.state.updateStatus &&  <BookingStatusDialog open={this.state.updateStatus} onSave={this.onSave} onClose={this.onClose}/>}
       <MDBContainer className="userBooking-item">
           <BookingItem updateStatus={this.updateStatus} title={"MY BOOKINGS"}  type={this.props.type}/>
       </MDBContainer>

  </MDBContainer>



    )
  }

}


export default AdminBookings;
