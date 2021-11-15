import React from "react";


const MyLink  = ({linkText, linkClass, linkHref}) => {
    return(
        <a href={linkHref} className={linkClass}>{linkText}</a>
    );
}

export default MyLink;