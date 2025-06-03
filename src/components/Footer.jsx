import { Github, GithubIcon, Linkedin, Mail } from "lucide-react"

export const Footer = () => {
    return <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
        {" "}
        <p className="text-sm text-muted-foreground">
          Made by Rayan Kamdem &copy; {new Date().getFullYear()} 
        </p>

        <div>
          <h4 className="font-medium mb-2"> Connect With Me</h4>
          <div className="flex space-x-4 justify-center">
            <a href="https://www.linkedin.com/in/rayan-kamdem-301143291/" target="_blank">
              <Linkedin />
            </a>
            <a href="mailto:rayankdm@umich.edu" target="_blank">
              <Mail />
            </a>
            <a href="https://github.com/rayank906" target="_blank">
              <Github />
            </a>
          </div>
          </div>
    </footer>
}