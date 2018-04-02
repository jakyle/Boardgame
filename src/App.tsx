import * as React from 'react';
import GameBoard from './Containers/GameBoard/GameBoard';
import { Switch, Route } from 'react-router';
import Home from './Containers/Home/Home';
import Playerpos from './Containers/Playerpos/Playerpos';

const App = () => (
  <div className="App">
    <Switch>
      <Route exact={true} path="/" component={Home}/>
      <Route path="/board" component={GameBoard}/>
      <Route path="/playerpos" component={Playerpos} />
    </Switch>
  </div>
);

export default App;
