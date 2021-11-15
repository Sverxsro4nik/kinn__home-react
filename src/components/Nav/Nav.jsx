import React from "react";
import MyLink from "../UI/MyLink/MyLink";



function Nav({links, navClass, classLink}){
    return(
        <nav className={navClass}>
            {
                links.map((link) => {
                    return <MyLink linkHref={link.href} linkClass={classLink} linkText={link.name} key={link.name}/>
                })
            }
        </nav>
    );
}

export default Nav;