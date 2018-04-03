import * as React from 'react';
import GameBoard from './Containers/GameBoard/GameBoard';
import { Switch, Route } from 'react-router';
import Home from './Containers/Home/Home';
import Playerpos from './Containers/Playerpos/Playerpos';
import Sidemenu from './Containers/Sidemenu/Sidemenu';

const App = () => (
  <div className="App">
    <Switch>
      <Route exact={true} path="/" component={Home}/>
      <Route path="/board" component={GameBoard}/>
      <Route path="/playerpos" component={Playerpos} />
      <Route path="/files" component={Sidemenu} />
    </Switch>
  </div>
);

export default App;
