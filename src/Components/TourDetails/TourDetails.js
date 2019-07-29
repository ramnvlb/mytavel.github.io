/**********************************************************************
* TourDetails component to add Header, Slider, MapContainer, Footer, TourHighLight,
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

import '../../style/style.css';
import './TourDetails.css';
import AppHeader from '../Header/AppHeader'
import Slider from '../Slider/Slider';
import TourHighLight from './TourHighLight/TourHighLight';
import RequestInfo from './RequestInfo/RequestInfo';
import ThingsDoTo from './ThingsDoTo/ThingsDoTo';
import AdditionalInfo from './AdditionalInfo/AdditionalInfo';
import BookingUI from '../Booking/BookingUI';


import content from '../../localization/content.json';

class TourDetails extends Component {

  constructor(props) {
    super(props)
    this.state={
      showBooking:false,
      render:false
    }
  }

  componentDidMount(){
    document.getElementById('tourinfoId') && document.getElementById('tourinfoId').scrollIntoView()
    this.setState({render:!this.state.render});
  }

    bookNow = () =>{

      this.setState({showBooking:true})
    }

    closeBookingDialog = () =>{
      this.setState({showBooking:false})
    }

  render(){

    return(
      <MDBContainer fluid className="w-100-home">
              <MDBContainer fluid className="tour-background-img">
                  <MDBContainer className="header-top">
                    <AppHeader />
                  </MDBContainer>
                  <MDBContainer className="book-now">
                     <MDBContainer className="select-tour pos-bootom">
                        <MDBRow>
                           <div className="custome-width">
                               <div className="border-select-option">
                                  <div className="p-l-0">
                                     <select className="selectOption">
                                        <option>
                                          Select date
                                        </option>
                                    </select>
                                  </div>
                               </div>
                           </div>
                           <div className="custome-width">
                             <div className="border-select-option">
                                <div className="p-l-0">
                                   <select className="selectOption">
                                      <option>
                                      Select time
                                      </option>
                                  </select>
                                </div>
                             </div>
                           </div>
                           <div className="custome-width">
                               <div className="find-tour-btn">
                                  <button onClick={this.bookNow} className="btn-tour">book now</button >
                               </div>
                           </div>
                        </MDBRow>
                    </MDBContainer>
                  </MDBContainer>

            </MDBContainer>

            <MDBContainer id="tourinfoId" className="tourHighLight_container m-t-113">
              <TourHighLight/>
           </MDBContainer>

           <MDBContainer className="border_section">
             <div className="tour_border_section">
             </div>
           </MDBContainer>

           <MDBContainer className="tour_info_container">
             <MDBRow>
                <MDBCol md={7}>
                   <h2 className="tour_info">
                    {content.mapInfo.subtitle}
                   </h2>
                </MDBCol>
                <MDBCol md={5}>
                  <div className="map_info">
                      map
                  </div>
                </MDBCol>
             </MDBRow>
           </MDBContainer>

           <MDBContainer className="tour_request_container">
             <MDBRow>
                <MDBCol md={7}>
                   <h2 className="tour_request">
                     {content.requestInfo.subtitle}
                   </h2>
                </MDBCol>
                <MDBCol md={5}>
                  <div className="tour_request_email">
                     <RequestInfo/>
                  </div>
                </MDBCol>
             </MDBRow>
           </MDBContainer>

           <MDBContainer className="things_container m-t-113">
             <h2 className="things_main_title">Highlights: things to do nearby…</h2>
              <div class="divider m-b-36"></div>
             <ThingsDoTo/>
          </MDBContainer>

          <MDBContainer className="sliderSection m-t-113">
            <AdditionalInfo/>
         </MDBContainer>

         <MDBContainer className="sliderSection m-t-144">
               <MDBRow>
                   <MDBCol md="12">
                   <h2 className="slider-title text-left">
                     {content.ExperiencetheultimateSakeTour.title}
                   </h2>
                   <div className="divider">
                   </div>
                   </MDBCol>
                   </MDBRow>
         </MDBContainer>
          <MDBContainer className="sliderSection m-t-59">
             <Slider />
          </MDBContainer>

      </MDBContainer>
    )
  }

}
export default TourDetails;
