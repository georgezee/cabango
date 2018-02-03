import React from 'react';
import Logo from '../components/Logo';
import WelcomeMessage from '../components/WelcomeMessage';
import LetterBox from '../components/LetterBox';
import Letters from '../utils/Letters';

/**
 * App Component containing all other elements.
 */
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    var user = "Guest";
    var letters = Letters.Generate();
    return (
      <div>
        <Logo/>
        <WelcomeMessage username={user}/>
        <LetterBox letters={letters}/>
      </div>
    );
  }
}
export default App;
