import React from "react";
import video from "../../public/images/falkenberg_video.mp4";
import styles from "../style";
import { RevealY } from "../Animations/RevealY";
import heroImage from "../../public/images/lol_hero.webp"
import logo from "../../public/images/lol_logo.png"

const Hero = () => {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="w-full relative h-screen">
        {/* <video autoPlay muted loop id='background-video' className='w-full h-full object-cover brightness-75'>
            <source src={video} type="video/mp4" />
        </video> */}
        <img className='w-full h-full object-cover brightness-75' src={heroImage}alt="" />
        <div className="absolute inset-0 flex flex-col items-center justify-center max-md:pt-16">
        <RevealY duration={0.5} startPos={-20} delay={0} once={true}>
          <img className="w-auto h-64 mx-auto max-md:h-34" src={logo} alt="" />
          <h2 className={`${styles.heading2} text-white  z-10 text-center pt-10`}>
          NÄSTA LAN 2024 FREDAG 25 OKTOBER – SÖNDAG 27 OKTOBER
          </h2>
        </RevealY>
        </div>
      </div>
    </section>
  );
};

export default Hero;
