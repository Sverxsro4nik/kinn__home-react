import React from "react";
import Line from "../Line/Line";

const AboutWort = ({title, text, src}) => {
    return(
        <div className="about-work__element section-backgroundYellow">
                <img src={src} alt=""/>
                <div className="about-work__element__text">
                    <h4>{title}</h4>
                    <Line lineClass="line"/>
                    <p>
                        {text}
                    </p>
                </div>
        </div>
    )
}

export default AboutWort;