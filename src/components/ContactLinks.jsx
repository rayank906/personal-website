import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { label: "Email", href: "mailto:rayankdm@umich.edu", icon: Mail },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rayan-kamdem-301143291/", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/rayank906", icon: Github },
];

export const ContactLinks = () => {
  return (
    <div className="flex items-center gap-4">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="text-muted hover:text-accent transition-colors"
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
};
