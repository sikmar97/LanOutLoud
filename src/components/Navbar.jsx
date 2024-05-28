import React from 'react';
import logo from "../../public/images/lol_logo_notext.png";
import Button from "./Button";
const Navbar = () => {
  return (
    <>
    <nav className="absolute z-10 top-0 w-full morph-glass">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center max-sm:pl-4">
          <a className=' ' href="/" onClick={() => window.location.reload()}>
            <img src={logo} alt="arstad_logo" className="w-auto h-24" /> 
          </a>
        </div>
        <div className="hidden md:block">
          <a href="#about" className="text-white font-semibold hover:text-gray-300 px-3 py-2">VÅXTORPS E-SPORTS FÖRENING</a>
          <a href="#galleri" className="text-white font-semibold hover:text-gray-300 px-3 py-2">GALLERI</a>
          <a href="#biljett" className="text-white font-semibold hover:text-gray-300 px-3 py-2 pr-3">KÖP BILJETT</a>
          <a
            href="https://ebas.sverok.se/blimedlem/24788?fbclid=IwAR1V9OX9RncF1QeV4kYmTf3nnK3TmfVs4lWfPhPTOlj2sYRQp_rOUdgy2uo"
            target="_blank"
          >
            <Button
              styles="hover-animation bg-purple-blue-gradient text-white font-normal text-base px-5"
              name={"Bli Medlem"}
              type={"button"}
            />
          </a>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar