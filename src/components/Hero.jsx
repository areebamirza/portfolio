const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      {/* BACKGROUND IMAGE */}
      <img
        src="/portfolio.png"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover object-[20%_70%] opacity-70"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/44"></div>

      {/* CONTENT */}
      <div className="relative z-10 px-6 mt-16 flex flex-col items-center text-center">

        {/* PROFILE IMAGE */}
        <div className="w-52 h-52 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-transparent shadow-2xl translate-y-4 transition duration-300 hover:translate-y-2">

          <img
            src="/profile.png"
            alt="profile"
            className="w-full h-full object-cover object-top scale-150 -translate-x-5 -translate-y-12"
          />

        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-200 leading-8 mt-12 max-w-2xl text-lg md:text-xl font-medium font-sans">
          MERN and Java Full Stack Developer with hands-on experience in building responsive, scalable, and high-performance web applications.

          Skilled in React, Node.js, Express, and MongoDB for modern full-stack development, along with Java for backend development and problem-solving.

          Focused on creating clean user interfaces, efficient APIs, and end-to-end solutions that deliver smooth user experiences and strong system performance.
        </p>

        {/* EXTRA TEXT */}
        <p className="text-gray-400 mt-6 text-sm tracking-wide">
          Building modern web experiences with clean design & performance in mind.
        </p>

      </div>
    </section>
  );
};

export default Hero;