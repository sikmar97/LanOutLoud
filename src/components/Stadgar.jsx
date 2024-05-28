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
        <section className="text-center pt-40 pb-10">
        <section id="biljett" className="">
          <div className="" />
          <div className={`${layout.sectionInfo} items-center`}>
          <h2 className={`${styles.heading2} text-center uppercase`}>Köp Biljetter</h2>
          <p className={`${styles.paragraph} mt-5 text-center`}>
          Information om biljettsläpp kommer att finnas här. (För närvarande är biljetterna ännu inte tillgängliga)
          </p>
          </div>
        </section>
        </section>
      </RevealY>
    </>
  );
};

export default Stadgar;
