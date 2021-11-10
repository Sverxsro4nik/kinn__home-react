
import './style.css';
import Header from './components/Header/Header';
import FirstScreen from './components/FirstScreen/FirstScreen';
import SectionDescription from './components/SectionDescription/SectionDescription';
import SectionProducts from './components/SectionProducts/SectionProducts';
import SectionEssentials from './components/SectionEssentials/SectionEssentials';
import SectionAboutWork from './components/SectionAboutWork/SectionAboutWork';
import SectionNewsLetter from './components/SectionNewsLetter/SectionNewsLetter';
import SectionMoments from './components/SectionMoments/SectionMoments';
import Footer from './components/Footer/Footer';

import products from './data/product';

function App() {
  return (
    <div className="App wrapper">
           <Header/>
            <main>
              <FirstScreen/>
              <SectionDescription/>
              <SectionProducts products={products}/>
              <SectionEssentials/>
              <SectionAboutWork/>
              <SectionNewsLetter/>
              <SectionMoments/>
            </main>
            <Footer/>
    </div>
  );
}

export default App;


// export NODE_OPTIONS=--openssl-legacy-provider