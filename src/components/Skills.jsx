import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaDatabase,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
  SiSpringboot,
  SiSpring,
  SiHibernate,
  SiPostgresql,
} from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500" />,
    desc: "Structure of web pages",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-500" />,
    desc: "Styling and layouts",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400" />,
    desc: "Dynamic web functionality",
  },
  {
    name: "React",
    icon: <FaReact className="text-cyan-400" />,
    desc: "SPA & UI components",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400" />,
    desc: "Utility-first styling",
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap className="text-purple-500" />,
    desc: "Responsive UI framework",
  },
  {
    name: "jQuery",
    icon: <SiJquery className="text-blue-600" />,
    desc: "DOM manipulation library",
  },

  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500" />,
    desc: "Backend runtime environment",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-300" />,
    desc: "Backend API framework",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-600" />,
    desc: "NoSQL database",
  },

  {
    name: "Java",
    icon: <FaJava className="text-red-500" />,
    desc: "Object-oriented programming",
  },
  {
    name: "Spring Core",
    icon: <SiSpring className="text-green-600" />,
    desc: "Core Spring framework",
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot className="text-green-500" />,
    desc: "Java backend development",
  },
  {
    name: "Hibernate",
    icon: <SiHibernate className="text-purple-400" />,
    desc: "ORM framework",
  },

  {
    name: "MySQL",
    icon: <FaDatabase className="text-blue-400" />,
    desc: "Relational database",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-indigo-400" />,
    desc: "Advanced SQL database",
  },

  {
    name: "Git",
    icon: <FaGitAlt className="text-orange-600" />,
    desc: "Version control system",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-white" />,
    desc: "Code hosting platform",
  },
];

const Skills = () => {
  return (
    <section className="relative isolate overflow-hidden py-28 px-6 md:px-12">

      {/* BACKGROUND IMAGE */}
      <img
        src="/Tech.png"
        alt="background"
        className="
          absolute inset-0
          h-full w-full
          object-cover
          opacity-80
          pointer-events-none
          select-none
          -z-20
        "
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 -z-10 bg-black/75"></div>

      {/* WARM GLOW */}
      <div
        className="
          absolute inset-0 -z-10
          bg-[radial-gradient(circle_at_top,rgba(255,180,90,0.15),transparent_60%)]
        "
      ></div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HEADING */}
        <p className="text-center text-sm uppercase tracking-[6px] text-gray-300">
          Technologies I Work With
        </p>

        <h2 className="mt-4 text-center text-4xl font-bold text-white md:text-6xl">
          Tech Stack
        </h2>

        {/* SKILLS GRID */}
        <div className="mt-20 flex flex-wrap justify-center gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                group relative

                flex h-28 w-36 flex-col
                items-center justify-center
                text-center

                rounded-2xl
                px-3 py-4

                border border-white/10
                bg-black/30
                backdrop-blur-md

                shadow-md
                cursor-pointer

                transition duration-300 ease-out

                hover:-translate-y-2
                hover:border-orange-300
                hover:bg-black/40
              "
            >

              {/* ICON */}
              <span
                className="
                  text-3xl
                  transition duration-300
                  group-hover:-translate-y-1
                "
              >
                {skill.icon}
              </span>

              {/* NAME */}
              <h3
                className="
                  mt-2
                  text-sm font-semibold text-white
                "
              >
                {skill.name}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-1
                  max-h-0
                  overflow-hidden

                  text-[11px]
                  leading-4
                  text-gray-300

                  opacity-0

                  transition-all duration-300

                  group-hover:max-h-16
                  group-hover:opacity-100
                "
              >
                {skill.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;