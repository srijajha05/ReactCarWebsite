import React from 'react'

function NavigationBar() {
  return (
    <nav className="container">
    <div className="logo">
      <img src="/logo.png.png" alt="logo" />
      
    </div>
    
    <ul>
      <li href="#">Menu</li>
      <li href="#">Location</li>
      <li href="#">About</li>
      <li href="#">Contact</li>
    </ul>

    <button>Login/Register</button>
  </nav>
  )
}

export default NavigationBar
