import * as React from 'react';
import GameBoard from './Containers/GameBoard/GameBoard';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <GameBoard />
      </div>
    );
  }
}

export default App;
