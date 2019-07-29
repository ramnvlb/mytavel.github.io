/**********************************************************************
* AboutUs component to add Header, Footer
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
import content from '../../localization/content.json';
import '../../style/style.css';
import './AboutUs.css';


class AboutUs extends Component {
  constructor(props) {
      super(props);
      this.state = {
        isOpen: false,
        teams:[
          {
            img: "team.png",
            desc: " “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.”",
          },
          {
            img: "team.png",
            desc: " “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.”",

          },
          {
            img: "team.png",
            desc: " “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.”",

          },
          {
            img: "team.png",
            desc: " “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.”",

          },
        ],

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
                        <MDBCard className="leftSection m-t-30">
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

                    </MDBCol>
                </MDBRow>
              </MDBContainer>
        </MDBContainer>

       <MDBContainer className="about-section">
          <h2 className="about-title m-t-80">
            Authentic Japanese Sake Tour
          </h2>
          <p className="about-subtitle">
              Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem
              aperiam eaque ipsa, quae ab illo inventore veritatis et
              quasi architecto beatae vitae dicta sunt, explicabo. Nemo
              enim ipsam voluptatem, quia voluptas sit, aspernatur aut
              odit aut fugit, sed quia consequuntur magni dolores eos,
              qui ratione voluptatem sequi nesciunt, neque porro quisquam
              est, qui dolorem ipsum, quia dolor sit, amet, consectetur,
               adipisci velit, sed quia non numquam eius modi tempora
               incidunt, ut labore et dolore magnam aliquam quaerat voluptatem.

          </p>
       </MDBContainer>

       <MDBContainer className="w-100-home about-margin">
         <MDBRow>
           <MDBCol md="8" xs="12">
              <img src={process.env.PUBLIC_URL + "images/about.jpg"} className="img-fluid about-img"/>
           </MDBCol>
           <MDBCol md="4" xs="12">
             <div className="about-team-section">
               <div>
                 <h2 className="about-main-title">Our team</h2>
                  <p className="about-desc"> John Daub got a chance to tour Dassai Brewery with the company's CEO, the world's
                      hottest sake brand to get those answers.
                  </p>
                </div>
             </div>
           </MDBCol>
         </MDBRow>
       </MDBContainer>

       <MDBContainer className="testmonial">
            <h2 className="about-main-title about-margin">Testimonials</h2>
            {this.state.teams.map((team, i) =>
              <MDBRow className="our-team">
                <MDBCol md="3">
                <img src={process.env.PUBLIC_URL + "images/team/" +team.img} className="img-fluid team-img"/>
                </MDBCol>
                <MDBCol md="9">
                  <p className="testmonial-desc">
                  {team.desc}
                  </p>
                </MDBCol>
              </MDBRow>
            )}
       </MDBContainer>





    </MDBContainer>
    )
  }
}
export default AboutUs;
