import React from 'react';

const WelcomeMessage = (props) => {
  return (
     <p id="welcome" className="flex-item">Welcome {props.username}, guess what the letters below stand for.</p>
  );
}

export default WelcomeMessage;

