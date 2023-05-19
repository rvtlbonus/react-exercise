import React,  {useState}  from 'react'
import Navbar from './Navbar';
import './Home.css';
import iphone from './assets/iphone.png'

function Home() {

  const [prompt, setPrompt] = useState('');
  const handleChange = event => {
    setPrompt(event.target.value);
  };
  return (
  <>

  <div className="home"> 
    <Navbar />
   <div className="home-container " id="home">
    <div className="home-container-1">
      <img src={iphone} />
    </div>

    <div className="home-container-2">
      <h1> The Only Platform You’ll Need to Run Smart Coworking Spaces & Serviced Offices </h1>
        <p> Oqulo is built to sell, manage and grow your commercial real estate business.
          Collect payments, manage clients and run reports using our booking app. 
          Engage members using our community messaging feature. </p>

        
        <p> Be the first in line to take Oqulo for a test drive!</p>
      
      <div className="home-container-2__input">
        <input type="email" placeholder="Email Address" />
        <button type="button">Notify Me</button>
      </div>
      <div className="home-container-3">
        <p className="warning"> *No Spam, that's a promise. </p>
      </div>

 
    </div>

  </div>
  </div>
  </>
  );
}

export default Home;
