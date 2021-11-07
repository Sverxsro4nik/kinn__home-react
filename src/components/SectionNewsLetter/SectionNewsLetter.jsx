import React from "react";

const SectionNewsLetter = () => {
    return(
        <section className="newsletter section-backgroundYellow">
            <h3>Sign up to our newsletter</h3>
            <p>Receive special offers and first look at new products</p>
            <form className="newsletter__form">
                <input type="text" className="newsletter__form-input" />
                <button className="newsletter__form-button">subscribe</button>
            </form>
        </section>
    );
}

export default SectionNewsLetter;