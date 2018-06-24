import * as React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';
import Home from './Home/Home';
import GameBoard from './GameBoard/GameBoard';
import Playerpos from './Playerpos/Playerpos';
import CreateMap from '../Components/CreateMap/CreateMap';
import Navbar from '../Components/Navbar/Navbar';

const App = () => (
  <div className="App">
    <Navbar />
    <div className="App-Main">
      <Switch>
        <Route exact={true} path="/" component={Home}/>
        <Route path="/board" component={GameBoard}/>
        <Route path="/playerpos" component={Playerpos} />
        <Route path="/createmap" component={CreateMap} />
      </Switch> 
    </div>
  </div>
);

export default App;
