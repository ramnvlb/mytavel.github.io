import React, {Component} from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import './LoginFooter.css'
import content from '../../../localization/content.json';

class LoginFooter extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

render(){

  return(
    <MDBFooter className="font-small pt-4 mt-4 bg-color-footer">
        <ul className="login-footer">
            <li><a href="#">{content.loginFooter.aboutUs} </a></li>
            <li><a href="#">{content.loginFooter.team} </a></li>
            <li><a href="#">{content.loginFooter.testimonials} </a></li>
            <li><a href="#">{content.loginFooter.privacyPolicy} </a></li>
        </ul>

   </MDBFooter>

  )

}







}
export default LoginFooter;
