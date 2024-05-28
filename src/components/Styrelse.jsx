import React from "react";
import fb_logo from "../../public/images/fb_logo.png";
import Insta_logo from "../../public/images/Insta_logo.png";
import Youtube_logo from "../../public/images/Youtube_logo.png";
import styles from "../style";
import { RevealY } from "../Animations/RevealY";

const Styrelse = () => {
  return (
    <>
      <RevealY duration={0.5} startPos={-20} delay={0} once={false}>
        <div id="" className="pt-20 pb-20">
          <div className="flex flex-col justify-between gap-8 pt-12 text-white">
            <div className="w-full flex flex-col justify-center text-center">
              <h1 className={`${styles.heading2}`}>Kontakta oss</h1>
              <p className="font-normal text-2xl leading-6 pt-4 lg:max-w-4xl mx-auto">
              Frågor? Maila till <a className="text-purple-400 hover:text-purple-500" href="mailto:alexander@lanoutloud.se">alexander@lanoutloud.se</a>
              </p>
              <div className="flex max-md:flex-col max-md:space-y-8 md:mx-36 pt-5 justify-center">
              <a
                target="_blank"
                href="https://www.facebook.com/lanoutloudse"
                className="flex space-x-2 pt-6 hover:opacity-80 mx-auto"
              >
                <img className="w-auto h-[34px]" src={fb_logo} alt="Facebook" />
                <p className={`${styles.heading3}`}>Facebook</p>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/lanoutloudse"
                className="flex space-x-2 pt-6 hover:opacity-80 mx-auto"
              >
                <img className="w-auto h-[34px]" src={Insta_logo} alt="Instagram" />
                <p className={`${styles.heading3}`}>Instagram</p>
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCkydnQxNwOFEeZsnYCeQpWg"
                className="flex space-x-2 pt-6 hover:opacity-80 mx-auto"
              >
                <img className="w-auto h-[34px]" src={Youtube_logo} alt="Youtube" />
                <p className={`${styles.heading3}`}>Youtube</p>
              </a>
              </div>
            </div>
          </div>
        </div>
      </RevealY>
    </>
  );
};

export default Styrelse;
