import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ScrollY from "./components/ScrollY";
import About from "./components/About";
import Footer from "./components/Footer";
import './scss/styles/main.scss';
import './scss/styles/about.scss';

import { useRef } from "react";

import { Routes, Route} from "react-router-dom";



function App() {

   //On crée des refs pour cibler les sections
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const section5Ref = useRef(null);

  return (
    <div className="App">

            {/** On passe des ref au menu */}
            <Navbar sections={{ section1: section1Ref, section2: section2Ref, section3: section3Ref, section4: section4Ref, section5:section5Ref }} />
            {/** On passe aussi des ref a la page principale */}

          <Routes>

              <Route path="/" element={<Home sections={{ section1: section1Ref, section2: section2Ref, section3: section3Ref, section4: section4Ref, section5:section5Ref }} />} />
              <Route path="/about" element={ <About />} />

           </Routes>

            <Footer />
            <ScrollY />
    </div>
  );
}


export default App;
