import React from "react";
import MyLink from "../UI/MyLink/MyLink";

const FooterSochial = () => {
    return(
        <div className="footer-sochial">
            <MyLink linkHref="#" linkText linkClass="footer-sochial__item facebook"/>
            <MyLink linkHref="#" linkText linkClass="footer-sochial__item pinterest"/>
            <MyLink linkHref="#" linkText linkClass="footer-sochial__item instagram"/>
        </div>
    );
}

export default FooterSochial;