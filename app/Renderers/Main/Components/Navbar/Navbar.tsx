import * as React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

interface NavbarProps {

}

const Navbar: React.SFC<NavbarProps> = (props) => {
return (
  <div className="Navbar">
    <Link to="/">Home</Link>
    {/* <Link to="/board">Board</Link> */}
    <Link to="/createmap">Create Map</Link>
  </div>
  );
};

export default Navbar;