import React, {useState} from "react";
import "./MapContainer.css";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class Maps extends React.Component {
    render() {
      const mapStyles = {
        width: "100%",
        height: "100%",
      };
      return (
        <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 9.761927, lng: 79.95244 }}
      >
        <Marker position={{ lat: 9.761927, lng: 79.95244 }} />
      </Map>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyDLWGlj075cI30aaroq02xLCUFNQyX24EQ'
  })(Maps);