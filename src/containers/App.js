import React from 'react';
import Logo from '../components/Logo';
import WelcomeMessage from '../components/WelcomeMessage';
import RoundStage from '../components/RoundStage';
import LetterBox from '../components/LetterBox';
import GuessList from '../components/GuessList';
import InputBox from '../components/InputBox';
import Letters from '../utils/Letters';
import fire from '../utils/fire';

/**
 * App Component containing all other elements.
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      round: {
        letters: Letters.Generate(),
        guesses: [],
        stage: 'guess',
        input: '',
      }
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.roundTick(),
      5000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  roundTick() {
    // TODO: Change to Voting stage.
    const round = this.state.round;
    round.letters = Letters.Generate();
    round.stage = 'guess';
    this.setState({
      round,
    });
    this._getGuesses();
  }

  render() {
    var user = "Guest";
    return (
      <div id="key-block" tabIndex="1" onKeyDown={this._handleKeyDown.bind(this)}>
        <div id="main">
          <Logo/>
          <WelcomeMessage username={user}/>
          <LetterBox letters={this.state.round.letters}/>
          <GuessList guesses={this.state.round.guesses} onClick={this._handleClick.bind(this)}/>
          <InputBox input={this.state.round.input}/>
          <RoundStage stage={this.state.round.stage}/>
        </div>
      </div>
    );
  }

  _getGuesses() {
    var UCRef = fire.database().ref("guesses");
    UCRef.on('value', snapshot => {
      const round = this.state.round;
      //console.log(snapshot.val());
      round.guesses = snapshot.val();
      this.setState({
        round,
      });
    });
  }

  _handleClick (event) {
    console.log("clicked");
    console.log(event);
    console.log(event.target);
    let guessID = event.target.id;
    let response = fire.database().ref('votes').push( guessID );
  }

  _handleKeyDown (event) {

    //console.log(round);
    //console.log(event.key);

    // Copy the state.
    const round = this.state.round;

    var keyCode = String.fromCharCode(event.keyCode);
    // Only allow printable characters.
    if (/[a-zA-Z0-9-_ ]/.test(keyCode)) {
    //if (/^[\u0020-\u007e\u00a0-\u00ff]*$/.test(keyCode)) {
      round.input = round.input + event.key;
    } else {
      // Handle other types of keypresses.
      switch (event.key) {
        case "Enter":
          console.log("Submitting ....");
          let response = fire.database().ref('guesses').push( round.input );
          console.log(response);
          round.input = '';
          break;
        case "Backspace":
        case "Delete":
          console.log("Deleting...");
          round.input = round.input.slice(0,-1);
          break;
        default:
          console.log("Key not handled: " + event.key);
      }
    }

    console.log(round);
    // update state
    this.setState({
        round,
    });
  }
}
export default App;
