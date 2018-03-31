import React from 'react';
import Guess from '../components/Guess';

const GuessList = (props) => {
  return (
    <div id="guess-list" className="flex-item">
    { 
      Object.keys(props.guesses).map(function(key, index) {
        return (<Guess guess={props.guesses[key]} key={index} />);
      })
    }
     </div>
  );
}

export default GuessList;