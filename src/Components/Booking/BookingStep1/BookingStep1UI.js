import React, { Component } from 'react';
import { MDBContainer,MDBDatePicker, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader,
  MDBModalFooter, MDBRow, MDBCol, MDBFormInline, MDBInput } from 'mdbreact';

import BookingHeaderUI from '../BookingHeader/BookingHeaderUI';
import  './BookingStep1.css';
import content from '../../../localization/content.json';

class BookingStep1UI extends Component {

  constructor(props){
    super(props)
      this.state = {

      }
  }
  getPickerValue = (value) => {
   console.log(value);
 }

  render(){
    return(
      <MDBContainer>
         <div className="booking-step-title p-t-30">
             <MDBRow>
                <MDBCol md="4">
                  <img src={process.env.PUBLIC_URL + "images/tour_details/booking/first-step.png"} className="img-fluid" />
                   <p className="booking-step">{content.bookingStep1.title}</p>
                   <p className="booking-step-subtitle">{content.bookingStep1.subtitle}</p>
                </MDBCol>
                <MDBCol md="4">
                  <div>
                     <p className="bookin-date">
                       Date
                     </p>
                     <select className="select-date">
                        <option>
                        Thursday May 30
                        </option>
                     </select>
                  </div>
                  <div className="m-t-16">
                     <p className="bookin-date">
                       Time
                     </p>
                     <select className="select-date">
                        <option>
                        From 9:00 AM
                        </option>
                     </select>
                  </div>
                  <div className="m-t-16 adult-year-section">
                     <p className="bookin-date">
                       Adults
                     </p>
                     <span className="user-date">16+ years</span>
                     <button type="button" mdbBtn color="light" mdbWavesEffect>-</button>
                      <input type="text" className="number-show" value="2"/>
                     <button type="button" mdbBtn color="light" mdbWavesEffect>+</button>
                      <div className="check-ok">
                        <input type="checkbox" />
                        <label>{content.bookingConfirmation.needaPickup}</label>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol md="4">
                  <div className="booking-total-price">
                    <p>{content.bookingConfirmation.totalPrice}</p>
                    <h2>8,700 JPY</h2>
                    <span className="">Adults 16+ years (8,700 JPY no pick up)Available Seats: 14
                    </span>
                  </div>
                </MDBCol>
             </MDBRow>
           </div>
      </MDBContainer>

    )
  }

}

export default BookingStep1UI;
