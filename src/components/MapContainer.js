import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

  const mapKey='AIzaSyAD7MHA69hha681BwzruPcUXjOG-tl3dmg';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }
  render() {
    const style = {
       width: '100vw',
       height: '75vh',
       'marginLeft': 'auto',
       'marginRight': 'auto'
     }
    return (
      <Map

       style = { style }
       google = { this.props.google }
       onClick = { this.onMapClick }
       zoom = { 10 }
       initialCenter = {{ lat: 34.052235, lng: -118.243683  }}
     >
       <Marker
         onClick = { this.onMarkerClick }
         title = { 'Los Angeles, CA' }
         position = {{ lat: 34.052235, lng: -118.243683}}
         name = { 'Los Angeles Neighborhoods' }
       />
       <InfoWindow
         marker = { this.state.activeMarker }
         visible = { this.state.showingInfoWindow }
       >
             Los Angles, CA Neighborhoods<br />
             This is a street address <br />
             This is a phone number

       </InfoWindow>
     </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (mapKey)
})(MapContainer)
