import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBCol,MDBRow } from 'mdbreact';

import './BookingStep3.css'


class BookingStep3UI extends Component {

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
                   <div className="form-group booking-step2">
                     <label htmlFor="card-number">Card number</label>
                     <input
                       type="text"
                       className="form-control"
                       id="card-number"
                       placeHolder="Card number"
                     />
                   </div>
                   <div className="form-group booking-step2">
                     <label htmlFor="name">Name (as it appears on your card)</label>
                     <input
                       type="text"
                       className="form-control"
                       id="name"
                       placeHolder="First Name"
                     />
                   </div>
                   <MDBRow>
                       <MDBCol md="6">
                       <div className="form-group booking-step2">
                         <label htmlFor="expiry-date">Expiry date</label>
                         <input
                           type="text"
                           className="form-control"
                           id="expiry-date"
                           placeHolder="DD/MM/YY"
                         />
                       </div>
                       </MDBCol>
                       <MDBCol md="6">
                       <div className="form-group booking-step2">
                         <label htmlFor="cvv">CCV</label>
                         <input
                           type="text"
                           className="form-control"
                           id="cvv"
                           placeHolder="XXX"
                         />
                       </div>
                       </MDBCol>
                   </MDBRow>
                </MDBCol>
              <MDBCol md="7">
                  <div className="bookin-step3-section">
                    <h2 className="step3-order-title">
                      TOTAL ORDER    Edit
                    </h2>
                    <p className="step3-subtitle">
                      Thursday, May 30 2019 from BSÍ Bus Terminal - City center
                      Dassai Sake Brewery Tour
                      2x Adults
                    </p>
                    <h2 class="float-left stpep3-total">Total</h2>
                    <h2 class="float-right stpep3-total">8,700 JPY</h2>
                  </div>
              </MDBCol>

             </MDBRow>
      </MDBContainer>

    )
  }

}

export default BookingStep3UI;
