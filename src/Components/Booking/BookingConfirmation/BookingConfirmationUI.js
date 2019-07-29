import React, { Component } from 'react';
import { MDBContainer,MDBDatePicker, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader,
  MDBModalFooter, MDBRow, MDBCol, MDBFormInline, MDBInput } from 'mdbreact';


import  './BookingConfirmation.css';
import content from '../../../localization/content.json';

class BookingConfirmation extends Component {

  constructor(props){
    super(props)
      this.state = {

      }
  }


  render(){
    return(
      <MDBContainer>

          <MDBRow>
            <MDBCol md="5">
              <img src={process.env.PUBLIC_URL + "images/tour_details/booking/first-step.png"} className="img-fluid" />
               <p className="booking-step">{content.bookingConfirmation.dassaiSakeBreweryTour}</p>
               <p className="booking-step-subtitle">{content.bookingConfirmation.title}</p>
            </MDBCol>
            <MDBCol md="7">
               <div className="thank-you">
                   <p className="thank-you-title">{content.bookingConfirmation.thankyou}</p>
                   <p className="thank-you-subtitle">
                   {content.bookingConfirmation.subtitle}
                   </p>
               </div>
            </MDBCol>
            <MDBCol md="12">
              <div className="close-btn">
                 <button>
                   close
                 </button>
              </div>
            </MDBCol>
          </MDBRow>

      </MDBContainer>

    )
  }

}

export default BookingConfirmation;
