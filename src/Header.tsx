import React from 'react';
import './Header.sass';

const Header = () => {
    const handleClick = () => {
        const Scroll = require('react-scroll');
        const scroller = Scroll.scroller;
        scroller.scrollTo('portfolio', {
            duration: 700,
            smooth: 'easeOutCubic',
        });
    }
    return (
        <header id="landing">
            <div id="landing-text">
                <div className="ascii-face"/>
                <div id="landing-text-inner">
                    <h1>Krzysztof Ruczkowski</h1>
                    <h2>Software / DevOps Engineer</h2>
                    <button onClick={handleClick} className="btn" id="view-work">Check out my portfolio</button>
                </div>
            </div>
        </header>
)}

export default Header;