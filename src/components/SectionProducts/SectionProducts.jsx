import React from "react";
import firstProduct from '../../img/first-product.webp';
import secondProduct from '../../img/second-product.webp';
import thirdProduct from '../../img/third-product.webp';


function SectionProducts(){
    return(
        <section className="products section-backgroundYellow ">
            <h3>Maple Board Collection</h3>
            <ul className="products__list">
                <li className="products__list-item">
                    <figure>
                        <img src={firstProduct} alt="Maple Board - Short"/>
                        <figcaption>
                            <h4>Maple Board - Short</h4>
                            <p>$98.00</p>
                        </figcaption>
                    </figure>
                </li>
                <li className="products__list-item">
                    <figure>
                        <img src={secondProduct} alt="Maple Board - Long"/>
                        <figcaption>
                            <h4>Maple Board - Long</h4>
                            <p>$125.00</p>
                        </figcaption>
                    </figure>
                </li>
                <li className="products__list-item">
                    <figure>
                        <img src={thirdProduct} alt="Maple Board - Wide"/>
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