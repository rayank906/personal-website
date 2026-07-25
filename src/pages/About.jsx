import { ContactLinks } from "@/components/ContactLinks";

export const About = () => {
  return (
    <section className="container py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-2">Rayan Kamdem</h1>
      <p className="text-lg text-muted mb-6">Computer Science + Math @ University of Michigan</p>

      <ContactLinks />

      <p className="text-foreground/90 leading-relaxed mt-8 max-w-xl">
        I'm a student at the University of Michigan majoring in Computer Science
        with a minor in Mathematics. I have experience in backend engineering and
        ML systems. In my free time, you'll catch me on the basketball courts or
        at my desk drawing.
      </p>
    </section>
  );
};
