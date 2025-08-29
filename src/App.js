import Navbar from "./components/Navbar";
import Home from "./components/home";
import ScrollY from "./components/ScrollY";
import './scss/styles/main.scss';

import { useRef } from "react";



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
          <Home sections={{ section1: section1Ref, section2: section2Ref, section3: section3Ref, section4: section4Ref, section5:section5Ref }} />

          <ScrollY />
    </div>
  );
}

export default App;
