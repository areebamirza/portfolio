import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-20 py-5 flex items-center justify-between bg-black/30 backdrop-blur-md">

      {/* LOGO */}
      <h1 className="text-white text-xl md:text-2xl font-bold tracking-wide">
        Areeba Beg
      </h1>

      {/* DESKTOP LINKS */}
      <div className="hidden md:flex gap-10 text-white text-sm uppercase tracking-[3px]">
        <a href="#home" className="hover:text-gray-300 transition">Home</a>
        <a href="#about" className="hover:text-gray-300 transition">About</a>
        <a href="#projects" className="hover:text-gray-300 transition">Projects</a>
        <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
      </div>

      {/* SOCIAL ICONS (hidden on very small screens if needed) */}
      <div className="hidden sm:flex gap-5 text-white text-xl md:text-2xl">
        <a
          href="https://github.com/areebamirza"
          target="_blank"
          className="hover:scale-110 transition duration-300"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/mirza-areeba-2b0572232/"
          target="_blank"
          className="hover:scale-110 transition duration-300"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* HAMBURGER BUTTON (MOBILE) */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/90 backdrop-blur-md flex flex-col items-center gap-6 py-8 text-white uppercase tracking-[3px] md:hidden">
          
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

          <div className="flex gap-6 text-2xl pt-4">
            <a href="https://github.com/areebamirza" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/mirza-areeba-2b0572232/" target="_blank">
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;