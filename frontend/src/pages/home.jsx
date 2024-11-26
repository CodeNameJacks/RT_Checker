import React from 'react'
import Button from 'react-bootstrap/Button'
var img1 = require("../assets/images/mov_img10.jpg");
var img2 = require('../assets/images/mov_img4.jpg');
var img3 = require('../assets/images/mov_img3.jpg');
var img4 = require('../assets/images/mov_img1.jpg');
require("../assets/scss/home.scss");




function Home() {

    return (
        <div>
            
            <div className='intro'>
                <p> &nbsp; </p> {/*temporary place holder line*/}
                <p> Have a propective new tenant? Check their tenant score.</p>
                <p>Looking for a new place to rent? Check their Landlord score.</p>
            </div>
            <div div className='searchButtons'> 
                <p>Let's get started...</p>
                    <Button> Search for a Tenant</Button>
                    <br></br><br></br>
                    <br></br>
                    <Button> Search for a Landlord or Building</Button>
            </div>
           
            <div className = 'homeImages'>
                <img  id='topLeft' src={img1} alt="img1"/>
                <img  id='topRight' src={img2} alt="img2"/>
                <img  id='bottomLeft' src={img3} alt="img3"/>
                <img  id='bottomRight' src={img4} alt="img4"/>
            </div>

            
            
            </div>


    );

}

export default Home;