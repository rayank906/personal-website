import { FaHtml5, FaJava, FaJs, FaPython, FaReact } from "react-icons/fa";
import { SiCplusplus, SiCss3, SiFirebase, SiFlask, SiGit, SiGithub, SiMysql, SiNodedotjs, SiNumpy, SiPandas, SiPython, SiR, SiReact } from "react-icons/si"

const skills = [
    {
      name: "Python",
      icon: <FaPython className="w-10 h-10" style={{ color: "#3776ab" }} />,
    },
    {
      name: "C++",
      icon: <SiCplusplus className="w-10 h-10" style={{ color: "#00599c" }} />,
    },
    {
      name: "JavaScript",
      icon: <FaJs className="w-10 h-10" style={{ color: "#f7df1e" }} />,
    },
    {
      name: "HTML5",
      icon: <FaHtml5 className="w-10 h-10" style={{ color: "#e34c26" }} />,
    },
    {
      name: "CSS3",
      icon: <SiCss3 className="w-10 h-10" style={{ color: "#1572b6" }} />,
    },
    {
      name: "R",
      icon: <SiR className="w-10 h-10" style={{ color: "#276dc3" }} />,
    },
    {
      name: "Java",
      icon: <FaJava className="w-10 h-10" style={{ color: "#ed8b00" }} />,
    },
    ];

const devTools = [
    {
      name: "MySQL",
      icon: <SiMysql className="w-10 h-10" style={{ color: "#4479a1" }} />,
    },
    {
      name: "Git",
      icon: <SiGit className="w-10 h-10" style={{ color: "#f05032" }} />,
    },
    {
      name: "Github",
      icon: <SiGithub className="w-10 h-10 text-foreground" />,
    },
    {
      name: "Flask",
      icon: <SiFlask className="w-10 h-10 text-foreground" />,
    },
    {
      name: "React",
      icon: <FaReact className="w-10 h-10" style={{ color: "#61dafb" }} />,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="w-10 h-10" style={{ color: "#339933" }} />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="w-10 h-10" style={{ color: "#ffca28" }} />,
    },
    {
      name: "Pandas",
      icon: <SiPandas className="w-10 h-10" style={{ color: "#150458" }} />,
    },
    {
      name: "NumPy",
      icon: <SiNumpy className="w-10 h-10" style={{ color: "#013243" }} />,
    },
]

export const Skills = () => {
    return (
    <section className="py-16 bg-background" id="skills">
      <div className="container max-w-6xl md:mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground animate-fade-in">My <span className="text-primary">Skills</span></h2>

        {/* Languages Section */}
        <div className="mb-16 animate-fade-in-delay-1">
          <h3 className="text-2xl font-semibold mb-8 text-foreground/80 text-center">Programming Languages</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-xl p-6 card-hover animate-float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  {skill.icon && (
                    <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                  )}
                  <span className="font-medium text-foreground text-sm">{skill.name}</span>
                </div>
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Dev Tools Section */}
        <div className="animate-fade-in-delay-2">
          <h3 className="text-2xl font-semibold mb-8 text-foreground/80 text-center">Developer Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {devTools.map((tool, index) => (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-xl p-6 card-hover animate-float"
                style={{ animationDelay: `${(index + skills.length) * 0.1}s` }}
              >
                <div className="text-center">
                  {tool.icon && (
                    <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {tool.icon}
                    </div>
                  )}
                  <span className="font-medium text-foreground text-sm">{tool.name}</span>
                </div>
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}