const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6"
    >

      {/* BACKGROUND IMAGE */}
      <img
        src="/portfolio.png"
        alt="background"
        className="
          absolute inset-0 w-full h-full object-cover
          object-center sm:object-[20%_70%]
          opacity-70
          scale-105 sm:scale-100
        "
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTENT */}
      <div className="relative z-10 mt-20 sm:mt-16 flex flex-col items-center text-center max-w-4xl">

        {/* PROFILE IMAGE */}
        <div
          className="
            w-44 h-44 sm:w-44 sm:h-44 md:w-52 md:h-52
            rounded-full overflow-hidden
            border-4 border-transparent
            shadow-2xl
            transition duration-300 hover:scale-105
          "
        >
          <img
            src="/profile.png"
            alt="profile"
            className="
              w-full h-full object-cover
              object-top
              scale-150
              -translate-x-3 sm:-translate-x-5
              -translate-y-6 sm:-translate-y-10 md:-translate-y-12
            "
          />
        </div>

        {/* DESCRIPTION */}
        <p className="
          text-gray-200 leading-7 sm:leading-8
          mt-8 sm:mt-10 md:mt-12
          text-sm sm:text-base md:text-lg
          font-medium
          max-w-xs sm:max-w-xl md:max-w-2xl
        ">
          MERN and Java Full Stack Developer with hands-on experience in building responsive, scalable, and high-performance web applications.

          Skilled in React, Node.js, Express, and MongoDB for modern full-stack development, along with Java for backend development and problem-solving.

          Focused on creating clean user interfaces, efficient APIs, and end-to-end solutions that deliver smooth user experiences and strong system performance.
        </p>

        {/* EXTRA TEXT */}
        <p className="
          text-gray-400 mt-5 sm:mt-6
          text-xs sm:text-sm tracking-wide
          max-w-xs sm:max-w-md
        ">
          Building modern web experiences with clean design & performance in mind.
        </p>

      </div>
    </section>
  );
};

export default Hero;