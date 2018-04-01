import * as React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="Home">
    <h1>Welcome to this boardgame App</h1>
    <Link to="/board">Go To Board</Link>
  </div>
);

export default Home;
