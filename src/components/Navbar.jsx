import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 md:px-20 py-6 flex items-center justify-between bg-black/30 backdrop-blur-md">

      {/* LOGO */}

      <h1 className="text-white text-2xl font-bold tracking-wide">
        Areeba Beg
      </h1>

      {/* NAV LINKS */}

      <div className="hidden md:flex gap-10 text-white text-sm uppercase tracking-[3px]">


        <a href="#home" className="hover:text-gray-300 transition">
          Home
        </a>

        <a href="#about" className="hover:text-gray-300 transition">
          About
        </a>

        <a href="#projects" className="hover:text-gray-300 transition">
          Projects
        </a>

        <a href="#contact" className="hover:text-gray-300 transition">
          Contact
        </a>

      </div>

      {/* SOCIAL ICONS */}

      <div className="flex gap-5 text-white text-2xl">

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

    </nav>
  );
};

export default Navbar;