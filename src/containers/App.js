import React from 'react';
import Logo from '../components/Logo';
import WelcomeMessage from '../components/WelcomeMessage';
import RoundStage from '../components/RoundStage';
import LetterBox from '../components/LetterBox';
import InputBox from '../components/InputBox';
import Letters from '../utils/Letters';

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
    this.setState({
      round: {
        letters: Letters.Generate(),
        stage: 'guess',
      }
    });
  }

  render() {
    var user = "Guest";
    return (
      <div id="main">
        <Logo/>
        <WelcomeMessage username={user}/>
        <LetterBox letters={this.state.round.letters}/>
        <InputBox input={this.state.round.input}/>
      </div>
    );
  }
}
export default App;
