import React from 'react';

const LetterBox = (props) => {
  return (
     <div id="letters" className="flex-item">{props.letters}</div>
  );
}

export default LetterBox;