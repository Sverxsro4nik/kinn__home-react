import React from "react";



function Nav({links, navClass, classLink}){
    return(
        <nav className={navClass}>
            {
                links.map((link) => {
                    return <a href={link.href} key={link.name} className={classLink ? classLink: false}>{link.name}</a>
                })
            }
        </nav>
    );
}

export default Nav;