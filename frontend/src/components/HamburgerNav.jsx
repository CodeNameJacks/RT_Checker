import Hamburger from 'hamburger-react'
import React, {useState} from 'react'

function HamburgerNav() {

  const [isOpen, setOpen] = useState(false)
    
    return (
      <div>
        <Hamburger onclick={() => setOpen(!isOpen)}></Hamburger>
        
        {isOpen && (
          <> 
            <a href="/">Home</a>
            <a href="/findTenant">Tenant Search</a>
            <a href="/reportTenant"> Report a Tenant</a>
            <a href="/findLandlord">Building/Landlord Search</a>
            <a href="/reportLandlord">Report Building/Landlord</a>
          </>
        )}
      </div>
    );
  }
  
  export default HamburgerNav;
  