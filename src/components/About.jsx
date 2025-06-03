import { Briefcase, Code, User } from "lucide-react"

export const About = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold"></h3>
                    <p className="text-muted-foreground">
                        I'm a student at the University of Michigan majoring in Computer Science
                        and minoring in Mathematics. I'm currently very interested in systems and cloud computing, financial markets,
                        machine learning and abstract mathematics. In my free time, you'll catch me on the basketball courts, at my desk drawing
                        or outside reading.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button ">
                            {" "}
                            Get In Touch
                        </a>
                        <a 
                        className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                        >
                            Resume
                        </a>
                    </div>
                </div>
                <div className="w-full h-60">
                    <img src="/images/Rayan.jpeg" alt="My Photo" className="w-full h-full object-cover rounded-lg"/>
                </div>
            </div>
        </div>
    </section>
}