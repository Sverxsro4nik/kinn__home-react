import React from "react";
import MyLink from "../UI/MyLink/MyLink";

const SectionDescription = () => {
    return(
        <section className="description">
            <p>
               If your happy place is at the dinner table, we totally get that.
                That’s why we created products to help you find slow moments in a fast world. 
            </p>
            <div className="description-links">
                <MyLink linkClass linkHref="#" linkText="Shop All" className="true"/>
                <MyLink linkClass linkHref="#" linkText="Read Stories" className="true"/>
            </div>
        </section>
    );
}

export default SectionDescription;