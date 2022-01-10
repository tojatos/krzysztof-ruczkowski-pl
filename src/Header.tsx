import React from 'react';
import FadeIn from 'react-fade-in';
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
                <FadeIn>
                    <div className="ascii-face"/>
                </FadeIn>
                <FadeIn>
                    <div id="landing-text-inner">
                        <h1>Krzysztof Ruczkowski</h1>
                        <h2>Software / DevOps Engineer</h2>
                        <button onClick={handleClick} className="btn" id="view-work">Check out my portfolio</button>
                    </div>
                </FadeIn>
            </div>
        </header>
)}

export default Header;