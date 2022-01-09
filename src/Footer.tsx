import React from 'react';
import './Footer.sass';

const Footer = ({myEmail} : {myEmail: string}) => {
    return (
        <footer id="main-footer">
            <div className="icons">
                <a href={"mailto:" + myEmail}><i className="icon mail-icon"/></a>
                <a href="https://github.com/tojatos" target="_blank" rel="noreferrer"><i className="icon github-logo"/></a>
                <a href="https://www.linkedin.com/in/krzysztof-ruczkowski/" target="_blank" rel="noreferrer"><i className="icon linkedin-logo"/></a>
            </div>
            <div className="copyright">Favicon made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </footer>
    )
}

export default Footer;