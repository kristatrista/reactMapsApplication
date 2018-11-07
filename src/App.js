import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import locations from './data/locations.json'
import MapContainer from './components/MapContainer'




class App extends Component {
  state ={
    lat: 34.052235,
    lng: -118.243683,
    zoom: 13,
    all: locations
  }
  render() {
    return (
      <div className="App">
        <header><h1>Los Angeles, CA Neighborhoods</h1></header>
        <MapContainer
        lat={this.state.lat}
        lon={this.state.lon}
        zoom={this.state.zoom}
        locations={this.state.all}

         />
      </div>
    );
  }
}

export default App;
