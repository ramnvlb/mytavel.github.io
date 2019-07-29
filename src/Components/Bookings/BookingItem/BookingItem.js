
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




import './BookingItem.css'
import * as Constants from '../../../utils/constants';


const booking_status_icon={
  "confirmed":"check",
  "pending":"clock",
  "declined":"times"
}
const booking_status_color={
  "confirmed":"green",
  "pending":"#102746",
  "declined":"red"
}



const updateStatusLabel = "UPDATE STATUS";
const moreDetailsLabel = "DETAILS";
class BookingItem extends Component {

  constructor(props){
    super(props)
    this.state ={
      bookingStep:true,
      // type:BOOKING_CUSTOMER,
      bookings:[
        {
          img:"user_booking.png",
          title:"Thursday, May 30 2019 Dassai Sake Brewery Tour 2x Adults",
          icon:"check",
          status:"confirmed",
          btntitle:"add review",
          heading:"Client details:",
          subtitle:"John Doe",
          total:"200.00",
          reviewStatus:false,
        },
        {
          img:"user_booking.png",
          title:"Monday, May 27 2019 Gensaka Sake Brewery Tour 2x Adults",
          icon:"times",
          status:"declined",
          btntitle:"see details",
          heading:"Client details:",
          subtitle:"Philip Ascott",
          total:"300.00",
          reviewStatus:false,

        },
        {
          img:"user_booking.png",
          title:"Wednesday, May 21 2019 Kuroushi Sake Brewery Tour 3x Adults",
          icon:"clock",
          status:"pending",
          btntitle:"add review",
          heading:"Client details:",
          subtitle:"Mary Blake",
          reviewStatus:false,
        },
        {
          img:"user_booking.png",
          title:"Thursday, May 30 2019 Dassai Sake Brewery Tour 2x Adults",
          icon:"check",
          status:"confirmed",
          btntitle:"edit review",
          heading:"Client details:",
          subtitle:"John Doe",
          total:"100.00",
          reviewStatus:true,
        },

      ]

    }
  }


  //review/see detail for cistoer
 // status update and more bookingDetails
 //First button:" Review or Status update"

 onClickStatus =()=>{
   alert("Me clicked")
 }
  getActionButtons= (booking) =>{
    let type = this.props.type;
    if( type === Constants.TYPE_ADMIN){
      return (
        <div>
        <button onClick={this.props.updateStatus}>{updateStatusLabel}</button>
        <button>{moreDetailsLabel}</button>
        </div>
      );
    }else if( type === Constants.TYPE_CUSTOMER){
      let status = booking.status;
      let title = ""
      let onClickFunction= this.onClickStatus;
      if(status === "confirmed"){
        if(booking.reviewStatus)
        {
           title="EDIT REVIEW"
           onClickFunction =this.props.editReview
        }
         else
         {
           title="ADD REVIEW"
            onClickFunction = this.props.addReview;//this.props.addReview
       }
      }else if(status === "pending"){
        return (<div></div>);
      }else if( status == "declined"){
        title = "SEE DETAILS";
      }
      return (
        <div>
        <button onClick={onClickFunction} >{title}</button>

        </div>
      );
    }
  }


  render(){

    let bookings = this.state.bookings;
    let type = this.props.type;
    let title = type === Constants.TYPE_ADMIN ? "Bookings":this.props.title;
    return(
      <MDBContainer className="user-bookin-main-page">
          <h2 className="user-booking-title m-t-30 p-t-25">{title}</h2>
          <p className="user-booking-subtitle">bookings</p>
          <div className="divider-booking"></div>
          {
            bookings && bookings.map( (booking, i)=>
            <MDBRow>
                <MDBCol md="3" xs="12" sm="12">
                  <div>
                    <img src={process.env.PUBLIC_URL + "/images/user_booking/" +booking.img} className="img-fluid"/>
                  </div>
                </MDBCol>
                <MDBCol md="5" xs="12" sm="12">
                  <div>
                     <p className="user-booking-address">
                      {booking.title}
                      </p>
                      <div className="clearfiex">
                          <div className=" confirm-btn float-left">
                             <a href="#" style={{color:booking_status_color[booking.status]}}>
                               <MDBIcon style={{color:booking_status_color[booking.status]}} icon={booking_status_icon[booking.status]} className="check-iocn"/>
                                {booking.status}
                             </a>
                          </div>
                          <div className=" review-btn float-left">
                            {  this.getActionButtons(booking)}
                          </div>
                      </div>

                  </div>
                </MDBCol>
                <MDBCol md="4" xs="12" sm="12">
                   <div className="client-details">
                      <h2>{booking.heading}:</h2>
                      <p>{booking.subtitle}</p>
                      {booking.status === "confirmed"&&
                    <p>Total amount payed:{booking.total} </p>}
                   </div>
                </MDBCol>
                <MDBCol md="12" xs="12" sm="12">
                    <div className="hr-divider">
                    </div>
                </MDBCol>
            </MDBRow>

          ) }

      </MDBContainer>




    )
  }

}


export default BookingItem;
