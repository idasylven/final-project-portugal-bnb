import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'

import MapStyles from './MapStyles' //importing the styling

const Map = () => {

  return (
    <>
    <GoogleMap // key info
      defaultZoom={12} //how far you want it to be zoomed
      defaultCenter={{ lat: 37.101910, lng:-8.673240 }} //where you want the center when it loads for the first time (LAGOS)
      defaultOptions={{ styles: MapStyles }} //applying the styling
    />
    <Marker 
      position={{ lat: 37.094990, lng:-8.682140 }} 
      name={'Casa de Shwee'}
      title={'Casa de Shwee'}
      icon={{ url: './assets/icons/home-location.svg', scaledSize: new window.google.maps.Size(50,50)}} //size
    />
    <Marker 
      position={{ lat: 37.091680, lng:-8.667900 }} 
      icon={{ url: './assets/icons/beach-umbrella.svg', scaledSize: new window.google.maps.Size(25,25)}}
    />
    <Marker 
      position={{ lat: 37.103198, lng:-8.646945 }} 
      icon={{ url: './assets/icons/boat.svg', scaledSize: new window.google.maps.Size(25,25)}}
    />
    <Marker 
      position={{ lat: 37.082523, lng:-8.668981 }} 
      icon={{ url: './assets/icons/hiking.svg', scaledSize: new window.google.maps.Size(25,25)}}
    />
     <Marker 
      position={{ lat: 37.079400, lng:-8.691796 }} 
      icon={{ url: './assets/icons/surfing.svg', scaledSize: new window.google.maps.Size(25,25)}}
    />
    </>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map)) //will embed the Google script that it needs to wrap correctly

const CustomMap = () => {
  return (
    <div className="map-container">
      <WrappedMap  //using the wrapped map here
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
        libraries=geometry,drawing,places&key=AIzaSyCOUeTGU1MZnvJOJQel83CGcExArJEW0i4`} 
        loadingElement={<div style={{ height: "100%" }}/>} //props that we need to pass
        containerElement={<div style={{ height: "100%" }}/>} //props that we need to pass
        mapElement={<div style={{ height: "100%" }}/>} //props that we need to pass
      />
    </div>
  )
}

export default CustomMap









//  const markerLabel ='Casa de Shwee'
// label={markerLabel}
// restrict the API key
// Get correct coodrinates for the house