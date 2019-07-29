/**********************************************************************
*
*
*************************************************************************/
import React, {Component} from 'react';
import {
MDBContainer,MDBRow,MDBCol,MDBCard, MDBNavbar, MDBBtn, MDBNavbarBrand, MDBNavbarNav,
MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline  ,
MDBDropdown,MDBCardBody,MDBInput, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,
} from "mdbreact";
import { MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption, MDBIcon } from "mdbreact";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask} from
"mdbreact";
import { MDBCardImage, MDBCardTitle, MDBCardText} from "mdbreact";

import './TourHighLight.css'

class TourHighLight extends Component {

  constructor(props) {

    super(props)

    this.state={

      tourLabel:[
            {  icon:"ico_time.png",
               name:"4 hours",
            },
            {  icon:"ico_calendar.png",
              name:"all year",
            },
            {  icon:"ico_users.png",
              name:"Age 20+",
            },
            {  icon:"person.png",
              name:"Min. 5pax",
            },
            {  icon:"ico_card.png",
              name:"Availability 14",
            },
         ],
    }

  }

  render(){

    return(
      <MDBContainer className="tourHighLight_container">
         <MDBRow>
             <MDBCol md="8">
                    <h2 className="tour_title">
                         Dassai Sake Brewery Tour
                    </h2>
                    <div className="clearfix">
                          <div className="fav_item float-left">
                              <img src={process.env.PUBLIC_URL + "/images/tour_details/like/like.png"} className="img-fluid like_img"/>
                              <span className="add_favorites">Add to favorites</span>
                          </div>
                          <ul className="float-left rating_img">
                            <li>
                              <a href="#">
                                 <img src={process.env.PUBLIC_URL + "/images/tour_details/star1/star.png"} className="img-fluid like_img"/>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                 <img src={process.env.PUBLIC_URL + "/images/tour_details/star1/star.png"} className="img-fluid like_img"/>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                 <img src={process.env.PUBLIC_URL + "/images/tour_details/star1/star.png"} className="img-fluid like_img"/>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                 <img src={process.env.PUBLIC_URL + "/images/tour_details/star1/star.png"} className="img-fluid like_img"/>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                 <img src={process.env.PUBLIC_URL + "/images/tour_details/star/star.png"} className="img-fluid like_img"/>
                              </a>
                            </li>
                            <li className="rating_number">
                                <a href="#"> 4.5</a>
                           </li>
                          </ul>
                    </div>
              </MDBCol>
              <MDBCol md="4">
                   <p className="tour_subtitle">8700.00 JPY per person</p>
                   <p className="time_close">closed</p>
              </MDBCol>
              <div className="tour_border">
              </div>
         </MDBRow>
         <MDBContainer className="tour_label">
           <MDBRow>
           {
             this.state.tourLabel.map((labelrow, i)=>
            <div className="label_5_colum">
                 <img src={process.env.PUBLIC_URL + "/images/tour_details/tour_label/"+labelrow.icon} className="img-fluid like_img"/>
                 <p className="label_tour_text">{labelrow.name}</p>
            </div>
           )
           }

           </MDBRow>

         </MDBContainer>
      
      </MDBContainer>
    )
  }

}
export default TourHighLight;
