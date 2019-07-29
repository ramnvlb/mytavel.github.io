import React, {Component} from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter,MDBIcon } from "mdbreact";

import './MainFooter.css';
import content from '../../localization/content.json';

class MainFooter extends Component {

  constructor(props){
    super(props)
  }

render(){
  return(
     <MDBFooter color="blue" className="footerbg">
           <MDBContainer className="text-center pt-117">
                 <MDBRow>
                   <MDBCol md="2">
                       <img src={process.env.PUBLIC_URL + "/images/logo_white/logo_white.png"}/>
                   </MDBCol>
                   <MDBCol md="2">
                       <h2 className="footer-title">
                        {content.footer.company}
                      </h2>
                      <ul className="footer-list">
                          <li className="">
                            <a href="#!">{content.footer.aboutUs}</a>
                          </li>
                          <li className="">
                            <a href="#!">{content.footer.team}</a>
                          </li>
                          <li className="">
                            <a href="#!">{content.footer.testimonials}</a>
                          </li>
                          <li className="">
                            <a href="#!">{content.footer.privacyPolicy}</a>
                          </li>
                      </ul>
                   </MDBCol>
                   <MDBCol md="3">
                   <h2 className="footer-title">
                    {content.footer.topDestinations}
                  </h2>
                  <ul className="footer-list">
                      <li className="">
                        <a href="#!">{content.footer.kyoto} </a>
                      </li>
                      <li className="">
                        <a href="#!">{content.footer.nagoya}</a>
                      </li>
                      <li className="">
                        <a href="#!">{content.footer.sapporo}</a>
                      </li>
                      <li className="">
                        <a href="#!">{content.footer.fukuoka}</a>
                      </li>
                  </ul>
                   </MDBCol>
                   <MDBCol md="2">
                   <h2 className="footer-title">
                    {content.footer.contact}
                  </h2>
                  <ul className="footer-list">
                      <li className="">
                        <a href="#!">{content.footer.sakeWiz}</a>
                      </li>
                      <li className="">
                        <a href="#!">{content.footer.parkLane}</a>
                      </li>
                      <li className="">
                        <a href="#!">{content.footer.toronto}</a>
                      </li>
                      <li className="social-icon">
                        <a href="#" ><MDBIcon fab icon="facebook" /></a>
                        <a href="#"  className="padding-left"><MDBIcon fab icon="youtube" /></a>
                        <a href="#" className="padding-left"><MDBIcon fab icon="instagram" /></a>
                      </li>
                  </ul>
                   </MDBCol>
                 </MDBRow>
           </MDBContainer>
     </MDBFooter>







  )
}

}

export default MainFooter ;
