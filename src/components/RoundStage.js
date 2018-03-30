import React from 'react';
import { Provider } from 'react-redux';

const RoundStage = (props) => {
  return (
    <div id='round-stage'>
      {props.stage}
    </div>

  );
}

export default RoundStage;
