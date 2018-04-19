import React from 'react';
import Guess from '../components/Guess';

const GuessList = (props) => {
  return (
    <div id="guess-list" className="flex-item">
    { 
      Object.keys(props.guesses).map(function(key, index) {
        return (<Guess guessID={key} guess={props.guesses[key]} onClick={props.onClick} key={index} />);
      })
    }
     </div>
  );
}

export default GuessList;