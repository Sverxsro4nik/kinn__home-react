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
                                        <img src={process.env.PUBLIC_URL + product.src} alt={product.name}/>
                                        <figcaption>
                                            <h4>{product.name}</h4>
                                            <p>{product.price}</p>
                                        </figcaption>
                                    </figure>
                                </li>

                    })
                }
            </ul>
        </section>
    );
}

export default SectionProducts;