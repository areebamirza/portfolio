const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 px-4 sm:px-6 overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <img
        src="/handshake.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">

        {/* SMALL HEADING */}
        <p className="uppercase tracking-[4px] sm:tracking-[6px] text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm">
          Contact
        </p>

        {/* MAIN HEADING */}
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
          Let’s Build Something
          <span className="block text-orange-200 mt-2">
            Amazing Together
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-6 sm:mt-8 text-gray-200 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 max-w-2xl mx-auto">
          I’m always open to discussing new projects, creative ideas,
          freelance opportunities, or full-time roles. Let’s create something meaningful together.
        </p>

        {/* CONTACT CARD */}
        <div className="mt-10 sm:mt-14 backdrop-blur-sm bg-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-white/20 shadow-2xl">

          {/* EMAIL LABEL */}
          <p className="text-orange-100 uppercase tracking-[3px] sm:tracking-[4px] text-xs sm:text-sm">
            Email Me At
          </p>

          {/* EMAIL */}
          <h3 className="mt-3 sm:mt-4 text-lg sm:text-2xl md:text-3xl font-semibold break-all">
            areebamirza1408@gmail.com
          </h3>

          {/* BUTTONS */}
           <div className="flex justify-center gap-3 sm:gap-5 mt-8 sm:mt-10">

                <a
                  href="mailto:areebamirza1408@gmail.com"
                  className="px-5 sm:px-8 py-2 sm:py-4 bg-orange-200 text-black rounded-full font-semibold hover:scale-105 transition shadow-lg text-xs sm:text-base"
                >
                 Say Hello
                </a>

                <a
                  href="https://github.com/areebamirza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 sm:px-8 py-2 sm:py-4 border border-white rounded-full font-semibold hover:bg-white hover:text-black transition text-xs sm:text-base"
                 >
                  GitHub
                </a>                

          </div>
        </div>

        {/* FOOTER TEXT */}
        <p className="mt-10 sm:mt-12 text-gray-300 text-xs sm:text-sm tracking-wide">
          Designed & Built with React + Tailwind CSS
        </p>

      </div>
    </section>
  );
};

export default Contact;