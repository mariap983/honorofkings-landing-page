import React from 'react'

import './header.scss'

import { logo } from '../../assets/images'

/* The code below is a React component that renders the header of our website. 
It contains an image and some links to other pages on the site. The logo has been 
imported from another file, as well as a CSS stylesheet for styling this component. */

const Header = () => {
    return (
        <div className="header">
            <div className="header__inner container">
                <div className="header__logo">
                    <img src={logo} alt="" />
                </div>
                <ul className="header__nav">
                    <li><a href="#">overview</a></li>
                    <li><a href="#">champions</a></li>
                    <li><a href="#">news</a></li>
                    <li><a href="#">support</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header