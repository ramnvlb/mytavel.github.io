
import React, {Component} from 'react';
import {
MDBContainer,MDBRow,MDBCol,MDBCard, MDBNavbar, MDBBtn, MDBNavbarBrand, MDBNavbarNav,
MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline  ,
MDBDropdown,MDBCardBody,MDBInput, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,MDBIcon,
MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter,
} from "mdbreact";

import './BookingStatusDialog.css';

const STATUS_CONFIRMED = "confirmed"
const STATUS_PENDING = "pending"
const STATUS_DECLINED = "declined"
const STATUS_NEW = "new"
class BookingStatusDialog extends Component {

  constructor(props){
    super(props)
    this.state = {
     status:STATUS_DECLINED
    }
  }


getBookingStatusLabel = () =>{
  if( this.state.status  === STATUS_CONFIRMED)
    return "Confirmed"
  else if(this.state.status  === STATUS_PENDING){
      return "Pending"
  }
  else {
    return "Declined"
  }
}
getInputControlByStatus = () =>{
  if( this.state.status  === STATUS_CONFIRMED)
    return (
       <div>
           <p className="review-label">Current status</p>
         <select className="browser-default custom-select">
            <option>Select</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
     </div>
   );
  else if(this.state.status  === STATUS_PENDING){
      return (
        <div>
            <p className="review-label">Add booking reference number</p>
             <input type="text"  placeholder="XXXXX-XXX" className="reference"/>
           </div>
      )
  }
  else {
    return (
      <div>
          <p className="review-label">Select reason</p>
        <select className="browser-default custom-select select-region">
           <option>Select</option>
           <option value="1">Option 1</option>
           <option value="2">Option 2</option>
           <option value="3">Option 3</option>
         </select>
    </div>
    )
  }
}
  render(){
    return(
            <MDBContainer>

               <MDBModal isOpen={this.props.open} toggle={this.props.onClose}>
                 <MDBModalHeader toggle={this.props.onClose}> <h2 className="add-a-review">Update booking status</h2></MDBModalHeader>
                 <MDBModalBody className="review-modal">

                   <div className="main-review-section">
                     <MDBRow>
                       <MDBCol md="4">
                           <img src={process.env.PUBLIC_URL + "/images/user_booking/user_booking.png"} className="img-fluid"/>
                            <p className="review-title">Kuroushi Sake Brewery Tour</p>
                            <p className="review-subtitle">Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit.</p>
                       </MDBCol>
                       <MDBCol md="8">
                         <div className="status-input">
                           <p className="current-status">{"Current status:" +  this.getBookingStatusLabel()}</p>
                           <p className="status-subtitle">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                               accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
                               quae ab illo inventore veritatis et quasi architecto beatae
                               vitae dicta sunt, explicabo.
                           </p>

                           {
                            this.getInputControlByStatus()
                          }
                        </div>
                       </MDBCol>
                     </MDBRow>
                     </div>

                 </MDBModalBody>
                 <MDBModalFooter>
                 {
                    this.state.status === STATUS_PENDING || this.state.status === STATUS_NEW ?
                    <div>
                    <button className="save-status " onClick={this.props.onClose}>cancel</button>
                    <button className="save-status " onClick={this.props.onSave}>save status</button>
                    </div>
                    :<div>
                    <button className="save-status " onClick={this.props.onClose}>cancel</button>
                    <button className="save-status " onClick={this.props.onSave}>save status</button>
                    </div>
                  }

                 </MDBModalFooter>
               </MDBModal>
             </MDBContainer>

    )
  }



}
export default BookingStatusDialog;
