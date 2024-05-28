import React from "react";
import styles, { layout } from "../style";
import stadgar_mockup from "../../public/images/stadgar_mockup.png";
import pdf from "../../public/images/stadgar.pdf";
import Button from "./Button";
import { RevealY } from "../Animations/RevealY";

const Stadgar = () => {
  return (
    <>
      <RevealY duration={0.5} startPos={-20} delay={0} once={false}>
        <section id="stadgar" className={layout.sectionReverse}>
          <div className="absolute z-[0] -right-2/2 mt-40 w-[30%] h-[30%] rounded-full pink__gradient" />
          <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>Stadgar</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              Våra stadgar är regler som styr hur vår organisation fungerar. De
              fastställs i skriftlig form och reglerar olika aspekter såsom vårt
              ändamål, medlemskap och beslutsprocesser. Genom att klicka på
              knappen nedan kan du läsa våra stadgar online.
            </p>
            <a href={pdf} target="_blank">
              <Button
                styles="hover-animation mt-10 bg-purple-blue-gradient text-white font-normal text-base"
                name={"Öppna Stadgar PDF"}
                type={"button"}
              />
            </a>
          </div>
          <div className={`${layout.sectionImgReverse}`}>
            <a href={pdf} target="_blank">
              <img
                src={stadgar_mockup}
                className="w-[80%] h-[100%] mx-auto z-[5]"
              />
            </a>
          </div>
        </section>
      </RevealY>
    </>
  );
};

export default Stadgar;
