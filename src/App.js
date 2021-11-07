
import './style.css';
import Header from './components/Header/Header';
import FirstScreen from './components/FirstScreen/FirstScreen';
import SectionDescription from './components/SectionDescription/SectionDescription';
import SectionProducts from './components/SectionProducts/SectionProducts';
import SectionEssentials from './components/SectionEssentials/SectionEssentials';
import SectionAboutWork from './components/SectionAboutWork/SectionAboutWork';

function App() {
  return (
    <div className="App wrapper">
           <Header/>
            <main>
              <FirstScreen/>
              <SectionDescription/>
              <SectionProducts/>
              <SectionEssentials/>
              <SectionAboutWork/>
            </main>
                

                //- start newsletter
                section.newsletter.section-backgroundYellow
                    h3 Sign up to our newsletter
                    p Receive special offers and first look at new products 

                    form(action="" class="newsletter__form")
                        input(type="text"  class="newsletter__form-input")
                        button(type="submit" class="newsletter__form-button") subscribe 

                //- end newsletter

                //- start moments
                section.moments.section-backgroundYellow
                    h3 #KinnMoments
                    //- start gallery
                    .moments__gallery
                        img(src="img/second-slide.webp", alt="")
                        img(src="img/first-slide.webp", alt="")
                        img(src="img/third-slide.webp", alt="")
                        img(src="img/four-slide.webp", alt="")
                    //- end gallery
                //- end moments

            //- start footer
            footer.footer.justyfy-content-spaceBtw.flex
                //- start footer-copyright
                .footer-copyright
                    p &#169; 2021 Kinn Home
                    .line.footer__line
                    p Need to get in touch? Just email us at hello@kinnhome.co
                //- end footer-copyright

                //- start footer-nav
                .footer-explore
                    p Explore 
                    .line.footer__line
                    nav.footer-nav
                        a(href="#").footer-nav__link shop
                        a(href="#").footer-nav__link style quiz
                        a(href="#").footer-nav__link about us
                        a(href="#").footer-nav__link stories
                //- end footer-nav

                //- start footer-help
                .footer-help
                    p Help
                    .line.footer__line 
                    nav.footer-nav
                        a(href="#").footer-nav__help faqs + shipping
                        a(href="#").footer-nav__help contact
                        a(href="#").footer-nav__help terms
                        a(href="#").footer-nav__help trade
                //- end footer-help

                //- start footer-sochial
                .footer-sochial
                    a.footer-sochial__item.facebook(href="#")
                    a.footer-sochial__item.pinterest(href="#")
                    a.footer-sochial__item.instagram(href="#")
                //- end footer-sochial
            //- end footer
    //- endwrapper 
    </div>
  );
}

export default App;


// export NODE_OPTIONS=--openssl-legacy-provider