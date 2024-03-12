import { useState } from 'react'

export const Lightbulb = () => {
  // Initialize the state for on/off
  const [toggle, setToggle] = useState('lightbulb off')
  

  const toggleLight = () => {
    // Toggle the on/off state 
    console.log("Clicked");
    if (toggle === 'lightbulb off') {
    setToggle('lightbulb on')
  } else {
    setToggle('lightbulb off')
  }
  };

  return (
    <div className="lightbulb-container">
      <div className={toggle} onClick={toggleLight}>
        <div className="bulb"></div>
      </div>
    </div>
  );
};

