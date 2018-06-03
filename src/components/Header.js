import React from 'react'
import { Link } from 'react-router-dom';
import { logo } from '../plantwiselogo.jpg';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <img src={logo} />
  </header>
)

export default Header;
