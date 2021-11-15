import React from "react";
import MyGallery from "../UI/MyGallery/MyGallery";
import gallery from '../../data/gallery';


const SectionMoments = () => {
    return(
        <section className="moments section-backgroundYellow">
            <h3>#KinnMoments</h3>
            <MyGallery gallery={gallery}/>
        </section>
    );
}


export default SectionMoments;