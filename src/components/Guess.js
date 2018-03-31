import React from 'react';

const Guess = (props) => {
  return (
     <div className="guess flex-item">{props.guess}</div>
  );
}

export default Guess;