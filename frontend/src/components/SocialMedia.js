import React from 'react'
import { RiFacebookFill } from 'react-icons/ri'
import { GrInstagram } from 'react-icons/gr'

import './SocialMedia.css'

const SocialMedia = () => {
  return (
      <div className="social-media-icons">
        <a className="social-media-links" href="https://www.instagram.com/"><GrInstagram /></a>
        <a className="social-media-links" href="https://www.facebook.com/"><RiFacebookFill /></a>
      </div>
  )
}

export default SocialMedia
