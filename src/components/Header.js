import './Header.css';
import logo from '../images/logo.png';

import React from "react";
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className="header-container">
            <nav className='navbar navbar-expand-lg'>
                <a href="./" className="navbar-brand logo"><img src={logo} alt></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        </div>
    );
}

export default Header;

