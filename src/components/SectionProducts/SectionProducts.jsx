import React from "react";



function SectionProducts({products}){
    return(
        <section className="products section-backgroundYellow ">
            <h3>Maple Board Collection</h3>
            <ul className="products__list">
                {
                    products.map((product) =>{
                        return <li className="products__list-item" key={product.id}>
                                    <figure>
                                        <img src={product.src} alt={product.name}/>
                                        <figcaption>
                                            <h4>{product.name}</h4>
                                            <p>{product.price}</p>
                                        </figcaption>
                                    </figure>
                                </li>

                    })
                }
                {/* <li className="products__list-item">
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
                </li> */}
            </ul>
        </section>
    );
}

export default SectionProducts;