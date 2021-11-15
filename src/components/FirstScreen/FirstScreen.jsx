import React from "react";
import ButtonLink from "../UI/ButtonLink/ButtonLink";
 function FirstScreen(){
     return(
        <section className="first__screen screen__boxShadow">
            <div className="first__screen__text">
                <p>All collections</p>
                <h2>Elevate Your Everyday</h2>
                <ButtonLink/>
            </div>
        </section>
     );
 }

 export default FirstScreen;