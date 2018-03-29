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
     <div id="input-box" tabIndex="1" className="flex-item" onKeyPress={this._handleKeyPress}>{textToShow}</div>
    );

  }

  _handleKeyPress (event) {
    console.log("aaa");
    console.log(event.key);
    if(event.key == 'Enter'){
      console.log('enter press here! ')
    }
  }
}

export default InputBox;

