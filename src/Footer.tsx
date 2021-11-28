import React from 'react';
import './Footer.sass';

const Footer = ({myEmail} : {myEmail: string}) => {
    return (
        <footer id="main-footer">
            <div className="contact">
                <h3>Skontaktuj się ze mną</h3>
                <p>Email: <a href={"mailto:" + myEmail}><strong>{myEmail}</strong></a></p>
            </div>
            <div className="copyright">Favicon made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </footer>
    )
}

export default Footer;