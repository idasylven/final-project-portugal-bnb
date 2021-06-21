import React from 'react'

import Map from '../components/Map'

import './About.css'

const About = () => {
  return (
    <div>
      Hello from About!
      <div className="map-container">
      <Map />
      </div>
    </div>
  )
}

export default About

//       <iframe 
// title="map"
// width="520" 
// height="400" 
// frameborder="0" 
// scrolling="no" 
// marginheight="0" 
// marginwidth="0" 
// id="gmap_canvas" 
// src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Rua%20Jos%C3%A9%20Vieira%2026%20Lagos+(Casa%20de%20Shwee)&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
// </iframe> 
// <a href='http://mapseinbindung.com/'>google map einbinden</a> 
// <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=51e8f91ae4e8b6a228d26f6f1dd5aa4d302df982'></script>