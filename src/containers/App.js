import React from 'react';
import Logo from '../components/Logo';
import WelcomeMessage from '../components/WelcomeMessage';
import Letters from '../components/Letters';

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
    return (
      <div>
        <Logo/>
        <WelcomeMessage username={user}/>
        <Letters/>
      </div>
    );
  }
}
export default App;
