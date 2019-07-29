import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';


import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BookingStep1 from './BookingStep1/BookingStep1UI';
import BookingStep2 from './BookingStep2/BookingStep2UI';
import BookingStep3 from './BookingStep3/BookingStep3UI';
import BookingHeaderUI from './BookingHeader/BookingHeaderUI';
import BookingConfirmation from './BookingConfirmation/BookingConfirmationUI';

import './Booking.css';
import content from '../../localization/content.json';
class BookingUI extends Component {

  constructor(props){
    super(props)
      this.state = {
        currentStep:0
      }
  }

  getHeader(){

  }


  getBookingContent =() =>{

    let step = this.state.currentStep;
    switch(step){
      case 0:
        return(<BookingStep1 />);
      case 1:
        return(<BookingStep2 />);
      case 2:
        return(<BookingStep3 />);
      case 3:
          return(<BookingConfirmation />);
    }



  }

  onBack = () =>{
    this.setState({currentStep: this.state.currentStep-1})
  }

  onNext = () =>{
    this.setState({currentStep: this.state.currentStep+1})
  }

  render(){

    console.log("currentStep" + this.state.currentStep)
    return(
      <MDBContainer>
        {/* BUTTON */}
        <MDBBtn color="info" onClick={this.props.onClose}>Click</MDBBtn>
        {/* MODAL */}
        <MDBModal isOpen={this.props.show} toggle={this.props.onClose}   size="fluid" centered  >
          <MDBModalHeader className="booking_title">
              <h2 className={this.state.currentStep<3 ? "booking-tour-title":"confirmation-title"}>{content.booking.bookThisTour}</h2>
          </MDBModalHeader>
          <MDBModalBody className="custome-padding">
              {
                this.state.currentStep>3 && <BookingHeaderUI  step={this.state.currentStep}/>
              }

            {this.getBookingContent()}

            <div className={this.state.currentStep<3 ? "booking-footer" : "display-none"}>
               <div className="prive-vat">
                  {this.state.currentStep === 0 ? content.booking.PricesAreVATIncluded : ""}
               </div>
               <div className={this.state.currentStep<1 ? "next-back-btn":"next-back-btn-full-width"}>
                 {this.state.currentStep >0 && <MDBBtn color="secondary" onClick={this.onBack} className="back-btn">Back <i class="fas fa-arrow-left m-l-10"></i></MDBBtn>}
                 <MDBBtn color="primary" onClick={this.onNext} className="next-btn">{this.state.currentStep==2?content.booking.confirm:content.booking.next} <i class="fas fa-arrow-right m-l-10"></i></MDBBtn>
               </div>

            </div>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    )
  }

}

export default BookingUI;
