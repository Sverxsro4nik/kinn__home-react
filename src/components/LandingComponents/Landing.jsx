import React from 'react';
import ButtonLink from '../UI/ButtonLink/ButtonLink';
import MyLink from '../UI/MyLink/MyLink';

import products from '../../data/product';
import works from '../../data/works';
import gallery from '../../data/gallery';

import AboutWort from './AboutWork';
import MyInput from '../UI/MyInput/MyInput';
import MyButton from '../UI/MyButon/MyButton';
import MyGallery from '../UI/MyGallery/MyGallery';

const Landing = () => {
  return (
    <main>
      <section className='first__screen screen__boxShadow'>
        <div className='first__screen__text'>
          <p>All collections</p>
          <h2>Elevate Your Everyday</h2>
          <ButtonLink />
        </div>
      </section>
      <section className='description'>
        <p>
          If your happy place is at the dinner table, we totally get that. That’s why we created
          products to help you find slow moments in a fast world.
        </p>
        <div className='description-links'>
          <MyLink linkClass linkHref='#' linkText='Shop All' className='true' />
          <MyLink linkClass linkHref='#' linkText='Read Stories' className='true' />
        </div>
      </section>
      <section className='products section-backgroundYellow '>
        <h3>Maple Board Collection</h3>
        <ul className='products__list'>
          {products.map((product) => {
            return (
              <li className='products__list-item' key={product.id}>
                <figure>
                  <img src={process.env.PUBLIC_URL + product.src} alt={product.name} />
                  <figcaption>
                    <h4>{product.name}</h4>
                    <p>{product.price}</p>
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      </section>
      <section className='essentials'>
        <div className='essentials__text screen__boxShadow'>
          <p>The essentials</p>
          <h3>We belive minimalism means more. More space, more time, more meaningful moments </h3>
        </div>
      </section>
      <section className='about-work'>
        {works.map((work, key) => {
          return <AboutWort title={work.title} text={work.text} src={work.src} key={work.src} />;
        })}
      </section>
      <section className='newsletter section-backgroundYellow'>
        <h3>Sign up to our newsletter</h3>
        <p>Receive special offers and first look at new products</p>
        <form className='newsletter__form'>
          <MyInput />
          <MyButton />
        </form>
      </section>
      <section className='moments section-backgroundYellow'>
        <h3>#KinnMoments</h3>
        <MyGallery gallery={gallery} />
      </section>
    </main>
  );
};

export default Landing;
