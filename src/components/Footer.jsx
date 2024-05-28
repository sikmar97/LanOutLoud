import React from "react";
import quick_logo from "../../public/images/quick_logo.svg";

const Footer = () => {
  return (
    <section className="pb-4 pt-48 text-white font-poppins md:text-[14px] text-xs">
      <div className="mx-auto text-center">
        <p className="">
          Copyright Ⓒ 2024 Våxtorps E-Sports Förening (VESF). All Rights Reserved.
        </p>
        <div className="md:flex md:pr-6 max-md:pt-5 text-center mx-auto items-center justify-center pt-2">
          <p className="max-md:text-center max-md:pb-1">Powered By</p>
          <a href="https://quicksleek.se/" target="_blank" className="hover:opacity-80 ">
          <img src={quick_logo} className="mt-[2px] max-md:mx-auto" width={110} alt="Powered By Quick Logo" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
