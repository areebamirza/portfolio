const Footer = () => {
  return (
    <footer className="relative bg-white/5 backdrop-blur-2xl border-t border-white/20 py-16 px-10 shadow-[0_-8px_32px_rgba(255,255,255,0.08)]">

      {/* GLASS OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-r from-black/50 via-transparent to-black/50"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* LEFT SIDE */}
        <p className="text-black text-sm tracking-wide font-medium">
          © 2026 Areeba Beg. All rights reserved.
        </p>

        {/* CENTER */}
        <p className="text-gray-800 text-sm font-medium">
          Built with React + Tailwind CSS
        </p>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">

          <a
            href="https://github.com/areebamirza"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-600 transition duration-300 font-medium"
          >
            GitHub
          </a>

          <a
            href="mailto:areebamirza1408@gmail.com"
            className="text-black hover:text-gray-600 transition duration-300 font-medium"
          >
            Email
          </a>

          <a
            href="#home"
            className="text-black hover:text-gray-600 transition duration-300 font-medium"
          >
            Back to Top
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;