import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stadgar from "./components/Stadgar";
import Möten from "./components/Möten";
import About from "./components/About";

import "./index.css";
import styles from "./style";
import Styrelse from "./components/Styrelse";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery.jsx";

function App() {
  const images = [
    "https://i0.wp.com/media.lanoutloud.se/2022/11/312796240_1149722252311232_1085811552466798805_n.jpg?resize=766%2C1024&ssl=1",
    "https://i0.wp.com/media.lanoutloud.se/2022/11/312796240_1149722252311232_1085811552466798805_n.jpg?resize=766%2C1024&ssl=1",
    "https://i0.wp.com/media.lanoutloud.se/2022/11/312796240_1149722252311232_1085811552466798805_n.jpg?resize=766%2C1024&ssl=1",
  ];
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`bg-primary`}>
        <div>
          <Navbar />
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <About />    
          <Styrelse />
          <Gallery images={images} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
