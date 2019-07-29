import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBCol } from 'mdbreact';

import './BookingHeader.css'
import content from '../../../localization/content.json';
class BookingHeaderUI extends Component {

  constructor(props){
    super(props)
      this.state = {
      }
  }

  render(){
    // span {
    //   display: inline-block;
    //   margin-right: 16px;
    //   padding-right: 8px;
    //   width: 100px;
    //   float: left;
    // }
    return(

      <MDBContainer className="booking-header ">

      <MDBRow className="">
          <MDBCol md="4"  className={this.props.step == 0?"activeStep":"inActiveStep" }>
           <div className="step-div">
               <span>
                1.
               </span>
               <p>
                  {content.bookingHeader.stpe1Title}
               </p>
           </div>
          </MDBCol>
          <MDBCol md="4" className={this.props.step == 1?"activeStep":"inActiveStep" }>
          <div className="step-div">
              <span>
               2.
              </span>
              <p>
                {content.bookingHeader.stpe3Title}
              </p>
          </div>
          </MDBCol>
          <MDBCol md="4" className={this.props.step == 2?"activeStep":"inActiveStep" }>
          <div className="step-div">
              <span>
               3.
              </span>
              <p>
                {content.bookingHeader.stpe3Title}
              </p>
          </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }

}

export default BookingHeaderUI;
