import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'
import { BiColorFill } from 'react-icons/bi'

import MapStyles from './MapStyles'

const Map = () => {

  const markerLabel ='Casa de Shwee'

  return (
    <>
    <GoogleMap 
      defaultZoom={12}
      defaultCenter={{ lat: 37.101910, lng:-8.673240 }}
      defaultOptions={{ styles: MapStyles }}
    />
    <Marker 
      position={{ lat: 37.101910, lng:-8.673240 }} 
      name={'Casa de Shwee'}
      title={'Casa de Shwee'}
      label={markerLabel}
      icon={{ url: './assets/images/home-location.svg', scaledSize: new window.google.maps.Size(40,40)}}
    />
    {/* <Marker 
      position={{ lat: 37.086680, lng:-8.668900 }} 
      icon={{ url: './assets/images/swimming.svg', scaledSize: new window.google.maps.Size(25,25)}}
    /> */}
    </>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

const CustomMap = () => {
  return (
    <div className="map-container">
      <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
        libraries=geometry,drawing,places&key=AIzaSyCOUeTGU1MZnvJOJQel83CGcExArJEW0i4`} 
        loadingElement={<div style={{ height: "100%" }}/>}
        containerElement={<div style={{ height: "100%" }}/>}
        mapElement={<div style={{ height: "100%" }}/>}
      />
    </div>
  )
}

export default CustomMap

// hide the API key
// Get correct coodrinates for the house
// ${process.env.REACT_APP_GOOGLE_KEY}