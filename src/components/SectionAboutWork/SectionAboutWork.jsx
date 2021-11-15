import React from "react";
import data from "../../data/works";
import AboutWort from "../AboutWork/AboutWork";

const SectionAboutWork = () => {
    return(
        <section className="about-work">
            {
                data.map((work, key) => {
                    return <AboutWort title = {work.title} text={work.text} src={work.src} key={work.src}/>
                })
            }
        </section>
    );
}

export default SectionAboutWork;


