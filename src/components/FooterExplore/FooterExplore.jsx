import React from "react";
import Line from "../Line/Line";


const FooterExplore = () => {
    return(
        <div className="footer-explore">
            <p>Explore</p>
            <Line lineClass="footer__line" />
            <nav className="footer-nav">
                <a href="#" className="footer-nav__link">shop</a>
                <a href="#" className="footer-nav__link">style quiz</a>
                <a href="#" className="footer-nav__link">about us</a>
                <a href="#" className="footer-nav__link">stories</a>
            </nav>
        </div>
    );
}


export default FooterExplore;