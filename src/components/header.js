import React from 'react';
import "../styles/header.css"

function Header({ children }) {
  return (
    <div className="header-container">
        <div>
            <span className="header-name">Phoenix Ouyang</span>
        </div>
        {children}
    </div>
  );
}

export default Header;
