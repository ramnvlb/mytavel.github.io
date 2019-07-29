import React, {Component} from 'react';
import {MDBCard, MDBNavbar, MDBBtn,MDBCardBody,MDBInput} from "mdbreact";

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './Login.css'
import content from '../../localization/content.json';
import * as Constants  from '../../utils/constants'


class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  onSubmit=()=>{
    let userName = document.getElementById("username").value;
    let password = document.getElementById("username").value;

    if(userName === "user" && password === "user"){
      localStorage.setItem("userType", Constants.TYPE_CUSTOMER )
      localStorage.setItem("name", userName )
      this.props.history.push("/bookings")
    }else if(userName === "admin" && password === "admin"){
      localStorage.setItem("userType", Constants.TYPE_ADMIN )
      localStorage.setItem("name", userName)
      this.props.history.push("/bookings")
    }else{
      alert("please enter valid login details. To login as a Customer, please enter (user/user) and for Admin, (admin/admin)")
    }

  }

  render(){

    return(
      <MDBCard className="loginForm">
        <MDBCardBody className="login">
             <form>
               <label className="labelTitle">{content.login.userName}</label>
               <input id="username" type="text" placeholder={content.login.placeHolder} className="input" />
               <label className="labelTitle">{content.login.password}</label>
               <input  id="password" type="password" placeholder='Password' className="input" />
               <button onClick={this.onSubmit} className="loginBtn">{content.login.loginBtn}</button>
                 <a  className="forgot-password">{content.login.forgot}</a>

             </form>
        </MDBCardBody>
      </MDBCard>

    )
  }


}
export default Login;
