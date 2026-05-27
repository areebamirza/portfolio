const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 overflow-hidden"
    >

      {/* WARM CANDLE GLOW BACKGROUND */}
     <img
            src="/handshake.jpg"
            alt="warm glow background"
            className="absolute inset-0 w-full h-full object-cover"
      />

          <div className="absolute inset-0 h-[80%]"></div>

           {/* SOFT DARK OVERLAY */}
           <div className="absolute inset-0 bg-black/65"></div>

          {/* CONTENT */}
             <div className="relative z-10 max-w-4xl mx-auto text-center text-white">

          {/* SMALL HEADING */}
            <p className="uppercase tracking-[6px] text-gray-300 mb-4">
              Contact
           </p>

        {/* MAIN HEADING */}
        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
          Let’s Build Something
          <span className="block text-orange-200">
            Amazing Together
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-8 text-gray-200 text-lg leading-8 max-w-2xl mx-auto">
          I’m always open to discussing new projects, creative ideas,
          freelance opportunities, or full-time roles.
          Let’s create something meaningful together.
        </p>

        {/* CONTACT CARD */}
        <div className="mt-14 backdrop-blur-sm bg-white/10 rounded-3xl p-10 border border-white/20 shadow-2xl">

          {/* EMAIL */}
          <p className="text-orange-100 uppercase tracking-[4px] text-sm">
            Email Me At
          </p>

          <h3 className="mt-4 text-2xl md:text-3xl font-semibold break-all">
            areebamirza1408@gmail.com
          </h3>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center gap-5 mt-10">

            {/* EMAIL BUTTON */}
            <a
              href="mailto:areebamirza1408@gmail.com"
              className="px-8 py-4 bg-orange-200 text-black rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg"
            >
              Say Hello
            </a>

            {/* GITHUB BUTTON */}
            <a
              href="https://github.com/areebamirza"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white rounded-full font-semibold hover:bg-white hover:text-black transition duration-300"
            >
              GitHub
            </a>

          </div>
        </div>

        {/* FOOTER TEXT */}
        <p className="mt-12 text-gray-300 text-sm tracking-wide">
          Designed & Built with React + Tailwind CSS
        </p>

      </div>
    </section>
  );
};

export default Contact;