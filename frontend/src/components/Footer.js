import React from 'react'
import { RiFacebookFill } from 'react-icons/ri'
import { GrInstagram } from 'react-icons/gr'

import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer-container">
        <div className="footer-loggo">
          <p className="footer-loggo-text">CASA DE SHWEE</p>
        </div>
        <div className="footer-some-container">
          <div className="some-icons">
            <a className="some-links" href="https://www.instagram.com/"><GrInstagram /></a>
            <a className="some-links" href="https://www.facebook.com/"><RiFacebookFill /></a>
          </div>
        </div>
        <div className="footer-details-container">
          <p className="footer-details">Estrada de Porto de Mos</p>
          <p className="footer-details">Lagos 8600-513 Portugal</p>
          <p className="footer-details">+35 1 282 771 800</p>
          <p className="footer-details">info@casadeshwee.com</p>
        </div>
        <p className="footer-copy"><span className="copy-symbol">&#169;</span>Casa de Shwee</p>
    </footer>
  )
}

export default Footer
