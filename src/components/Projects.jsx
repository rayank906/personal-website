import { Github } from "lucide-react";

const projects = [
    {
      id: 1,
      title: "Video Resizer", 
      description: "Resizer that applies the seam carving algorithm to remove the least important pixels from each frame of an MP4 file",
      image: "/images/resizerimg.png",
      tags: ["C++", "OpenCV"],
      githubUrl: "#"
    },

    {
      id: 2,
      title: "Atlas Digital Internal Tool", 
      description: "React app that fetches recruiter emails and draft messages using ApolloAI and OpenAI APIs",
      image: "/images/internal.png",
      tags: ["JavaScript", "React.js", "Node.js", "Express.js", "Firebase"],
      githubUrl: "#"
    },

    {
      id: 3,
      title: "Subscription Reminder System", 
      description: "Sends automated email and SMS reminders to users when their subscriptions end dates are approaching",
      image: "/images/fronttieres.png",
      tags: ["Python", "Flask", "MySQL", "phpMyAdmin"],
    },

    {
      id: 4,
      title: "Reddit Post Classifier", 
      description: "Designed a classifier that uses the bag-of-words model and log-probability scores to label finance posts on reddit",
      image: "/images/rfinance.png",
      tags: ["C++"],
      githubUrl: ""
    },

    {
      id: 5,
      title: "Personal Website", 
      description: "Single-page blue-themed website",
      image: "/images/me.png",
      tags: ["JavaScript", "React.js", "TailwindCSS", "Vite"],
      githubUrl: "#"
    },
]
export const Projects = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:4xl font-bold mb-4 text-center"> 
                {" "}
                Featured <span className="text-primary">Projects</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key}
                    className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>
                        <div className="p-3">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs border font-medium rounded-full bg-primary/20 text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-1">
                            {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                        </p>
                        <div className=""> {/* GITHUB BUTTON ON PROJECTS */}
                                <div className="flex space-x-3">
                                    <a href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    target="_blank">
                                        <Github />
                                    </a>
                                </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
};