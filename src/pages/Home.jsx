import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { NavBar } from "../components/NavBar";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground"
export const Home = () => {
    return (<div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme toggle */}
        <ThemeToggle />
        {/* Background effects */}
        <StarBackground />
        {/* Navigation Bar */}
        <NavBar />
        {/* Main Content */}
        <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </main>

        {/* Footer */}
        <Footer />
    </div>
    );
}