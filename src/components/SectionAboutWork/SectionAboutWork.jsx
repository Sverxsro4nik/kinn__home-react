import React from "react";
import design from "../../img/design.webp";
import table from "../../img/table.webp";

const SectionAboutWork = () => {
    return(
        <section className="about-work">
            <div className="about-work__element section-backgroundYellow">
                <img src={design} alt=""/>
                <div className="about-work__element__text">
                    <h4>Our Design Story</h4>
                    <div className="line"></div>
                    <p>
                        We believe in thoughtful, intentional living. So we promise not to clutter your cabinets
                        with one-off pieces you’ll rarely use.
                        Our collection only includes items you’ll reach for every day.
                        Because mindful living should be simple, not stressful.
                    </p>
                </div>
            </div>
            <div className="about-work__element section-backgroundYellow">
                <img src={table} alt=""/>
                <div className="about-work__element__text">
                    <h4>Your Table Your Time</h4>
                    <div className="line"></div>
                    <p>
                        Our modern lives keep us in constant motion.
                        But what keeps us moving isn’t always what moves us.
                        Our time at the table is our pause button. Meals can become moments and moments can become memories.
                        So grab a plate, pull up a seat, and stay a while
                    </p>
                </div>
            </div>
        </section>
    );
}

export default SectionAboutWork;


