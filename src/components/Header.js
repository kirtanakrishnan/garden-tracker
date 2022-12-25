import React from 'react';


function Header({ totalItems }) {
  return (
    <header>
        <h1>Garden Tracker</h1>
        <div className="total-items">Total Items: {totalItems}</div>
        

    </header>
    
  )
}

export default Header