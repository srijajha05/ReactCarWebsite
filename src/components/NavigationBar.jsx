import React from 'react'

function NavigationBar() {
  return (
    <nav className="container">
    <div className="logo">
      <img src="/logo.png" alt="logo" />
      
    </div>
    
    <ul>
      <li href="#">Become A Renter</li>
      <li href="#">Rental Deals</li>
      <li href="#">How It Works</li>
      <li href="#">Why Choose Us</li>
      <li href="#">Contact Us</li>
    </ul>

    <button>Login/Register</button>
  </nav>
  )
}

export default NavigationBar
