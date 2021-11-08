
import './style.css';
import Header from './components/Header/Header';
import FirstScreen from './components/FirstScreen/FirstScreen';
import SectionDescription from './components/SectionDescription/SectionDescription';
import SectionProducts from './components/SectionProducts/SectionProducts';
import SectionEssentials from './components/SectionEssentials/SectionEssentials';
import SectionAboutWork from './components/SectionAboutWork/SectionAboutWork';
import SectionNewsLetter from './components/SectionNewsLetter/SectionNewsLetter';
import SectionMoments from './components/SectionMoments/SectionMoments';

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
              <SectionNewsLetter/>
              <SectionMoments/>
            </main>

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