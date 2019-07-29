import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol } from "mdbreact";

import './Profile.css';

class Profile extends Component {

  constructor(props){
    super(props)
    this.state ={}
  }

  render(){
    return(
      <MDBContainer className="profile">
      <h2 className="profile-title">Profile</h2>
      <p className="profile-subtitle">profile</p>
      <div className="hr-divider-bootom"></div>
      <div className="profile-edit">
          <div className="profile-first-name">
            <div class="form-group">
              <label for="first-name" className="profile-label">First Name</label>
              <input type="text" id="first-name" class="form-control profile-input"  placeholder="Francesco"/>
            </div>
          </div>
          <div className="profile-last-name">
            <div class="form-group">
              <label for="last-name" className="profile-label">Last Name</label>
              <input type="text" id="last-name" class="form-control profile-input" placeholder="Manciocchi"/>
            </div>
          </div>
          <div className="profile-email">
            <div class="form-group">
              <label for="first-name" className="profile-label">Email address</label>
              <input type="email" id="first-name" class="form-control profile-input" placeholder="myemail@domain.com"/>
            </div>
          </div>
          <div className="profile-btn">
            <button className="profile-edit-btn edit-btn-m">edit</button>
          </div>
      </div>
      <div className="hr-border-bootom"></div>
      </MDBContainer>
    )
  }
}

export default Profile;
