import React from 'react';
import Logo from '../components/Logo';
import WelcomeMessage from '../components/WelcomeMessage';
import LetterBox from '../components/LetterBox';
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
      <div>
        <Logo/>
        <WelcomeMessage username={user}/>
        <LetterBox letters={this.state.round.letters}/>
      </div>
    );
  }
}
export default App;
