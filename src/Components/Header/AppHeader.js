import React, {Component} from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter,MDBIcon } from "mdbreact";

import MainHeader from './MainHeader'
// import LoginHeader from './LoginHeader/LoginHeader'

class AppHeader extends Component {

  constructor(props){
    super(props)
  }

render(){
  return(
  <MDBContainer className="main-header">
    <MainHeader history ={this.props.history}/>
  </MDBContainer>
  )
}

}

export default AppHeader ;
