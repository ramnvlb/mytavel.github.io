import React, {Component} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

import './Favorites.css';




class FavoritesItem extends Component {

  constructor(props){
    super(props);
    this.state= {
      favoritesItem:[
        {
          img:"user_booking.png",
          title:"Dassai Sake Brewery Tour",
          desc:"Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit.",
        },
        {
          img:"user_booking.png",
          title:"Dassai Sake Brewery Tour",
          desc:"Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit.",
        },
        {
          img:"user_booking.png",
          title:"Dassai Sake Brewery Tour",
          desc:"Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit.",
        },
        {
          img:"user_booking.png",
          title:"Dassai Sake Brewery Tour",
          desc:"Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit.",
        },

      ],


    }
  }

  seeTourDetails =()=>{
    this.props.history.push("/tours")
  }

  render(){
    return(
  <MDBContainer className="favorites-item">
  {
    this.state.favoritesItem.map((favorite, i) =>
    <MDBRow>

      <MDBCol md="6">
        <div className="main-section-favorites">
           <div className="favorites-img">
               <img src={process.env.PUBLIC_URL + "/images/user_booking/"+favorite.img} className="img-fluid img-brewry"/>
           </div>
           <div className="favorites-text-section">
                <h2 className="favoriteItem-title">{favorite.title}</h2>
                <p className="favoriteItem-desc">{favorite.desc}</p>
                <div className="admin-btn fa-margin">
                  <MDBIcon icon="trash"  className="fav-remove-icon"/>
                  <a className="fav-remove-btn">remove</a>
                  <button  onClick={this.seeTourDetails} className="fav-edit-btn">detail</button>
                </div>
            </div>
        </div>
      </MDBCol>
      <MDBCol md="6">
        <div className="main-section-favorites">
           <div className="favorites-img">
               <img src={process.env.PUBLIC_URL + "/images/user_booking/"+favorite.img} className="img-fluid img-brewry"/>
           </div>
           <div className="favorites-text-section">
                <h2 className="favoriteItem-title">{favorite.title}</h2>
                <p className="favoriteItem-desc">{favorite.desc}</p>
                <div className="admin-btn fa-margin">
                  <MDBIcon icon="trash"  className="fav-remove-icon"/>
                  <a className="fav-remove-btn">remove</a>
                  <button onClick={this.seeTourDetails} className="edit-btn">detail</button>
                </div>
            </div>
        </div>
      </MDBCol>
      <MDBCol md="12">
          <div className="hr-divider">
          </div>
      </MDBCol>
    </MDBRow>
  )  }
  </MDBContainer>

    )
  }
}

export default FavoritesItem;
