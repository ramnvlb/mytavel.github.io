import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBCol,MDBRow } from 'mdbreact';

import BookingHeaderUI from '../BookingHeader/BookingHeaderUI';
import './BookingStep2.css';
import content from '../../../localization/content.json';
class BookingStep2UI extends Component {

  constructor(props){
    super(props)
      this.state = {

      }
  }

  render(){
    return(
      <MDBContainer>
         <p className="step-two-subtitle">
           {content.bookingStep2.subtitle}
         </p>
         <MDBRow>
            <MDBCol md="4">
              <div className="form-group booking-step2">
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="first-name"
                  placeHolder="First Name"
                />
              </div>
            </MDBCol>
            <MDBCol md="4">
              <div className="form-group booking-step2">
                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="last-name"
                  placeHolder="Last Name"
                />
              </div>
            </MDBCol>
            <MDBCol md="4">
              <div className="form-group booking-step2">
                <label htmlFor="email-address">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email-address"
                  placeHolder="Email address"
                />
              </div>
            </MDBCol>
         </MDBRow>
           <div class="checkbox">
            <input type="checkbox" id="signup"/>
            <label for="signup"><span>{content.bookingStep2.sign}</span></label>
          </div>
          <div class="checkbox">
           <input type="checkbox" id="accept"/>
           <label for="accept"><span>{content.bookingStep2.accept}</span></label>
         </div>
      </MDBContainer>

    )
  }

}

export default BookingStep2UI;
