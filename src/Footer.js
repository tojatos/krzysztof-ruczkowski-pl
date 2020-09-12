import React from 'react';
import './Footer.sass';

const Footer = ({myEmail}) => {
    return (
        <footer id="main-footer">
            <h3>Skontaktuj się ze mną</h3>
            <p>Email: <a href={"mailto:" + myEmail}><strong>{myEmail}</strong></a></p>
        </footer>
    )
}

export default Footer;