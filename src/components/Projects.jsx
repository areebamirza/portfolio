import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    // title: "Portfolio Website",
    // description:
    //   "Modern responsive portfolio built with React & Tailwind CSS.",
    image: "/img1.png",
    // githubLink: "https://github.com/areebamirza",
  },

  {
    // title: "Code Dashboard",
    // description:
    //   "Interactive analytics dashboard with smooth animations.",
    image: "/img2.png",
    // githubLink: "https://github.com/areebamirza",
  },

  {
    // title: "E-Commerce UI",
    // description:
    //   "Elegant shopping UI with premium modern experience.",
    image: "/img3.png",
    // githubLink: "https://github.com/areebamirza",
  },

  {
    // title: "Food App",
    // description:
    //   "Restaurant application with stylish responsive design.",
    image: "/img4.png",
    // githubLink: "https://github.com/areebamirza",
  },

  {
    // title: "Travel Website",
    // description:
    //   "Travel booking interface with modern animations and layouts.",
    image: "/img5.png",
    // githubLink: "https://github.com/areebamirza",
  },

  {
    // title: "Weather App",
    // description:
    //   "Live weather application with API integration and forecasts.",
    image: "/img6.png",
    // githubLink: "https://github.com/areebamirza",
  },

  {
    // title: "Task Manager",
    // description:
    //   "Organize daily tasks with productivity features.",
    image: "/img7.png",
    // githubLink: "https://github.com/areebamirza",
  },

  {
    // title: "Movie App",
    // description:
    //   "Movie browsing application with trending sections.",
    image: "/img8.png",
    // githubLink: "https://github.com/areebamirza",
  },

  {
    // title: "Fitness Tracker",
    // description:
    //   "Track workouts and monitor progress visually.",
    image: "/img9.png",
    // githubLink: "https://github.com/areebamirza",
  },

  {
    // title: "Music Platform",
    // description:
    //   "Modern music streaming inspired interface.",
    image: "/img10.png",
    // githubLink: "https://github.com/areebamirza",
  },

  {
    // title: "Banking UI",
    // description:
    //   "Premium banking dashboard with elegant design.",
    image: "/img11.png",
    // githubLink: "https://github.com/areebamirza",
  },

  {
    // title: "Learning Platform",
    // description:
    //   "Interactive online learning experience.",
    image: "/img12.png",
    // githubLink: "https://github.com/areebamirza",
  },
];

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // NEXT
  const nextSlide = () => {
    setCurrent((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  // PREVIOUS
  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  // AUTO SLIDE
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
  setCurrent((prev) =>
    prev === projects.length - 1 ? 0 : prev + 1
  );
}, 1200);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-linear-to-b from-white to-gray-100"
    >
      {/* HEADING */}
      <div className="text-center mb-16">
        <p className="uppercase tracking-[6px] text-gray-500 mb-3">
          Portfolio
        </p>

        <h2 className="text-5xl font-bold">
          My Work
        </h2>
      </div>

      {/* SLIDER */}
      <div
        className="relative max-w-5xl mx-auto overflow-hidden rounded-3xl shadow-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

        {/* SLIDES */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-full relative group"
            >

              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-130 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/20"></div>

              {/* CONTENT */}
              <div className="absolute bottom-10 left-10 text-white z-10 max-w-xl">

                <p className="uppercase tracking-[4px] text-sm text-gray-300 mb-3">
                  Featured Project
                </p>

                <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                  {project.title}
                </h3>

                <p className="mt-4 text-lg text-gray-200 leading-relaxed">
                  {project.description}
                </p>

                {/* BUTTONS */}
                <div className="flex gap-4 mt-8">

                  {/* VIEW PROJECT */}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-7 py-3 rounded-full font-semibold hover:scale-105 transition duration-300"
                  >
                    View Project
                  </a>

                  {/* GITHUB */}
                  <a
                    href="https://github.com/areebamirza"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white px-7 py-3 rounded-full text-white hover:bg-white hover:text-black transition duration-300"
                  >
                    GitHub
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LEFT BUTTON */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 -translate-y-1/2 backdrop-blur-md bg-white/20 border border-white/20 text-white p-3 rounded-full shadow-lg hover:scale-110 transition z-20"
        >
          <ChevronLeft size={30} />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 -translate-y-1/2 backdrop-blur-md bg-white/20 border border-white/20 text-white p-3 rounded-full shadow-lg hover:scale-110 transition z-20"
        >
          <ChevronRight size={30} />
        </button>
      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-8 gap-3 flex-wrap">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index
                ? "w-10 h-3 bg-black"
                : "w-3 h-3 bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;