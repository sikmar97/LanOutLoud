import React from "react";
import styles, { layout } from "../style";
import meeting from "../../public/images/meeting.jpg";
import Button from "./Button";
import { RevealY } from "../Animations/RevealY";

const Stadgar = () => {
  return (
    <>
    <RevealY duration={0.5} startPos={-20} delay={0} once={false}>
     <section id="möten" className={layout.sectionReverse}>
        <div className={`${layout.sectionImgReverse}`}>
          <img
            src={meeting}
            className="w-[100%] h-[100%] z-[5] rounded-lg shadow-lg drop-shadow-md"
          />
        </div>
        <div className={`${layout.sectionInfo} items-center`}>
          <h2 className={`${styles.heading2} text-center`}>Årsmöten</h2>
          <p className={`${styles.paragraph} mt-5 text-center`}>
            Utforska vårt mötesarkiv för att återuppleva tidigare årsmöten.
            Bläddra genom listan för att återkalla diskussioner och hämta viktig
            information från föregående årsmöten.
          </p>
          <a
            href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy85Nzc0NDJjMDMwNTMxYjE3L0VsWWFjR09SUnI1SWk5UFVCQklfTHM4QjhyQjdqbTJzbE5sRGRCTEpSNlQ1dGc%5FZT1RdTI3eHomZmJjbGlkPUl3QVIyY2lrMkxVY25uQ081LVh5QW5NOVlhMHdUWmsySEx5eEJtV3gtN2g5STJwdmFlOW1XeDZLVmpEM28&id=977442C030531B17%21s63701a56469148be8bd3d404123f2ecf&cid=977442C030531B17"
            target="_blank"
          >
            <Button
              styles="hover-animation mt-10 bg-purple-blue-gradient text-white font-normal text-base px-10"
              name={"Öppna Arkiv"}
              type={"button"}
            />
          </a>
        </div>
    </section>
    </RevealY>
    </>

    
  );
};

export default Stadgar;
