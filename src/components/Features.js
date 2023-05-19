import React from 'react'
import screen from './assets/screen.png';
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import icon3 from './assets/icon3.png';
import icon4 from './assets/icon4.png';
import './Features.css';

function Features() {
    return (
    <div className="features" >

        <div className="features-container pagepadding">
         <div className="features-text ">
            <h1> Oqulo Features at a Glance </h1>
            <p> Powerful functionalities that changes the way you do business. </p> 
         </div>
         <div className="features-content ">

                <div className="features-content-col">
                    <div className="features-content-row">
                        <div className="features-content-row-text">
                        <h2> Powerful Space Management </h2>
                        <p> Manage meeting room and desk bookings, create events, sell tickets, schedule private office showings, automate invoicing and connect with members --- all in one central dashboard. </p>
                        </div>
                        <img src={icon1} />
                    </div>
                    <div className="features-content-row">
                        <div className="features-content-row-text">
                        <h2> Painless Integration </h2>
                        <p> No matter what your website is built on, Oqulo is easy to setup and integrate with CRM and payment gateways. Go live in a matter of days. </p>
                        </div>
                        <img src={icon2} />
                    </div>                    
                </div>
                <div className="features-content-col">
                    <img src={screen} />
                </div>
                <div className="features-content-col">
                     <div className="features-content-row2">
                    <img src={icon3} />
                        <div className="features-content-row-text">
                        <h2> User-Friendly Interface </h2>
                        <p> Clients will find it easy to book and pay for their space, thanks to Oqulo’s easy navigation and pixel-perfect design. Keep members up to date with Oqulo’s community board and help desk features. </p>
                        </div>
                    </div>                    
                    <div className="features-content-row2">  
                     <img src={icon4} />
                         <div className="features-content-row-text">                                         
                            <h2> Secure Data & White Label Branding </h2>
                            <p> Get peace of mind in knowing that client information and sales data are stored in a secure server. Our white label service allows you to market this platform as your own. </p>
                        </div>
                    </div>                    
                </div>


         </div>

        </div>
    </div>
 
);
}

export default Features; 