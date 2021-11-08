import React from "react";



const FooterHelp = () => {
    return(
        <div className="footer-help">
            <p>Help</p>
            <div className="line footer__line"></div>
            <nav className="footer-nav">
                <a href="#" className="footer-nav__help">faqs + shipping</a>
                <a href="#" className="footer-nav__help">contact</a>
                <a href="#" className="footer-nav__help">terms</a>
                <a href="#" className="footer-nav__help">trade</a>
            </nav>
        </div>
    )
}

export default FooterHelp;