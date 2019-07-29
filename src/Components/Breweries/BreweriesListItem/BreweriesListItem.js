import React, {Component} from 'react';

import {
MDBContainer,MDBRow,MDBCol,MDBCard, MDBNavbar, MDBBtn, MDBNavbarBrand, MDBNavbarNav,
MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline  ,
MDBDropdown,MDBCardBody,MDBInput, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,MDBIcon,
MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter,
} from "mdbreact";

import './BreweriesListItem.css';
import * as Constants from '../../../utils/constants'

const BREWERY_LIST = "breweryList"
const ADMIN_BREWERY = "adinBrewery"

class BreweriesListItem extends Component {

  constructor(props){
    super(props)
    this.state ={
     bookingStep: true,
     breweries: [
       { img:"first-step.png",
        label: "aichi prefecture",
        title: "Dassai Sake Brewery",
        desc:  "Japanese sake.  Let's go on an adventure across Japan to learn about the country's official drink. Dassai only makes Junmai Daiginjo sake, the highest quality, and if you want to understand sake, start with the best…",
     },

     { img:"first-step.png",
      label: "aichi prefecture",
      title: "Dassai Sake Brewery",
      desc:  "Japanese sake.  Let's go on an adventure across Japan to learn about the country's official drink. Dassai only makes Junmai Daiginjo sake, the highest quality, and if you want to understand sake, start with the best…",
       },

       {img:"first-step.png",
        label: "aichi prefecture",
        title: "Dassai Sake Brewery",
        desc:  "Japanese sake.  Let's go on an adventure across Japan to learn about the country's official drink. Dassai only makes Junmai Daiginjo sake, the highest quality, and if you want to understand sake, start with the best…",
      },

      {img:"first-step.png",
       label: "aichi prefecture",
       title: "Dassai Sake Brewery",
       desc:  "Japanese sake.  Let's go on an adventure across Japan to learn about the country's official drink. Dassai only makes Junmai Daiginjo sake, the highest quality, and if you want to understand sake, start with the best…",
     },


   ],


    }

  }
  adminBreweryListBtn = () =>{

      if( this.props.type  === Constants.TYPE_CUSTOMER)
      return(

       <div className="brewery-btn">
         <button>see details</button>
         <button>book this tour</button>
       </div>

     );
      else {
        return(
          <div className="admin-btn">
            <MDBIcon icon="trash"  className="remove-icon"/>
            <a className="remove-btn">remove</a>
            <button className="edit-btn">edit</button>
          </div>
        )
      }
  }

render(){
    return(
  <MDBContainer className="breweries-list-item">
    {
      this.state.breweries.map(brewery =>
        <MDBRow>
          <MDBCol md="3">
            <img src={process.env.PUBLIC_URL + "/images/tour_details/booking/"+brewery.img} className="img-fluid img-brewry"/>
          </MDBCol>
          <MDBCol md="9">
            <p className="brewery-label">{brewery.label}</p>
            <h2 className="brewery-title">{brewery.title}</h2>
            <p className="brewery-desc">{brewery.desc}</p>
               {
                 this.adminBreweryListBtn()
               }

          </MDBCol>
          <MDBCol md="12">
              <div className="hr-divider">
              </div>
          </MDBCol>
        </MDBRow>

      )
  }



  </MDBContainer>

  )
}




}

export default BreweriesListItem;
