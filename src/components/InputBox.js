import React from 'react';

class InputBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let textToShow = "Start typing ...";
    if (this.props.input) {
      textToShow = this.props.input;
    }

    return (
     <div id="input-box" className="flex-item">{textToShow}</div>
    );

  }
}

export default InputBox;

