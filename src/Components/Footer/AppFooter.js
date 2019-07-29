import React, {Component} from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter,MDBIcon } from "mdbreact";

import MainFooter from './MainFooter'
import './MainFooter.css';
import LoginFooter from './LoginFooter/LoginFooter'

class AppFooter extends Component {

  constructor(props){
    super(props)
  }

render(){
  return(
  <MDBContainer className="footer-width-100">
    {
      this.props.loggedIn?
      <LoginFooter/>
      :<MainFooter/>
    }
  </MDBContainer>
  )
}

}

export default AppFooter ;
