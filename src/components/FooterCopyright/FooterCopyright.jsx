import React from "react";
import Line from "../Line/Line";


const FooterCopyright = () => {
    return(
        <div className="footer-copyright">
            <p>&#169; 2021 Kinn Home</p>
            <Line lineClass="footer__line"/>
            <p>Need to get in touch? Just email us at hello@kinnhome.com</p>
        </div>
    )
}

export default FooterCopyright;