import React from 'react'

import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-details-wrapper">
        <p className="footer-details">Estrada de Porto de Mos</p>
        <p className="footer-details">Lagos 8600-513 Portugal</p>
        <p className="footer-details">+35 1 282 771 800</p>
        <p className="footer-details">info@casadeshwee.com</p>
      </div>
      <div className="footer-copy-wrapper">
        <p className="footer-copy"><span className="copy-symbol">&#169;</span>Casa de Shwee</p>
      </div>
    </footer>
  )
}

export default Footer
