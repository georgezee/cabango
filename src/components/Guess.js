import React from 'react';

const Guess = (props) => {
  return (
     <div id={props.guessID} className="guess" onClick={props.onClick}>{props.guess}</div>
  );
}

export default Guess;