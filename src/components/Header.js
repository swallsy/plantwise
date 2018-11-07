import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../plantwise_logo.svg';

// The Header creates links that can be used to navigate
// between routes.

class Header extends Component {
    render() {
        return (
            <header>
              <img src={logo}/>
            </header>
        )
    }
}

export default Header;
