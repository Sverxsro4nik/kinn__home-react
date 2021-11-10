import React from "react";


const SectionMoments = () => {
    return(
        <section className="moments section-backgroundYellow">
            <h3>#KinnMoments</h3>
            <div className="moments__gallery">
                <img src={process.env.PUBLIC_URL + '/image/first-slide.webp'} alt="" />
                <img src={process.env.PUBLIC_URL + '/image/second-slide.webp'} alt="" />
                <img src={process.env.PUBLIC_URL + '/image/third-slide.webp'} alt="" />
                <img src={process.env.PUBLIC_URL + '/image/four-slide.webp'} alt="" />
            </div>
        </section>
    );
}


export default SectionMoments;