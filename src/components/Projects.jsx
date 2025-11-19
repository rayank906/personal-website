import { Github, GithubIcon } from "lucide-react";

const projects = [
    {
      id: 1,
      title: "Crypto Price Prediction", 
      description: "FastAPI endpoint that predicts bitcoin returns using an XGBoost model",
      image: "/images/crypto.png",
      tags: ["Python", "FastAPI", "Pandas", "XGBoost", "AWS Lambda"],
      githubUrl: "https://github.com/rayank906/btc_api"
    },

    {
      id: 2,
      title: "Order Book Simulator", 
      description: "Price-time priority matching engine that processes data and executes trades",
      image: "/images/order_book.png",
      tags: ["C++", "Priority Queues"],
    },

    {
      id: 3,
      title: "Video Resizer", 
      description: "Resizer that applies the seam carving algorithm to remove the least important pixels from each frame of an MP4 file",
      image: "/images/resizerimg.png",
      tags: ["C++", "OpenCV", "OpenMP"],
      githubUrl: "https://github.com/rayank906/resizer"
    },

    {
      id: 4,
      title: "Distracted Driver Classification", 
      description: "Convolutional neural network model that classifies distracted driver images into categories",
      image: "/images/distracted-driving.jpg",
      tags: ["Python", "Tensorflow", "Keras", "Scikit-learn", "Seaborn"],
    },

    {
      id: 5,
      title: "Personal Website", 
      description: "Single-page blue-themed website",
      image: "/images/me.png",
      tags: ["JavaScript", "React.js", "TailwindCSS", "Vite"],
      githubUrl: "https://github.com/rayank906/personal-website"
    },
]

export const Projects = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                Featured <span className="text-primary">Projects</span>
            </h2>

            <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects showcasing my experience across different technologies.
            </p>

            <div className="flex flex-col gap-6">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs border border-border card-hover flex flex-col md:flex-row">
                        {/* Project Image */}
                        <div className="w-full md:w-48 h-48 md:h-auto overflow-hidden flex-shrink-0">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        {/* Project Content */}
                        <div className="p-5 flex flex-col justify-between flex-grow">
                            <div>
                                <h3 className="text-lg md:text-xl font-semibold mb-2 text-foreground">
                                    {project.title}
                                </h3>
                                <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="px-2.5 py-1 text-xs border border-primary/30 font-medium rounded-full bg-primary/10 text-primary">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* GitHub Button */}
                            <div className="flex items-center gap-2 justify-center">
                                {project.githubUrl && project.githubUrl !== "" && (
                                    <a 
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-md hover:scale-105 active:scale-95"
                                    >
                                        <Github size={18} />
                                        View on GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>;
};