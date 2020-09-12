import React from 'react';
import './Header.sass';

const Header = () => {
    const handleClick = () => {
        var Scroll   = require('react-scroll');
        var scroller = Scroll.scroller;
        scroller.scrollTo('portfolio', {
            duration: 700,
            smooth: 'easeOutCubic',
        });
    }
    return (
        <header id="landing">
            <div id="landing-text">
                <div className="ascii-face"></div>
                <div id="landing-text-inner">
                    <h1>Krzysztof Ruczkowski</h1>
                    <h2>Software engineer / student</h2>
                    <a onClick={handleClick} className="btn" id="view-work"> Zobacz portfolio </a>
                </div>
            </div>
        </header>
)}

export default Header;