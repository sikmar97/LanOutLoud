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
    "/public/images/Gallery/1.jpg",
    "/public/images/Gallery/3.jpg",
    "/public/images/Gallery/5.jpg",
    "/public/images/Gallery/7.jpg",
    "/public/images/Gallery/8.jpg",
    "/public/images/Gallery/9.jpg",
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
          <Stadgar />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
