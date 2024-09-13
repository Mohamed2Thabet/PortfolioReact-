import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/1-header/header";
import Hero from "./components/2-hero/hero";
import Main from "./components/3-main/main";
import Contect from "./components/4-contect/contect";
import Footer from "./components/5-footer/footer";
function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setscroll(true);
      } else {
        setscroll(false);
      }
    });
  });
  const [scroll, setscroll] = useState(false);
  return (
    <div id="up">
      <Header />
      <Hero />
      <Main />
      <Contect />
      <Footer />
      <a href="#up">
        <button style={{opacity:scroll?1:0,transition:'.3s'}}  className="scroll2Top icon-keyboard_arrow_up"></button>
      </a>
    </div>
  );
}

export default App;
