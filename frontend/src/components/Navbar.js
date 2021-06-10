import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-box">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/accomodation">BOOK</Link></li>
        <li><Link to="/activities">ACTIVITIES</Link></li>
        <li><Link to="/about">ABOUT</Link></li> 
      </ul>
    </nav>
  )
}

export default Navbar




// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

// import { GoThreeBars } from 'react-icons/go'


// const Navbar = () => {
//   const [state, setState] = useState({
//     isOpen:false
//   })

  
// const handleToggle = () => {
//     setState({isOpen:!state.isOpen})
//   }

//   return (
//     <nav className="navbar">
//       <div className= "nav-center">
//         <div className= "nav-header">
//           <button type="button" className="nav-btn" onClick={handleToggle}>
//             <GoThreeBars />
//           </button>
        
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar