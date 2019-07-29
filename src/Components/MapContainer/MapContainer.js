import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker, WithGoogleMap, GoogleMap, InfoWindow } from 'google-maps-react';
import { MDBContainer} from
"mdbreact";
import './MapContainer.css';
const mapStyles = {
width: '100%',
height:'711px'

}
const iconUrl= "images/ico-marker/ico-marker.png"
 // const iconSize = new google.maps.Size(32, 32)

 class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [{lat: 34.209943, lng: 135.236607},
              {latitude: 34.229943, longitude: 135.336607},
              {latitude: 34.129943, longitude: 135.336607},
            ],
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
    }

  }
  onMapClicked = (props) => {
if (this.state.showingInfoWindow) {
this.setState({
showingInfoWindow: false,
activeMarker: null
})
}
};
  onMarkerClick = (props, marker, e) =>
  this.setState({
  selectedPlace: props,
  activeMarker: marker,
  showingInfoWindow: true
  });

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     name={'Current location'}
     icon = {{ url: iconUrl}}


     onClick={this.onMarkerClick}/>
    })
  }

  render() {
    return (

        <Map
          google={this.props.google}
          zoom={10}
          style={mapStyles}
          initialCenter = {{ lat: 34.409943, lng: 135.336607}}
          streetViewControl = {false}
          fullscreenControl = {false}
          mapTypeControl = {false}
          onClick={this.onMapClicked}
        >
          {this.displayMarkers()}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            <div className="userInformation">
               <p className="user-title">Dassai Brewery</p>
               <p className="user-subtitle">Dassai only makes Junmai Daiginjo sake, the highest quality…
               </p>
               <span className="tour-details"> tour details <img src={process.env.PUBLIC_URL + "/images/icons8-right-arrow-28.png"} className="m-l-10"/></span>
            </div>
            </InfoWindow>
        </Map>

    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyA-Jya7t91w9xqmZmjmQyJ82qDEdi1hZpw'
})(MapContainer);
