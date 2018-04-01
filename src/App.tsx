import * as React from 'react';
import GameBoard from './Containers/GameBoard/GameBoard';
import { Switch, Route } from 'react-router';
import Home from './Components/Home/Home';

const App = () => (
  <div className="App">
    <Switch>
      <Route exact={true} path="/" component={Home}/>
      <Route path="/board" component={GameBoard}/>
    </Switch>
  </div>
);

export default App;
