import { experience } from "@/data/experience";

export const Experience = () => {
  return (
    <section className="container py-20">
      <h1 className="text-3xl font-bold mb-10">Experience</h1>

      <div className="flex flex-col gap-8">
        {experience.map((entry) => (
          <div key={entry.id}>
            <div className="flex items-baseline gap-x-4">
              <h2 className="text-accent font-semibold">{entry.company}</h2>
              <span className="ml-auto shrink-0 text-sm text-muted">{entry.period}</span>
            </div>
            <p className="italic text-muted">{entry.role}</p>
            <p className="text-foreground/90 mt-1">{entry.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
