import { useState } from 'react';
import logo from "../../public/images/lol_logo_notext.png";
import logo2 from "../../public/images/lol_logo.png";
import Button from "./Button";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
    <nav className="absolute max-md:sticky z-10 top-0 w-full morph-glass">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center ">
          <a className=' ' href="/" onClick={() => window.location.reload()}>
            <img src={logo} alt="arstad_logo" className="w-auto max-md:hidden md:h-24" />
            <img src={logo2} alt="arstad_logo" className="w-auto md:hidden h-24" />
          </a>
        </div>
        <div className="hidden md:block">
          <a href="#about" className="text-white font-semibold hover:text-gray-300 px-3 py-2">VÅXTORPS E-SPORTS FÖRENING</a>
          <a href="#kontakt" className="text-white font-semibold hover:text-gray-300 px-3 py-2">KONTAKT</a>
          <a href="#galleri" className="text-white font-semibold hover:text-gray-300 px-3 py-2 ">GALLERI</a>
          <a href="#biljett" className="text-white font-semibold hover:text-gray-300 px-3 py-2 pr-5">KÖP BILJETT</a>
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
      <div className='md:hidden'>
      <div className={`md:flex md:items-center md:justify-between ${menuOpen ? 'block' : 'hidden'}`}>
        <a href="#about" className="block text-center text-white font-semibold hover:text-gray-300  py-2">
          VÅXTORPS E-SPORTS FÖRENING
        </a>
        <a href="#kontakt" className="block text-center text-white font-semibold hover:text-gray-300  py-2">
          KONTAKT
        </a>
        <a href="#galleri" className="block text-center text-white font-semibold hover:text-gray-300 py-2">
          GALLERI
        </a>
        <a href="#biljett" className="block text-center text-white font-semibold hover:text-gray-300  py-2 ">
          KÖP BILJETT
        </a>
      
      </div>
      </div>
      <button onClick={toggleMenu} className="text-white focus:outline-none md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
    </>
  );
};

export default Navbar