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
                Frågor? Maila till{" "}
                <a
                  className="text-purple-400 hover:text-purple-500"
                  href="mailto:alexander@lanoutloud.se"
                >
                  alexander@lanoutloud.se
                </a>
              </p>
              {/* <div className="flex max-md:flex-col max-md:space-y-8 md:mx-36 pt-5 justify-center">
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
              </div> */}

              <div class="pt-20  mx-auto">
                <div className="flex max-md:flex-col max-md:space-y-8 md:mx-36 pt-5 justify-center ">
                <a
                target="_blank"
                href="https://www.instagram.com/lanoutloudse"
                className="flex space-x-2 pt-6 hover:opacity-80 mx-auto"
              >
                  <button
                    type="button"
                    class="inline-flex text-white bg-gradient-to-r  from-purple-500  to-pink-500 hover:bg-gradient-to-l focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-2xl text-sm px-5 py-2.5 text-center mx-auto md:mr-2 mb-2"
                   
                  >
                   
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="mr-2 -ml-1 w-8 h-8"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"
                      ></path>
                    </svg>
                    <div class="text-xl font-bold uppercase   pt-0.5">
                      Instagram
                    </div>
                  </button>
                  </a>
                  <a
                target="_blank"
                href="https://www.facebook.com/lanoutloudse"
                className="flex space-x-2 pt-6 hover:opacity-80 mx-auto"
              >
                  <button
                    type="button"
                    class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none mx-auto focus:ring-[#3b5998]/50 font-medium rounded-2xl  text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 md:mr-2 mb-2"
                  >
                    <svg
                      class="mr-2 -ml-1 w-7 h-7"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="facebook-f"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
                      ></path>
                    </svg>
                    <div class="text-xl font-bold uppercase pt-0.5">
                      Facebook
                    </div>
                  </button>
                  </a>
                  <a
                target="_blank"
                href="https://www.youtube.com/channel/UCkydnQxNwOFEeZsnYCeQpWg"
                className="flex space-x-2 pt-6 hover:opacity-80 mx-auto"
              >
                  <button
                    type="button"
                    class="text-white bg-[#c4302b] hover:bg-red-500 focus:ring-4 mx-auto  focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-2xl  text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 md:mr-2 mb-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      class="mr-2 -ml-1 w-8 h-8"
                      viewBox="0 0 72 72"
                    >
                      <path
                        fill="currentColor"
                        d="M61.115,18.856C63.666,21.503,64,25.709,64,36s-0.334,14.497-2.885,17.144C58.563,55.791,55.906,56,36,56	s-22.563-0.209-25.115-2.856C8.334,50.497,8,46.291,8,36s0.334-14.497,2.885-17.144S16.094,16,36,16S58.563,16.209,61.115,18.856z M31.464,44.476l13.603-8.044l-13.603-7.918V44.476z"
                      ></path>
                    </svg>
                    <div class="text-xl uppercase  font-bold pt-0.5">
                      Youtube
                    </div>
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealY>
    </>
  );
};

export default Styrelse;
