import Hamburger from 'hamburger-react'
import React, {useState} from 'react'
require("../assets/scss/hamburgerNav.scss");


function HamburgerNav() {

  const [isOpen, setOpen] = useState(false)
    
    return (
      <div>
        <button> Login</button>
        <Hamburger toggled={isOpen} toggle={setOpen}></Hamburger>
        
        {isOpen && (
          <> 
            <ul className = 'navlist'>
              <li><a href="/">Home</a></li>
              <li><a href="/findTenant">Tenant Search</a></li>
              <li><a href="/reportTenant"> Report a Tenant</a></li>
              <li><a href="/findLandlord">Building/Landlord Search</a></li>
              <li><a href="/reportLandlord">Report Building/Landlord</a></li>
            </ul>
          </>
        )}
      </div>
    );
  }
  
  export default HamburgerNav;
  