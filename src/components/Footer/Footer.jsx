import React from "react";
import FooterCopyright from "../FooterCopyright/FooterCopyright";
import FooterExplore from "../FooterExplore/FooterExplore";
import FooterHelp from "../FooterHelp/FooterHelp";
import FooterSochial from "../FooterSochial/FooterSochial";


const Footer = () => {
    return(
        <footer className="footer justyfy-content-spaceBtw flex">
            <FooterCopyright/>
            <FooterExplore/>
            <FooterHelp/>
            <FooterSochial/>
        </footer>
    )
}

export default Footer;