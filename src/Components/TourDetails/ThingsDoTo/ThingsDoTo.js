import React, {Component} from 'react';
 import { MDBContainer,MDBRow,MDBCol,MDBCard, MDBCardBody} from "mdbreact";
import './ThingsDoTo.css'
class ThingsDoTo extends Component {

  constructor() {
    super()
    this.state = {
      thingsToDo:[
        {
          img:"mount.jpg",
          title:"Mount Fuji"
        },
        {
          img:"Kyoto.jpg",
          title:"Kyoto"
        },
        {
          img:"tokyo.jpg",
          title:"Kyoto"
        },
        {
          img:"tokyo.jpg",
          title:"Tokyo"
        },
        {
          img:"niigata.jpg",
          title:"Niigata "
        },
        {
          img:"tokyo.jpg",
          title:"Sapporo"
        },
      ],

    }
  }

  render(){
    return(

        <MDBRow className="main_things_row">
          { this.state.thingsToDo.map((thingRow, i)=>
            <MDBCol md="4">
              <div className="thing_col">
                   <a>
                     <img src={process.env.PUBLIC_URL + "/images/tour_details/things_to_do/" +thingRow.img} className=" thing_img img-fluid"/>
                  </a>
                  <p className="things_title">{thingRow.title}</p>
              </div>
            </MDBCol>
            )
          }
        </MDBRow>

    )
  }

}

export default ThingsDoTo;
