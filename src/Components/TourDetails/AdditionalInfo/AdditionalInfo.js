import React, {Component} from 'react';
import {
MDBContainer,MDBRow,MDBCol,MDBCard,  MDBFormInline,
MDBCardBody,MDBInput} from "mdbreact";

import './AdditionalInfo.css';

class AdditionalInfo extends Component {
  constructor(){
    super()
    this.state ={

    }
  }

  render(){
    return(
      <div className="">
         <MDBRow>
             <MDBCol md="5" >
                <div className="add_info_title">
                   <h2 className="add_title">Additional information</h2>
                    <p className="departure_name  m-t-39 m-b-0">Departure</p>
                    <p className="departure_time m-b-25">Nagoya</p>
                    <div className="border_bottom_info">
                    </div>
                    <p className="departure_name  m-t-22 m-b-0">Departure Time</p>
                    <p className="departure_time m-b-25">9:00 AM</p>
                    <div className="border_bottom_info">
                    </div>
                    <p className="departure_name  m-t-22 m-b-0">Return Time</p>
                    <p className="departure_time m-b-25">5:00 PM</p>
                    <div className="border_bottom_info">
                    </div>
                </div>
             </MDBCol>
             <MDBCol md="7">
               <div className="add_info_title">
                 <h2 className="add_title"> What’s included</h2>
                  <ul className="include_subtitle">
                      <li>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque</li>
                      <li>ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</li>
                      <li>Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt</li>
                      <li>Neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed.</li>
                      <li> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis</li>

                  </ul>
               </div>
             </MDBCol>
         </MDBRow>
      </div>

    )
  }
}

export default AdditionalInfo;
