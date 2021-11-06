import React from "react";


function SectionProducts(){
    return(
        <section className="products section-backgroundYellow ">
            <h3>Maple Board Collection</h3>
            <ul className="products__list">
                <li className="products__list-item">
                    <figure>
                        <img src="./img/first-product.webp" alt=""/>
                        <figcaption>
                            <h4>Maple Board - Short</h4>
                            <p>$98.00</p>
                        </figcaption>
                    </figure>
                </li>
                <li className="products__list-item">
                    <figure>
                        <img src="./img/second-product.webp" alt=""/>
                        <figcaption>
                            <h4>Maple Board - Long</h4>
                            <p>$125.00</p>
                        </figcaption>
                    </figure>
                </li>
                <li className="products__list-item">
                    <figure>
                        <img src="./img/third-product.webp" alt=""/>
                        <figcaption>
                            <h4>Maple Board - Wide</h4>
                            <p>$158.00</p>
                        </figcaption>
                    </figure>
                </li>
            </ul>
        </section>
    );
}

export default SectionProducts;