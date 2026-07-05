import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  ArrowRight,
  Code2,
  Database,
  Layout,
  Server,
  Wrench,
  GraduationCap,
  Award,
  Briefcase,
  Sparkles,
  Send,
  MapPin,
  Phone,
  CheckCircle2,
  Menu,
  X,
  Users,
} from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { sendContactMessage } from "@/lib/contact.functions";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import avatar from "@/assets/avatar.png";
import heroBg from "@/assets/hero-bg.jpg";
import projectSocial from "@/assets/project-social.jpg";
import projectCinema from "@/assets/project-cinema.jpg";
import projectBakery from "@/assets/project-bakery.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ahmad Shuman — Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Ahmad Shuman — full-stack developer building modern, responsive web applications with React, Node.js, and TypeScript.",
      },
      { property: "og:title", content: "Ahmad Shuman — Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Projects, skills, certificates and experience of a junior full-stack developer specializing in React and Node.js.",
      },
    ],
  }),
  component: Index,
});

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const SKILLS: { group: string; icon: typeof Code2; items: string[] }[] = [
  {
    group: "Programming Languages",
    icon: Code2,
    items: ["Java", "JavaScript", "SQL", "HTML5", "CSS3"],
  },
  {
    group: "Frontend Development",
    icon: Layout,
    items: [
      "React.js",
      "Tailwind CSS",
      "Bootstrap 5",
      "Responsive Web Design",
      "UI Development",
      "Component-Based Development",
    ],
  },
  {
    group: "Backend Development",
    icon: Server,
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication & Authorization",
      "Server-Side Development",
    ],
  },
  {
    group: "Databases",
    icon: Database,
    items: ["MongoDB", "SQL", "Database Design", "CRUD Operations"],
  },
  {
    group: "Development Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "Postman", "Vercel", "VS Code", "Antigravity"],
  },
  {
    group: "Software Engineering",
    icon: Code2,
    items: [
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms",
      "Debugging",
      "Testing",
    ],
  },
  {
    group: "AI & Development Tools",
    icon: Sparkles,
    items: [
      "ChatGPT",
      "Claude",
      "Gemini",
      "GitHub Copilot",
      "Blackbox AI",
      "Prompt Engineering",
      "AI-Assisted Development",
    ],
  },
  {
    group: "Soft Skills",
    icon: Users,
    items: [
      "Problem Solving",
      "Team Collaboration",
      "Communication",
      "Time Management",
      "Continuous Learning",
      "Critical Thinking",
      "Adaptability",
    ],
  },
];

const PROJECTS = [
  {
    title: "Social Media App",
    type: "Full-Stack Application",
    image: projectSocial,
    description:
      "Developed a full-stack social media application that enables users to create accounts, share posts, interact with content, and connect with other users through a responsive interface with secure authentication and MongoDB database integration.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT"],
    demo: "https://social-media-1-zeta.vercel.app/",
    github: "https://github.com/ahmadshuman2025-cyber/socialMedia",
  },
  {
    title: "Cinema Booking Website",
    type: "Full-Stack Application",
    image: projectCinema,
    description:
      "Developed a full-stack cinema web application that allows users to browse movies, view movie details, and interact with a modern booking interface. Built using React.js, Node.js, Express.js, and MongoDB with responsive design, secure backend functionality, and database integration.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    demo: "https://cinema1-one.vercel.app/",
    github: "https://github.com/ahmadshuman2025-cyber/Cinema",
  },
  {
    title: "Lamar Bakery & Café",
    type: "Full-Stack Application",
    image: projectBakery,
    description:
      "Developed a full-stack bakery and café web application featuring a modern, responsive user interface. Built using React.js, Node.js, Express.js, and MongoDB with seamless frontend-backend integration and efficient database management.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    demo: "https://lamar-bakery-cafe.vercel.app/",
    github: "https://github.com/ahmadshuman2025-cyber/lamar-bakery-cafe",
  },
];

const CERTIFICATES = [
  {
    name: "Web Design & Front-End Development",
    issuer: "Multi-Aid Programs (MAPs)",
    year: "2025",
  },
  {
    name: "Code to Career Training Program",
    issuer: "Multi-Aid Programs (MAPs)",
    year: "2025",
  },
  {
    name: "Higher Education Guidance Programme",
    issuer: "MOSAIK NGO",
    year: "2025",
  },
];
const EDUCATION = [
  {
    school: "Lebanese International University (LIU), Bekaa, Lebanon",
    degree: "Bachelor of Science in Computer Engineering",
    period: "October 2024 — August 2027",
    detail: `Computer Engineering student with coursework in software engineering, data structures, algorithms, database systems, web development, computer networks, and object-oriented programming.

• Developed full-stack web applications using React.js, Node.js, MongoDB, and SQL.
• Applied software engineering principles through academic and personal development projects.
• Experienced with Git, GitHub, Postman, Vercel, and modern web development workflows.`,
  },
  {
    school: "Independent Learning & Professional Development",
    degree: "Full-Stack Web Development",
    period: "2023 — Present",
    detail:
      "Continuously expanding my skills through hands-on projects, technical documentation, AI-assisted development, open-source resources, and modern web technologies including React.js, Node.js, Express.js, MongoDB, and Tailwind CSS.",
  },
];

const EXPERIENCE = [
  {
    role: "Web Developer Intern",
    company: "Multi-Aid Programs (MAPs), Taanayel, Bekaa, Lebanon",
    period: "June 2025 — September 2025",
    bullets: [
      "Contributed to the development and maintenance of responsive web applications using modern frontend and backend technologies.",
      "Developed responsive web applications using HTML, CSS, JavaScript, React.js, and Tailwind CSS.",
      "Assisted in backend development, REST API integration, and database management using Node.js, Express.js, and MongoDB.",
      "Improved website functionality, performance, and user experience through debugging, testing, and optimization.",
      "Collaborated with multidisciplinary teams to deliver user-focused digital solutions while following modern software development practices.",
    ],
  },
];

function Index() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Toaster />
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-emerald via-neon to-emerald-glow"
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <BackgroundDecor />
    </div>
  );
}

/* ---------------- Background ---------------- */
function BackgroundDecor() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--emerald) 1px, transparent 1px), linear-gradient(to bottom, var(--emerald) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed -top-40 -left-40 -z-10 h-[480px] w-[480px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.78 0.20 160 / 0.35), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed -bottom-40 -right-40 -z-10 h-[520px] w-[520px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.70 0.18 180 / 0.30), transparent 70%)",
        }}
      />
    </>
  );
}

/* ---------------- Navbar ---------------- */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
        <div
          className={`flex w-full items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-all ${
            scrolled ? "glass" : ""
          }`}
        >
          <button
            onClick={() => go("home")}
            className="flex items-center gap-2 text-sm font-semibold tracking-tight"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald/15 text-emerald glow-ring">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="font-display text-base">
              Ahmad<span className="text-emerald">_Shuman</span>
            </span>
          </button>
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {n.label}
              </button>
            ))}
            <button
              onClick={() => go("contact")}
              className="ml-2 inline-flex items-center gap-1 rounded-lg bg-emerald px-3 py-2 text-sm font-medium text-emerald-foreground transition-transform hover:-translate-y-0.5"
            >
              Hire me <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </nav>
          <button
            className="rounded-lg p-2 text-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="mx-auto mt-2 max-w-6xl px-4 md:hidden">
          <div className="glass flex flex-col gap-1 rounded-2xl p-2">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="rounded-lg px-3 py-2 text-left text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
              >
                {n.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- Section helper ---------------- */
function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative scroll-mt-24 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-14"
        >
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-3 py-1 text-xs font-medium text-emerald">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> {eyebrow}
            </span>
          )}
          <h2 className="mt-3 text-3xl font-bold md:text-4xl lg:text-5xl">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="home" className="relative px-4 pb-12 pt-32 md:pt-40">
      <img
        src={heroBg}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
        width={1536}
        height={1024}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(180deg, transparent, var(--background) 85%)",
        }}
      />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="min-w-0"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-3 py-1 text-xs font-medium text-emerald">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
            </span>
            Available for junior developer roles
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-gradient">Ahmad Shuman</span>
            <br />
            <span className="text-foreground/90">I build full-stack web applications.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
            Computer Engineering student with experience in full-stack web development using
            React.js, Node.js, Express.js, MongoDB, and SQL. Skilled in building responsive
            applications and REST APIs through academic projects and internship experience. Seeking
            an opportunity to contribute to a software development team and grow as a developer.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald px-5 py-3 text-sm font-semibold text-emerald-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/Ahmad_Shuman_CV.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-emerald/40 hover:bg-white/10"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
            <div className="ml-1 flex items-center gap-2">
              <SocialIcon href="https://github.com/ahmadshuman2025-cyber" label="GitHub">
                <Github className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon
                href="https://www.linkedin.com/in/ahmad-shuman-383a403b4"
                label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href="mailto:ahmadshuman2025@gmail.com" label="Email">
                <Mail className="h-4 w-4" />
              </SocialIcon>
            </div>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 sm:max-w-md">
            {[
              { k: "4+", v: "Projects built" },
              { k: "2027", v: "Computer Engineering" },
              { k: "100%", v: "Responsive" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-xl p-3 text-center">
                <dt className="text-xl font-bold text-emerald">{s.k}</dt>
                <dd className="mt-0.5 text-[11px] text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-emerald/20 blur-3xl" />
          <div className="glass animate-float rounded-[2rem] p-6">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-emerald/10 to-transparent">
              <img
                src={avatar}
                alt="Portrait of Ahmad Shuman"
                className="mx-auto h-64 w-64 object-contain"
                width={768}
                height={768}
              />
            </div>
            <div className="mt-4 flex items-center justify-between rounded-xl bg-white/5 p-3 text-xs">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald" />
                <span className="font-medium">Open to work</span>
              </div>
              <span className="text-muted-foreground">Remote / Hybrid</span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[11px]">
              {["React", "Node.js", "MongoDB"].map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-emerald/20 bg-emerald/5 py-1.5 text-emerald"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-muted-foreground transition-colors hover:border-emerald/40 hover:text-emerald"
    >
      {children}
    </a>
  );
}

/* ---------------- About ---------------- */
function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      title="Computer Engineering Student & Full-Stack Developer"
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-6 md:p-8"
        >
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            I'm a Computer Engineering student at the Lebanese International University with a
            passion for building modern, responsive, and user-friendly web applications. I enjoy
            transforming ideas into real-world software using React.js, Node.js, Express.js,
            MongoDB, and SQL.
          </p>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Through my internship and personal projects, I've gained hands-on experience developing
            full-stack applications, REST APIs, and responsive interfaces. I'm continuously
            improving my skills, learning new technologies, and looking for an opportunity to
            contribute to a professional software development team.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { k: "Location", v: "Lebanon" },
              { k: "Education", v: "Computer Engineering" },
              { k: "Stack", v: "MERN" },
              { k: "Status", v: "Open to Work" },
            ].map((i) => (
              <div key={i.k} className="rounded-xl border border-white/10 bg-white/5 p-3">
                <div className="text-[11px] uppercase tracking-wide text-muted-foreground">
                  {i.k}
                </div>
                <div className="mt-1 text-sm font-semibold">{i.v}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-2xl p-6 md:p-8"
        >
          <h3 className="text-lg font-semibold">What I Do</h3>

          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {[
              "Build responsive web applications with React & Tailwind CSS",
              "Develop REST APIs using Node.js & Express.js",
              "Design and manage MongoDB & SQL databases",
              "Write clean, maintainable, and scalable code",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}

/* ---------------- Skills ---------------- */
function Skills() {
  return (
    <Section id="skills" eyebrow="Tech stack" title="Skills I use every day.">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SKILLS.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.group}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="glass glass-hover rounded-2xl p-5"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald/15 text-emerald glow-ring">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold">{s.group}</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------------- Projects ---------------- */
function Projects() {
  return (
    <Section id="projects" eyebrow="Selected work" title="Projects I've built.">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass glass-hover group flex flex-col overflow-hidden rounded-2xl"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={p.image}
                alt={`${p.title} preview`}
                loading="lazy"
                width={1280}
                height={800}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <span className="absolute left-3 top-3 rounded-full border border-emerald/30 bg-background/60 px-2.5 py-1 text-[11px] font-medium text-emerald backdrop-blur">
                {p.type}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center gap-2 pt-1">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-emerald px-3 py-2 text-xs font-semibold text-emerald-foreground transition-transform hover:-translate-y-0.5"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:border-emerald/40 hover:text-emerald"
                >
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Certificates ---------------- */
function Certificates() {
  return (
    <Section id="certificates" eyebrow="Credentials" title="Certificates & courses.">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CERTIFICATES.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="glass glass-hover rounded-2xl p-5"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald/15 text-emerald glow-ring">
              <Award className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-base font-semibold leading-snug">{c.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
            <p className="mt-3 text-xs text-emerald">{c.year}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Education ---------------- */
function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Where I studied.">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {EDUCATION.map((e, i) => (
          <motion.div
            key={e.school}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald/15 text-emerald glow-ring">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="truncate text-base font-semibold">{e.degree}</h3>
                <p className="truncate text-sm text-muted-foreground">{e.school}</p>
              </div>
            </div>
            <p className="mt-4 text-xs font-medium uppercase tracking-wide text-emerald">
              {e.period}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{e.detail}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Experience ---------------- */
function Experience() {
  return (
    <Section id="experience" eyebrow="Experience & training" title="Where I've worked and trained.">
      <ol className="relative ml-3 space-y-6 border-l border-emerald/20 pl-6">
        {EXPERIENCE.map((x, i) => (
          <motion.li
            key={x.role}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="relative"
          >
            <span className="absolute -left-[33px] top-1.5 grid h-6 w-6 place-items-center rounded-full border border-emerald/40 bg-background">
              <Briefcase className="h-3 w-3 text-emerald" />
            </span>
            <div className="glass rounded-2xl p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold">{x.role}</h3>
                <span className="text-xs font-medium text-emerald">{x.period}</span>
              </div>
              <p className="text-sm text-muted-foreground">{x.company}</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {x.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (!form.email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (form.message.trim().length < 10) {
      toast.error("Message must be at least 10 characters.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mykqogng", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Message failed to send. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const field =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-emerald/60 focus:outline-none focus:ring-2 focus:ring-emerald/30";

  return (
    <Section id="contact" eyebrow="Get in touch" title="Let's build something great together.">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.3fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass flex flex-col gap-5 rounded-2xl p-6 md:p-8"
        >
          <p className="text-sm text-muted-foreground">
            I'm currently looking for junior full-stack / front-end roles. Feel free to send my
            CV-attached email or use the form — I usually reply within 24 hours.
          </p>

          <div className="space-y-3">
            <ContactRow
              icon={<Mail className="h-4 w-4" />}
              label="Email"
              value="ahmadshuman2025@gmail.com"
            />
            <ContactRow icon={<Phone className="h-4 w-4" />} label="Phone" value="+961 3 023 200" />
            <ContactRow icon={<MapPin className="h-4 w-4" />} label="Location" value="Lebanon" />
          </div>

          <div className="flex items-center gap-2 pt-2">
            <SocialIcon href="https://github.com/ahmadshuman2025-cyber" label="GitHub">
              <Github className="h-4 w-4" />
            </SocialIcon>

            <SocialIcon href="https://www.linkedin.com/in/ahmad-shuman-383a403b4" label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </SocialIcon>

            <SocialIcon href="mailto:ahmadshuman2025@gmail.com" label="Email">
              <Mail className="h-4 w-4" />
            </SocialIcon>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-2xl p-6 md:p-8"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-muted-foreground">Name</span>
              <input
                required
                maxLength={100}
                className={field}
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-muted-foreground">Email</span>
              <input
                required
                type="email"
                maxLength={255}
                className={field}
                placeholder="you@company.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </label>
          </div>

          <label className="mt-4 block">
            <span className="mb-1.5 block text-xs font-medium text-muted-foreground">Subject</span>
            <input
              required
              maxLength={150}
              className={field}
              placeholder="Job opportunity, collaboration, etc."
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
            />
          </label>

          <label className="mt-4 block">
            <span className="mb-1.5 block text-xs font-medium text-muted-foreground">Message</span>
            <textarea
              required
              minLength={10}
              maxLength={2000}
              rows={5}
              className={`${field} resize-none`}
              placeholder="Tell me about the role or project…"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald px-5 py-3 text-sm font-semibold text-emerald-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {loading ? (
              "Sending…"
            ) : (
              <>
                <Send className="h-4 w-4" /> Send message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function ContactRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-emerald/15 text-emerald">
        {icon}
      </span>

      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-wide text-muted-foreground">{label}</div>
        <div className="truncate text-sm font-medium">{value}</div>
      </div>
    </div>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-white/5 px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Ahmad Shuman. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Built with <span className="text-emerald">React</span>, Vite & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
