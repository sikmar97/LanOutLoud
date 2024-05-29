import React from "react";
import styles, { layout } from "../style";
import aboutImage from "../../public/images/About_image.webp";
import Button from "./Button";
import { RevealY } from "../Animations/RevealY";

const About = () => {
  return (
    <>
    <RevealY duration={0.5} startPos={-20} delay={0} once={false}>
     <section id="about" className={layout.sectionReverse}>
        <div className={`${layout.sectionImgReverse} pt-10`}>
          <img
            src={aboutImage}
            className="w-[100%] h-[100%] z-[5] rounded-lg shadow-lg drop-shadow-md"
            alt="About"
          />
        </div>
        <div className={`${layout.sectionInfo} items-center`}>
          <h2 className={`${styles.heading2} text-center max-md:pt-10`}>ETT LAN FÖR ALLA.</h2>
          <p className={`${styles.paragraph} mt-5 text-center`}>
          LAN OUT LOUD är ett LAN av den ideella föreningen "Våxtorps E-Sports Förening (VESF)". Vi vill skapa ett LAN där alla känner sig välkomna. Vi tror på att ett LAN är mer än bara att koppla ihop sin dator. Det är en chans att träffa gamla och nya vänner, skaffa nya kunskaper, utmana sig själv, men framförallt ha riktigt jäkla kul!
          </p>
          <a
            href="https://ebas.sverok.se/blimedlem/24788?fbclid=IwAR1V9OX9RncF1QeV4kYmTf3nnK3TmfVs4lWfPhPTOlj2sYRQp_rOUdgy2uo"
            target="_blank"
          >
            <Button
              styles="hover-animation mt-10 bg-purple-blue-gradient text-white font-normal text-base px-10"
              name={"Bli Medlem"}
              type={"button"}
            />
          </a>
        </div>
    </section>
    </RevealY>
    </>
  )
}

export default About;
