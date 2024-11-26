import Hamburger from 'hamburger-react'
import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import {i18n} from 'react'
require("../assets/scss/hamburgerNav.scss");


function HamburgerNav() {

  const [isOpen, setOpen] = useState(false)
    
    return (
      <div>
        <div className="navContainer">
          <Hamburger className='burgernav' toggled={isOpen} toggle={setOpen}></Hamburger>
          <p> Welcome Home </p>
          <Button variant="light"> Login</Button>
        </div>
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
  