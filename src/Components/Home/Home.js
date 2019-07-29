/**********************************************************************
* Home component to add Header, login, Slider, MapContainer, Footer, VideoSection
*
*************************************************************************/



import React, { Component } from "react";
import {
MDBContainer,MDBRow,MDBCol,MDBCard, MDBNavbar, MDBBtn, MDBNavbarBrand, MDBNavbarNav,
MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline  ,
MDBDropdown,MDBCardBody,MDBInput, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,
} from "mdbreact";
import { MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption, MDBIcon } from "mdbreact";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask} from
"mdbreact";
import { MDBCardImage, MDBCardTitle, MDBCardText} from "mdbreact";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import '../../index.css';
import AppHeader from '../Header/AppHeader';
import Login from '../Login/Login';
import MapContainer from '../MapContainer/MapContainer';
import VideoSection from '../VideoSection/VideoSection';
import Slider from '../Slider/Slider';


import content from '../../localization/content.json';

import './Home.css';
import '../../style/style.css';


class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
        isOpen: false,
       };
}

handleClick = event => event.target.classList.add('click-state')

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {

  return (
    <MDBContainer fluid className="w-100-home">
        <MDBContainer fluid className="home-background-img">
              <MDBContainer className="header-top">
                 <AppHeader />
              </MDBContainer>
              <MDBContainer className="">
                <MDBRow>
                    <MDBCol md="6">
                        <MDBCard className="leftSection">
                            <MDBCardBody className="p-l-0">
                              <p className="titleBar">
                                Kanpai!<span className="text-style-1">(乾杯!)</span>
                              </p>
                              <p className="support">
                              {content.bannerTitile.subtitle}
                              </p>
                            </MDBCardBody>
                    </MDBCard>
                    </MDBCol>
                    <MDBCol md="5">
                        <Login history = {this.props.history}/>
                    </MDBCol>
                </MDBRow>
                <MDBContainer className="select-tour">
                  <MDBRow>
                     <div className="custome-width">
                         <div className="border-select-option">
                            <div className="p-l-0">
                               <select className="selectOption">
                                  <option>
                                  {content.bannerTitile.SelectPrefecture}
                                  </option>
                                  <option>
                                  Select prefecture2
                                  </option>
                                  <option>
                                  Select prefecture
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
                              {content.bannerTitile.SelectBrewery}
                                </option>
                                <option>
                                Select brewery2
                                </option>
                                <option>
                                Select brewery
                                </option>
                            </select>
                          </div>
                       </div>
                     </div>
                     <div className="custome-width">
                       <Link to="/tours">
                           <div className="find-tour-btn">
                              <button className="btn-tour">{content.bannerTitile.findAtour}</button >
                           </div>
                       </Link>
                     </div>
                  </MDBRow>
                </MDBContainer>
              </MDBContainer>
        </MDBContainer>

        <MDBContainer className="m-t-144">
            <MDBRow>
                <MDBCol md="12">
                <h2 className="main-title">
                  {content.authenticJapaneseSakeTour.title}
                </h2>
                </MDBCol>
             </MDBRow>
            <MDBRow>
                <MDBCol md="6">
                  <MDBCard className=" m-t-29 card" >
                      <MDBCardBody className=" p-0">
                        <p className="subtitle">
                        {content.authenticJapaneseSakeTour.subtitleOne}
                        </p>
                      </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="6">
                <MDBCard className=" m-t-29 card" >
                    <MDBCardBody className=" p-0">
                      <p className="subtitle">
                      {content.authenticJapaneseSakeTour.subtitleTwo}
                      </p>
                    </MDBCardBody>
                </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

        {/* start section  */}
        <MDBContainer className="m-t-144 breweries-section">
            <MDBRow>
               <MDBCol md="6">
                   <img src={process.env.PUBLIC_URL + "/images/hyogos_Breweries/hyogos_Breweries.png"} className="imwidth img-fluid"/>
               </MDBCol>

               <MDBCol md="6">
                 <h4 className="titles m-t-2 m-l-80">
                  {content.focusonPrefecturesHyogoBreweries.title}
                 </h4>
                 <p className="title-support m-t-43 m-l-80">
                  {content.focusonPrefecturesHyogoBreweries.subtile}
                 </p>
                 <Link to="/tours">
                 <h2 className="seetoursArrow m-l-80 p-l-25">
                    {content.focusonPrefecturesHyogoBreweries.seeTourBtn}<img src={process.env.PUBLIC_URL + "/images/right_arrow-33.png"} className="m-l-26 widthfixed img-fluid "/>
                 </h2>
                 </Link>
               </MDBCol>
            </MDBRow>
            <MDBRow className="m-t-77">
              <MDBCol md="6" className="">
                <h4 className="titles m-t-22 m-l-25 ">
                {content.featuredTourDessaibrewery.title}
                </h4>
                <p className="title-support m-t-43 m-l-25 w-80px">
                 {content.featuredTourDessaibrewery.subtile}
                </p>
                <Link to="/tourinfo">
                  <h2 className="seetoursArrow m-t-0 m-l-25  m-t-70" >
                 read more<img src={process.env.PUBLIC_URL + "/images/right_arrow-33.png"} className="m-l-50 widthfixed img-fluid"/>
                  </h2>
                </Link>
              </MDBCol>
               <MDBCol md="6">
                   <img src={process.env.PUBLIC_URL + "/images/brewery/brewery.png"} className="imwidth img-fluid"/>
               </MDBCol>
            </MDBRow>
        </MDBContainer>
        <MDBContainer className="m-t-110">
         <MDBRow>
             <MDBCol md="12">
             <h2 className="main-title m-b-40">
              {content.FindyourTour.title}
             </h2>
             </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer fluid className="map-container w-100-home">
            <MapContainer />
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

        {/* video section*/}
        <MDBContainer fluid className="m-t-189 padding-bottom home-video">
          <VideoSection url={"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"} />
        </MDBContainer>
       {/* footer start here*/}


    </MDBContainer>
    )
  }
}
export default Home;
