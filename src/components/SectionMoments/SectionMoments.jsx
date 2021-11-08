import React from "react";


import firstSlide from '../../img/first-slide.webp';
import secondSlide from '../../img/second-slide.webp';
import thirdSlide from '../../img/third-slide.webp';
import fourSlide from '../../img/four-slide.webp';


const SectionMoments = () => {
    return(
        <section className="moments section-backgroundYellow">
            <h3>#KinnMoments</h3>
            <div className="moments__gallery">
                <img src={firstSlide} alt="" />
                <img src={secondSlide} alt="" />
                <img src={thirdSlide} alt="" />
                <img src={fourSlide} alt="" />
            </div>
        </section>
    );
}


export default SectionMoments;