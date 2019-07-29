
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

class UserBookings extends Component {

  constructor(props){
    super(props)
    this.state ={
      bookingStep:true,
      review:false,
      rewiewModal:false,
    }
  }



editReview =() =>{

  this.setState({rewiewModal:true,rewiewType: REVIEW_EDIT })
}
addReview =() =>{

  this.setState({rewiewModal:true,rewiewType: REVIEW_EDIT })
}
onClose =() =>{

  this.setState({rewiewModal:false })
}
onSend =() =>{

  this.setState({rewiewModal:false })
}
  render(){



    return(
  <MDBContainer fluid className="w-100-home">
  { <BookingReviewDialog open={this.state.rewiewModal} onClose={this.onClose}  onSend= {this.onSend} />}

       <MDBContainer className="userBooking-item">
           <BookingItem  editReview={this.editReview} addReview ={this.addReview}  title={"MY BOOKINGS"}  type={this.props.type}/>
       </MDBContainer>


  </MDBContainer>



    )
  }

}


export default UserBookings;
