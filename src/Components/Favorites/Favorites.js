import React, {Component} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

import './Favorites.css';
import AppHeader from '../Header/AppHeader';
import FavoritesItem from './FavoritesItem';



class Favorites extends Component {

  constructor(props){
    super(props);
    this.state= {}
  }

  render(){
  
    return(
  <MDBContainer className="favorites-main-container">

      <MDBContainer className="favorites-text">
        <h2 className="favorites-title">My favorites</h2>
        <p className="favorites-subtitle">favorites</p>
        <div class="divider-booking"></div>
      </MDBContainer>
    <MDBContainer className="favorites-item">
      <FavoritesItem history={this.props.history}/>
   </MDBContainer>
  </MDBContainer>

    )
  }
}

export default Favorites;
