import React from 'react'
import { RiFacebookFill } from 'react-icons/ri'
import { GrInstagram } from 'react-icons/gr'

import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-small-view">
        <div className="footer-loggo">
          <p className="footer-loggo-text">CASA DE SHWEE</p>
        </div>
        <div className="footer-some-container">
          <div className="footer-some-icons">
            <a className="footer-some-links" href="https://www.instagram.com/"><GrInstagram /></a>
            <a className="footer-some-links" href="https://www.facebook.com/"><RiFacebookFill /></a>
          </div>
        </div>
        <div className="footer-details-container">
          <p className="footer-details">Estrada de Porto de Mos</p>
          <p className="footer-details">Lagos 8600-513 Portugal</p>
          <p className="footer-details">+35 1 282 771 800</p>
          <p className="footer-details">info@casadeshwee.com</p>
        </div>
        <p className="footer-copy"><span className="copy-symbol">&#169;</span>CASA DE SHWEE</p>
      </div>
      <div className="footer-big-view">
        <div className="address-loggo-container">
          <div className="address-container">
            <p className="address-big">+35 1 282 771 800</p>
            <p className="address-small">info@casadeshwee.com</p>
          </div>
          <div className="footer-loggo-big">
          <p className="footer-loggo-text-big">CASA DE SHWEE</p>
        </div>
          <div className="address-container">
            <p className="address-big">Estrada de Porto de Mos</p>
            <p className="address-small">Lagos 8600-513 Portugal</p>
          </div>
        </div>
        <div className="footer-big-some-container">
          <div className="footer-big-some-icons">
            <a className="footer-big-some-links" href="https://www.instagram.com/"><GrInstagram /></a>
            <a className="footer-big-some-links" href="https://www.facebook.com/"><RiFacebookFill /></a>
          </div>
        </div>
        <p className="footer-copy"><span className="copy-symbol">&#169;</span>CASA DE SHWEE</p>
      </div>
    </footer>
  )
}

export default Footer
