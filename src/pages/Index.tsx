import { useEffect } from "react";
import profileHero from "@/assets/profile-hero.jpg";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { toast } from "@/hooks/use-toast";
const projects = [{
  title: "Realtime Chat App",
  description: "WebSocket-powered chat with rooms, typing indicators, and message persistence.",
  tags: ["React", "TypeScript", "WebSocket"],
  link: "#"
}, {
  title: "E‑commerce Dashboard",
  description: "Analytics, orders, and inventory with interactive charts and filters.",
  tags: ["React", "Recharts", "Tailwind"],
  link: "#"
}, {
  title: "Markdown Blog Engine",
  description: "Static blog pipeline with MDX, search, and syntax highlighting.",
  tags: ["MDX", "SEO", "Content"],
  link: "#"
}, {
  title: "Task Automation CLI",
  description: "Node-based CLI to scaffold projects and automate releases.",
  tags: ["Node", "CLI", "DX"],
  link: "#"
}, {
  title: "Portfolio Generator",
  description: "Generate beautiful portfolios from JSON using templates.",
  tags: ["Templates", "SSR", "Design"],
  link: "#"
}, {
  title: "Image Optimizer",
  description: "On-the-fly image transforms with caching and responsive sources.",
  tags: ["Images", "CDN", "Perf"],
  link: "#"
}];
const Index = () => {
  useEffect(() => {
    // Scroll reveal animations using IntersectionObserver
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(entries => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.remove("opacity-0", "translate-y-3");
          e.target.classList.add("animate-fade-in");
          io.unobserve(e.target);
        }
      }
    }, {
      threshold: 0.1
    });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  const onHeroMove: React.MouseEventHandler<HTMLDivElement> = e => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
  };
  const onSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon."
    });
    (e.currentTarget as HTMLFormElement).reset();
  };
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Full Stack Web Developer",
    jobTitle: "Software Engineer",
    url: "/",
    sameAs: ["https://github.com/", "https://www.linkedin.com/"]
  };
  return <>
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify(jsonLd)
    }} />

      <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-background/60 supports-[backdrop-filter]:backdrop-blur">
        <nav className="max-w-6xl mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <a href="#home" className="font-semibold tracking-tight story-link">Pavan Kona</a>
            <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
              <li><a href="#home" className="hover-scale story-link">Home</a></li>
              <li><a href="#about" className="hover-scale story-link">About</a></li>
              <li><a href="#projects" className="hover-scale story-link">Projects</a></li>
              <li><a href="#contact" className="hover-scale story-link">Contact</a></li>
            </ul>
            <a href="#contact" className="md:hidden inline-flex items-center gap-2 text-sm hover-scale"><Mail className="h-4 w-4" /> Contact</a>
          </div>
        </nav>
      </header>

      <main id="home" className="min-h-screen bg-gradient-to-b from-background to-muted/10">
        {/* Hero */}
        <section aria-label="Hero" onMouseMove={onHeroMove} className="relative pt-32 pb-24 border-b border-border/60">
          {/* Interactive glow following pointer */}
          <div className="pointer-events-none absolute inset-0 opacity-30" style={{
          background: "radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), hsl(var(--brand-2) / 0.15), transparent 40%)"
        }} />

          <div className="relative max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div data-reveal className="opacity-0 translate-y-3">
              <p className="text-sm tracking-widest text-muted-foreground mb-3">FULL STACK WEB DEVELOPER</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 bg-gradient-to-r from-brand-1 to-brand-2 bg-clip-text text-transparent">
                Building reliable web experiences end‑to‑end
              </h1>
              <p className="text-muted-foreground mb-8 max-w-prose">
                I design, build, and ship modern web apps with performance, accessibility, and developer experience in mind.
              </p>

              <div className="flex items-center gap-4 mb-10">
                <a href="/resume.pdf" download className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-foreground bg-gradient-to-r from-brand-1 to-brand-2 hover:from-brand-2 hover:to-brand-1 transition-colors shadow-[var(--shadow-elegant)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  Download Resume
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium border border-border hover:bg-muted/30 transition-colors">
                  Contact Me
                </a>
              </div>

              <div className="flex items-center gap-5 text-muted-foreground">
                <a href="#" aria-label="GitHub" className="hover-scale"><Github className="h-5 w-5" /></a>
                <a href="#" aria-label="LinkedIn" className="hover-scale"><Linkedin className="h-5 w-5" /></a>
                <a href="#contact" aria-label="Email" className="hover-scale"><Mail className="h-5 w-5" /></a>
              </div>
            </div>

            <div data-reveal className="opacity-0 translate-y-3">
              
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" aria-label="About" className="py-20">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
            <div data-reveal className="opacity-0 translate-y-3">
              <h2 className="text-3xl font-semibold mb-4">About Me</h2>
              <p className="text-muted-foreground mb-6">
                I craft scalable frontends and robust backends. I love type-safe APIs, clean architectures, and thoughtful UI.
              </p>

              <div className="grid grid-cols-1 gap-4">
                <article className="bg-card/50 border border-border/60 rounded-xl p-5">
                  <h3 className="font-medium mb-2">Education</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><span className="text-foreground">B.Sc. Computer Science</span> — State University (2016–2020)</li>
                    <li><span className="text-foreground">Full Stack Nanodegree</span> — Online Institute (2021)</li>
                    <li><span className="text-foreground">Design Systems</span> — Professional Course (2022)</li>
                  </ul>
                </article>
              </div>
            </div>

            <div data-reveal className="opacity-0 translate-y-3">
              <div className="relative mx-auto w-full max-w-md rounded-2xl overflow-hidden border border-border/60">
                <img src={profileHero} alt="Developer portrait used again for the about section" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" aria-label="Projects" className="py-20 border-t border-border/60">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-10">Recent Projects</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map(p => <article key={p.title} data-reveal className="opacity-0 translate-y-3 group bg-card/50 border border-border/60 rounded-xl p-6 hover:shadow-[var(--shadow-elegant)] transition-shadow">
                  <div className="mb-4 h-36 rounded-lg bg-gradient-to-br from-brand-1/30 to-brand-2/30 border border-border/60 flex items-center justify-center">
                    <ExternalLink className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <h3 className="font-medium mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map(t => <span key={t} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground border border-border/60">{t}</span>)}
                  </div>
                  <a href={p.link} className="text-sm story-link">View project</a>
                </article>)}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" aria-label="Contact" className="py-20 border-t border-border/60">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-6">Get in touch</h2>
            <p className="text-muted-foreground mb-8">Have a question or want to work together? Send a message below.</p>

            <form onSubmit={onSubmit} className="grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <label className="grid gap-2 text-sm">
                  <span>Name</span>
                  <input required name="name" className="h-11 rounded-md bg-background border border-input px-3 outline-none focus-visible:ring-2 focus-visible:ring-ring" />
                </label>
                <label className="grid gap-2 text-sm">
                  <span>Email</span>
                  <input required type="email" name="email" className="h-11 rounded-md bg-background border border-input px-3 outline-none focus-visible:ring-2 focus-visible:ring-ring" />
                </label>
              </div>
              <label className="grid gap-2 text-sm">
                <span>Message</span>
                <textarea required name="message" rows={5} className="rounded-md bg-background border border-input p-3 outline-none focus-visible:ring-2 focus-visible:ring-ring" />
              </label>
              <div className="flex items-center justify-between gap-4 pt-2">
                <button type="submit" className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-foreground bg-gradient-to-r from-brand-1 to-brand-2 hover:from-brand-2 hover:to-brand-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  Send Message
                </button>
                <a href="/resume.pdf" download className="text-sm story-link">Download Resume</a>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 py-10 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Full Stack Web Developer — Built with a modern dark theme.</p>
      </footer>
    </>;
};
export default Index;