import React, { Component } from "react";
import {MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBFormInline } from "mdbreact";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import './MainHeader.css';
import content from '../../localization/content.json';
import * as Constants from '../../utils/constants'

class MainHeader extends Component {

  constructor(props){
    super(props)
    this.state = {
      isOpen: false,
      isLoggedIn:false,
      name:"Login"
    };
  }

componentDidMount(){
  let username = localStorage.getItem("name");
  if( typeof username !== "undefined"){
    this.setState({isLoggedIn:true,name:username})
  }
}
toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

logout =()=>{
  localStorage.removeItem("name")
  localStorage.removeItem("userType")
  this.props.history &&  this.props.history.push("/")
}

onBreweries =()=>{
  this.props.history &&  this.props.history.push("/breweries")
}
onProfile =() =>{

  this.props.history &&  this.props.history.push("/profile")
}
onBookings =() =>{

  this.props.history && this.props.history.push("/bookings")
}
onFavorites =() =>{

  this.props.history && this.props.history.push("/favorites")
}

render() {
  let type = localStorage.getItem("userType")
  return (
<MDBContainer className={this.props.loggedIn?"topnavbar":"top-paddin-0"}>
    <MDBNavbar  dark expand="md" className="navbar-color">
      <MDBNavbarBrand>
      <Link to="/">
        <img src={process.env.PUBLIC_URL + "/images/logo_white/logo_white.png"} className="img-fluid"/>
      </Link>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={this.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav>
          <MDBNavItem>
            <MDBNavLink to="/aboutUs">{content.header.aboutUs}</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/tours">{content.header.tours}</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/gallery">{content.header.gallery}</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="aboutUs">{content.header.contact}</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
          <MDBFormInline waves>
             <div className="">
                <input type="search" placeholder={content.header.placeHolder}  className="searchItem"/>
                <button className="searchBtn">{content.header.search}</button>
             </div>
           </MDBFormInline>
          </MDBNavItem>
          <MDBNavItem>

              {
                !this.state.isLoggedIn?
                <span className="mr-2">{content.header.login}</span>
                :
                  <MDBDropdown>
                    <MDBDropdownToggle nav className="login-Dropdown">
                      <span className="mr-2">{this.state.name}</span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem onClick={this.onProfile}>Profile</MDBDropdownItem>
                      <MDBDropdownItem onClick={this.onBookings}>{type === Constants.TYPE_CUSTOMER? "My Bookings":"Bookings"}</MDBDropdownItem>
                      {type === Constants.TYPE_CUSTOMER && <MDBDropdownItem onClick={this.onFavorites}> My Favorites</MDBDropdownItem>}
                      {type == Constants.TYPE_ADMIN && <MDBDropdownItem onClick={this.onBreweries}>Breweries</MDBDropdownItem>}
                      {type == Constants.TYPE_ADMIN && <MDBDropdownItem >Users</MDBDropdownItem>}
                      <MDBDropdownItem  onClick={this.logout}>Logout</MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
                  }

          </MDBNavItem>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <div className="d-none d-md-inline colorDrowdown">
                  <img src={process.env.PUBLIC_URL + "/images/flag_uk/flag_uk.png"} className="p-r"/>EN
                </div>
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem href="#!">
                  <img src={process.env.PUBLIC_URL + "/images/flag_uk/flag_uk.png"} className="changeWidht"/>
                  JP
                 </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
</MDBContainer>
    );
  }

}//end of class

export default MainHeader;
