import React from "react";

const MyGallery = ({gallery}) => {
    return(
        <div className="moments__gallery">
                {
                    gallery.map((img) => {
                        return <img src={img}  alt="" key={img}/>
                    })
                }
            </div>
    );
}

export default MyGallery;