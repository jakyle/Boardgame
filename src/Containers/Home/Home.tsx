import * as React from 'react';
import { Link } from 'react-router-dom';

export interface HomeProps {
}

export interface HomeState {
}

export default class Home extends React.Component<HomeProps, HomeState> {

  render() {
    return (
      <div className="Home">
        <h1>Welcome to this boardgame App</h1>
        <Link to="/board">Go To Board</Link>
      </div>
    );
  }
}
