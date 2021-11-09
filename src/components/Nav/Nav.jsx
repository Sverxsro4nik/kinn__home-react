import React from "react";



function Nav({links, navClass}){
    return(
        <nav className={navClass}>
            {
                links.map((link) => {
                    return <a href={link.href} key={link.name}>{link.name}</a>
                })
            }
        </nav>
    );
}

export default Nav;