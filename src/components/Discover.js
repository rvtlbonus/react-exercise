import React,  {useState}  from 'react'
import './Discover.css';
import iphone from './assets/iphone2.png'

function Discover() {

  const [prompt, setPrompt] = useState('');
  const handleChange = event => {
    setPrompt(event.target.value);
  };
  return (
  <>

  <div className="discover"> 
   <div className="discover-container" id="discover">


    <div className="discover-container-2">
      <h1> Tried & Tested Space Management Software</h1>
        <p> Oqulo is a discovergrown app that’s been tested by real-life businesses. Whether you operate on a single building or in multiple locations, Oqulo is designed to make your space leasing operations hassle-free. 
        </p>

        <p> Your clients will have a smooth booking & online payment experience, and your concierge staff will be able to view occupancy stats and generate reports at a click of a button.
        </p>

 
    </div>

    <div className="discover-container-1">
    <img src={iphone} />
    </div>

  </div>
  </div>
  </>
  );
}

export default Discover;
