import React from "react";
import MyButton from "../UI/MyButon/MyButton";
import MyInput from "../UI/MyInput/MyInput";

const SectionNewsLetter = () => {
    return(
        <section className="newsletter section-backgroundYellow">
            <h3>Sign up to our newsletter</h3>
            <p>Receive special offers and first look at new products</p>
            <form className="newsletter__form">
                <MyInput/>
                <MyButton/>
            </form>
        </section>
    );
}

export default SectionNewsLetter;