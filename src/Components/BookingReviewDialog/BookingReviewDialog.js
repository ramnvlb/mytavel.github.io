
import React, {Component} from 'react';
import {
MDBContainer,MDBRow,MDBCol,MDBCard, MDBNavbar, MDBBtn, MDBNavbarBrand, MDBNavbarNav,
MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline  ,
MDBDropdown,MDBCardBody,MDBInput, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,MDBIcon,
MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter,
} from "mdbreact";

import './BookingReviewDialog.css';

class BookingReviewDialog extends Component {

  constructor(props){
    super(props)
    this.state = {
      modal: true
    }
  }
  toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}
  render(){
    return(
            <MDBContainer>

               <MDBModal isOpen={this.props.open} toggle={this.props.onClose}>
                 <MDBModalHeader toggle={this.props.onClose}> <h2 className="add-a-review">Add a review</h2></MDBModalHeader>
                 <MDBModalBody className="review-modal">

                   <div className="main-review-section">
                     <MDBRow>
                       <MDBCol md="4">
                           <img src={process.env.PUBLIC_URL + "/images/user_booking/user_booking.png"} className="img-fluid"/>
                            <p className="review-title">Kuroushi Sake Brewery Tour</p>
                            <p className="review-subtitle">Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit.</p>
                       </MDBCol>
                       <MDBCol md="8">
                         <div className="review-input">
                             <div className="form-group">
                               <label htmlFor="yourname" className="review-label">Your Name</label>
                               <input
                                 type="text"
                                 className="form-control review-name"
                                 id="yourname"
                                placeholder="Name"
                               />
                             </div>
                             <div className="form-group">
                                 <label htmlFor="comment" className="review-label">
                                 Your comment
                                 </label>
                                 <textarea
                                 className="form-control"
                                 id="comment"
                                 rows="3"
                                 placeholder="Describe here your experience…"
                                 />
                             </div>
                             <p className="review-label margin-bottom">Your rating</p>
                             <ul className="review-rating">
                                 <li>
                                   <img src={process.env.PUBLIC_URL + "/images/user_booking/star.png"} className="img-fluid"/>
                                 </li>
                                 <li>
                                   <img src={process.env.PUBLIC_URL + "/images/user_booking/star.png"} className="img-fluid"/>
                                 </li>
                                 <li>
                                   <img src={process.env.PUBLIC_URL + "/images/user_booking/star.png"} className="img-fluid"/>
                                 </li>
                                 <li>
                                   <img src={process.env.PUBLIC_URL + "/images/user_booking/star.png"} className="img-fluid"/>
                                 </li>
                                 <li>
                                   <img src={process.env.PUBLIC_URL + "/images/user_booking/stardouble.png"} className="img-fluid"/>
                                 </li>
                                 <li>
                                    <span className="rating-number"> 4.5</span>
                                 </li>
                             </ul>
                         </div>

                       </MDBCol>
                     </MDBRow>
                     </div>

                 </MDBModalBody>
                 <MDBModalFooter>
                   <button className="send-review" onClick={this.props.onClose}>cancel</button>
                   <button className="send-review" onClick={this.props.onSend}>send review</button>
                 </MDBModalFooter>
               </MDBModal>
             </MDBContainer>

    )
  }



}
export default BookingReviewDialog;
