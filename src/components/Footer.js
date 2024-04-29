import './Footer.css';

import React from "react";
import { Link } from 'react-router-dom';

import logo from '../images/logo.png';

function Footer() {
    return(
        <div className='footer fluid-container'>
            <div className='footer-links'>
                <div className='logo'><a href='./'><img src={logo} alt></img> </a> </div>
                <nav className='footer-nav'>
                    <ul className='shortcut-links'>
                        <li><a href="./">About Us</a></li>
                        <li><a href="./">Disclaimer</a></li>
                        <li><a href="./">Privacy Policy</a></li>
                        <li><a href="./">Terms Condition</a></li>
                        <li><a href="./">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
            <div className='footer-copyright'>
                    <p>
                        &copy; Copyright 2024 Check N Mate All Rights Reserved
                    </p>
            </div>    
        

        </div>

    );


}

export default Footer;