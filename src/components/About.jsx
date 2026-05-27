const About = () => {
  return (
    <section
      id="about"
      className="py-28 px-6 md:px-12 bg-[#f8f5f1]"
    >

      <div className="max-w-5xl mx-auto">

        {/* SMALL HEADING */}

        <p className="uppercase tracking-[6px] text-gray-400 text-sm mb-4">
          A Little About Me
        </p>

        {/* MAIN HEADING */}

        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Creating thoughtful and modern web experiences.
        </h2>

        {/* CONTENT */}

        <div className="mt-14 grid md:grid-cols-2 gap-14 items-start">

          {/* LEFT SIDE */}

          <div>

            <p className="text-gray-700 text-lg leading-9">

              I’m Areeba, a MERN Stack Developer passionate about
              building responsive and user-focused web applications
              using React, Node.js, Express, and MongoDB.

              <br />
              <br />

              I enjoy blending clean frontend design with functional
              backend systems to create smooth digital experiences
              that feel both modern and intuitive.

              <br />
              <br />

              What excites me most about development is turning ideas
              into real, working products while continuously learning
              and improving with every project I build.

            </p>

          </div>

          {/* RIGHT SIDE */}

          <div className="space-y-6">

            <div className="border-l-2 border-black pl-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Frontend
              </h3>

              <p className="text-gray-600 mt-3 leading-8">
                Building clean, responsive, and interactive interfaces
                with React, Tailwind CSS, and modern UI practices.
              </p>
            </div>

            <div className="border-l-2 border-black pl-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Backend
              </h3>

              <p className="text-gray-600 mt-3 leading-8">
                Creating scalable APIs and backend systems using
                Node.js, Express.js, and MongoDB.
              </p>
            </div>

            <div className="border-l-2 border-black pl-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Learning & Growth
              </h3>

              <p className="text-gray-600 mt-3 leading-8">
                Constantly exploring new technologies, improving
                problem-solving skills, and building meaningful
                real-world projects.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;