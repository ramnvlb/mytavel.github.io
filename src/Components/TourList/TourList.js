import React, {Component} from 'react';
import { MDBContainer,MDBRow,MDBCol, MDBIcon} from "mdbreact";

import ListView  from './ListView/ListView'
import MapContainer  from '../MapContainer/MapContainer'

import './TourList.css';

class TourList extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return(
  <MDBContainer className="tour-list-main-container">
      <MDBContainer className="tour-list-container">
        <MDBRow>
          <MDBCol md="5" className="custome-tour-list">
             <h2 className="tour-title">Sake Breweries Tours</h2>
          </MDBCol>
          <MDBCol md="7" className="custome-tour-list">
             <div className="select-list-container">
                <div className="list-perfecture">
                    <select className="select-list-view">
                      <option>
                        Select Prefecture
                      </option>
                    </select>
                </div>
                <div className="list-brewerie">
                    <select className="select-list-view">
                      <option>
                        Select Prefecture
                      </option>
                    </select>
                </div>
                <div className="list-view">
                  <a href="#" className="list-btn">List view <MDBIcon icon="th-large" /></a>
                </div>
                <div className="map-view">
                 <a href="#" className="map-btn">Map view <MDBIcon far icon="map" /></a>
                </div>
             </div>
          </MDBCol>
        </MDBRow>
        <div className="list-view-items">
            <ListView/>
        </div>
      </MDBContainer>


</MDBContainer>


    )
  }

}
export default TourList;
