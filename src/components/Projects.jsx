import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  { image: "/img1.png", title: "", description: "" },
  { image: "/img2.png", title: "", description: "" },
  { image: "/img3.png", title: "", description: "" },
  { image: "/img4.png", title: "", description: "" },
  { image: "/img5.png", title: "", description: "" },
  { image: "/img6.png", title: "", description: "" },
  { image: "/img7.png", title: "", description: "" },
  { image: "/img8.png", title: "", description: "" },
  { image: "/img9.png", title: "", description: "" },
  { image: "/img10.png", title: "", description: "" },
  { image: "/img11.png", title: "", description: "" },
  { image: "/img12.png", title: "", description: "" },
];

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section
      id="projects"
      className="py-16 md:py-24 px-4 sm:px-6 bg-linear-to-b from-white to-gray-100"
    >
      {/* HEADING */}
      <div className="text-center mb-10 md:mb-16">
        <p className="uppercase tracking-[4px] text-gray-500 mb-2 text-xs sm:text-sm">
          Portfolio
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          My Work
        </h2>
      </div>

      {/* SLIDER */}
      <div
        className="relative max-w-5xl mx-auto overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl"
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
            <div key={index} className="min-w-full relative group">

              {/* IMAGE (FIXED RESPONSIVE) */}
              <img
                src={project.image}
                alt="project"
                className="
                  w-full
                  h-55 sm:h-75 md:h-112.5 lg:h-130
                  object-contain sm:object-cover
                  bg-black
                  transition-transform duration-500 group-hover:scale-105
                "
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/20"></div>

              {/* CONTENT (RESPONSIVE) */}
              <div className="
                absolute bottom-3 sm:bottom-6 md:bottom-10
                left-3 sm:left-6 md:left-10
                right-3 sm:right-auto
                text-white z-10 max-w-xl
              ">
{/* 
                <p className="uppercase tracking-[3px] sm:tracking-[4px] text-[10px] sm:text-sm text-gray-300 mb-2 sm:mb-3">
                  Featured Project
                </p> */}

                {/* <h3 className="text-lg sm:text-2xl md:text-4xl font-bold">
                  Project {index + 1}
                </h3> */}

                {/* BUTTONS */}
                <div className="flex flex-wrap gap-3 sm:gap-4 mt-4 sm:mt-8">

                  {/* <a
                    href="#"
                    className="
                      bg-white text-black
                      px-4 sm:px-6 py-2 sm:py-3
                      rounded-full font-semibold
                      text-xs sm:text-sm
                      hover:scale-105 transition
                    "
                  >
                    View Project
                  </a> */}

                  <a
                    href="https://github.com/areebamirza"
                    target="_blank"
                    className="
                      border border-white text-white
                      px-4 sm:px-6 py-2 sm:py-3
                      rounded-full
                      text-xs sm:text-sm
                      hover:bg-white hover:text-black
                      transition
                    "
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
          className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-2 sm:p-3 rounded-full hover:scale-110 transition"
        >
          <ChevronLeft size={24} />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-2 sm:p-3 rounded-full hover:scale-110 transition"
        >
          <ChevronRight size={24} />
        </button>

      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-6 sm:mt-8 gap-2 sm:gap-3 flex-wrap">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all rounded-full ${
              current === index
                ? "w-8 sm:w-10 h-2 sm:h-3 bg-black"
                : "w-2 sm:w-3 h-2 sm:h-3 bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;