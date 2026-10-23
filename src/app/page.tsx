
"use client";

import { useState, type FormEvent } from "react";

const emailAddress = "namraalie048@gmail.com";
const githubUrl = "https://github.com/namraali2011";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  {
    title: "Artificial Intelligence",
    number: "01",
    symbol: "✳",
    tags: [
      "Python",
      "Machine Learning",
      "Natural Language Processing",
      "Data Preprocessing",
      "AI Fundamentals",
      "Chatbot Development",
    ],
  },
  {
    title: "Data & Analytics",
    number: "02",
    symbol: "◈",
    tags: [
      "Pandas",
      "NumPy",
      "Microsoft Excel",
      "SQL",
      "Data Visualization",
      "Statistical Analysis",
    ],
  },
  {
    title: "Software & Web",
    number: "03",
    symbol: "⌘",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Next.js",
      "Tailwind CSS",
      "MySQL",
      "Git & GitHub",
    ],
  },
];

const projects = [
  {
    index: "01",
    title: "AI-Based Twitter Sentiment Analysis",
    category: "NATURAL LANGUAGE PROCESSING",
    description:
      "My undergraduate thesis explored sentiment analysis of Twitter data using Python and machine learning. The project focused on text preprocessing, sentiment classification and interpreting patterns in social media opinions.",
    tags: ["Python", "NLP", "Machine Learning"],
    icon: "◉",
    theme: "violet",
    status: "Undergraduate Thesis",
  },
  {
    index: "02",
    title: "Heart Disease Detection System",
    category: "PREDICTIVE MACHINE LEARNING",
    description:
      "A capstone project completed during Samsung Innovation Campus AI training. It explored how structured datasets, preprocessing and predictive models could be used for heart disease classification.",
    tags: ["Python", "Predictive Models", "AI"],
    icon: "♡",
    theme: "emerald",
    status: "Academic Capstone",
  },
  {
    index: "03",
    title: "Conversational AI Exploration",
    category: "CHATBOT DEVELOPMENT",
    description:
      "An ongoing learning initiative focused on chatbot interfaces, Python-based development, conversational workflows and the integration of AI-powered responses into useful applications.",
    tags: ["Python", "Chatbots", "AI APIs"],
    icon: "⌘",
    theme: "violet",
    status: "Currently Exploring",
  },
];

const certifications = [
  {
    title: "Artificial Intelligence",
    issuer: "Samsung Innovation Campus",
    year: "2022",
    type: "AI & MACHINE LEARNING",
    link: "https://drive.google.com/file/d/1qF9rVKb1JJMlt6uZ46SRYk3Ff-s4hZ5z/view",
  },
  {
    title: "Twitter Sentiment Analysis",
    issuer: "Coursera Guided Project",
    year: "2023",
    type: "NATURAL LANGUAGE PROCESSING",
    link: "https://coursera.org/verify/Z8V3TQP68AQ2",
  },
  {
    title: "AI for Everyone",
    issuer: "Coursera",
    year: "2023",
    type: "ARTIFICIAL INTELLIGENCE",
    link: "https://coursera.org/verify/BY8CEY7KBN86",
  },
  {
    title: "Foundations: Data, Data, Everywhere",
    issuer: "Google / Coursera",
    year: "2023",
    type: "DATA ANALYTICS",
    link: "https://coursera.org/verify/BQLXD6CUN9F5",
  },
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {diagonal ? (
        <>
          <path d="M7 17 17 7" />
          <path d="M8 7h9v9" />
        </>
      ) : (
        <>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </>
      )}
    </svg>
  );
}

function SectionHeading({
  index,
  eyebrow,
  title,
  highlight,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
}) {
  return (
    <div className="mb-10 md:mb-14">
      <div className="mb-5 flex items-center gap-3">
        <span className="font-mono text-xs font-bold tracking-widest text-violet-600">
          {index} / {eyebrow}
        </span>
        <span className="h-px w-12 bg-violet-200" />
      </div>

      <h2 className="text-4xl font-extrabold tracking-[-0.055em] text-slate-900 sm:text-5xl lg:text-6xl">
        {title}{" "}
        <span className="premium-gradient-text">{highlight}</span>
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio enquiry from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href =
      `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#f8fafc] text-slate-900 selection:bg-violet-200 selection:text-violet-950">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 100px;
        }

        body {
          margin: 0;
          background: #f8fafc;
        }

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        :focus-visible {
          outline: 3px solid #7c3aed;
          outline-offset: 4px;
        }

        .premium-gradient-text {
          background: linear-gradient(
            110deg,
            #7c3aed 0%,
            #8b5cf6 45%,
            #059669 100%
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .premium-card {
          background: rgba(255, 255, 255, 0.86);
          border: 1px solid rgba(148, 163, 184, 0.20);
          box-shadow:
            0 4px 25px rgba(15, 23, 42, 0.025),
            0 15px 50px rgba(15, 23, 42, 0.025);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .hover-lift {
          transition:
            transform 350ms cubic-bezier(0.2, 0.8, 0.2, 1),
            box-shadow 350ms ease,
            border-color 350ms ease,
            background-color 350ms ease;
        }

        .hover-lift:hover {
          transform: translateY(-6px);
          border-color: rgba(139, 92, 246, 0.36);
          box-shadow:
            0 15px 45px rgba(124, 58, 237, 0.08),
            0 25px 65px rgba(15, 23, 42, 0.035);
        }

        .dot-grid {
          background-image: radial-gradient(
            rgba(100, 116, 139, 0.17) 1px,
            transparent 1px
          );
          background-size: 22px 22px;
        }

        .technical-grid {
          background-image:
            linear-gradient(
              rgba(139, 92, 246, 0.045) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(139, 92, 246, 0.045) 1px,
              transparent 1px
            );
          background-size: 36px 36px;
        }

        @keyframes float-orbit {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(3deg);
          }
        }

        @keyframes pulse-ring {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.07);
            opacity: 0.85;
          }
        }

        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .orbit-animation {
          animation: float-orbit 8s ease-in-out infinite;
        }

        .ring-animation {
          animation: pulse-ring 7s ease-in-out infinite;
        }

        .entrance-animation {
          animation: fade-up 750ms ease-out both;
        }

        .entrance-delay {
          animation-delay: 180ms;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* Accessible skip navigation */}
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-xl bg-violet-700 px-5 py-3 font-semibold text-white focus:translate-y-0"
      >
        Skip to main content
      </a>

      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-60 -top-60 h-[650px] w-[650px] rounded-full bg-violet-200/35 blur-[130px]" />
        <div className="absolute right-[-250px] top-[650px] h-[650px] w-[650px] rounded-full bg-emerald-100/60 blur-[130px]" />
        <div className="absolute left-[15%] top-[1650px] h-[500px] w-[500px] rounded-full bg-violet-100/45 blur-[140px]" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 shadow-sm backdrop-blur-xl">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
        >
          <a
            href="#home"
            className="group flex items-center gap-3 rounded-lg"
            aria-label="Namra Ali, return to home"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-lg font-bold tracking-tight text-white shadow-lg shadow-violet-200 transition-transform group-hover:rotate-6">
              N<span className="text-emerald-400">.</span>
            </span>

            <span className="flex flex-col">
              <span className="text-base font-extrabold tracking-tight text-slate-950">
                Namra Ali
              </span>
              <span className="font-mono text-[10px] tracking-wider text-slate-500">
                AI • DATA • DEVELOPMENT
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-md text-sm font-medium text-slate-600 transition-colors hover:text-violet-700 focus-visible:text-violet-700"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-200 sm:inline-flex"
          >
            Let's Talk
            <ArrowIcon diagonal />
          </a>

          <button
            type="button"
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 transition hover:bg-violet-50 lg:hidden"
          >
            <svg
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <>
                  <path d="M6 6 18 18" />
                  <path d="M18 6 6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </nav>

        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-slate-100 bg-white px-6 py-5 shadow-xl lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-violet-50 hover:text-violet-700"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main
        id="main-content"
        className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"
      >
        {/* Hero */}
        <section
          id="home"
          aria-labelledby="hero-title"
          className="grid min-h-[760px] items-center gap-12 py-20 lg:grid-cols-12 lg:gap-10 lg:py-28"
        >
          <div className="entrance-animation lg:col-span-7">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2.5 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                <span className="relative inline-flex h-full w-full rounded-full bg-emerald-600" />
              </span>
              <span className="font-mono text-[11px] font-semibold tracking-wider text-emerald-800">
                EXPLORING NEW OPPORTUNITIES
              </span>
            </div>

            <p className="mb-5 font-mono text-sm font-semibold tracking-[0.22em] text-violet-700">
              HELLO WORLD — I'M
            </p>

            <h1
              id="hero-title"
              className="text-[clamp(4.5rem,9vw,8.5rem)] font-black leading-[0.99] tracking-[-0.085em] text-slate-950"
            >
              Namra
              <br />
              <span className="premium-gradient-text">Ali.</span>
            </h1>

            <h2 className="mt-9 max-w-2xl text-[clamp(1.4rem,2.6vw,2rem)] font-semibold leading-snug tracking-tight text-slate-800">
              Exploring intelligent technology.
              <br />
              <span className="text-violet-700">
                Building meaningful solutions.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              I'm an IT graduate from the University of Sargodha
              with a growing focus on Artificial Intelligence,
              data analytics and chatbot development. I enjoy
              learning how technology transforms complex ideas
              into simple, useful experiences.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-2xl bg-violet-700 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-violet-200 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-800 hover:shadow-2xl hover:shadow-violet-200"
              >
                Explore My Projects
                <span className="transition-transform group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </a>

              <a
                href="#contact"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:bg-violet-50"
              >
                Get in Touch
                <ArrowIcon diagonal />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs font-medium text-slate-500">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-violet-500" />
                SARGODHA, PAKISTAN
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                BS INFORMATION TECHNOLOGY
              </span>
            </div>
          </div>

          {/* Futuristic Bento Visual */}
          <div className="entrance-animation entrance-delay grid grid-cols-2 gap-4 lg:col-span-5">
            <div className="premium-card hover-lift technical-grid relative col-span-2 flex min-h-[360px] flex-col items-center justify-center overflow-hidden rounded-[2rem] p-7 sm:min-h-[420px]">
              <div className="absolute left-7 top-7 flex items-center gap-2 font-mono text-[10px] font-semibold tracking-wider text-slate-500">
                <span className="h-2 w-2 rounded-full bg-violet-500" />
                DIGITAL IDENTITY / 001
              </div>

              <div className="absolute right-7 top-7 font-mono text-xs font-bold text-slate-300">
                ✳
              </div>

              <div
                aria-hidden="true"
                className="orbit-animation relative flex h-64 w-64 items-center justify-center"
              >
                <div className="ring-animation absolute inset-0 rounded-full border border-violet-200 bg-violet-100/20" />
                <div className="absolute inset-5 rounded-full border border-dashed border-violet-300" />
                <div className="absolute inset-11 rounded-full bg-gradient-to-br from-violet-200/60 to-emerald-100/80 blur-xl" />
                <div className="absolute inset-[60px] rounded-[2.5rem] border border-white/80 bg-white shadow-[0_20px_80px_rgba(124,58,237,0.13)]" />

                <div className="relative flex h-32 w-32 items-center justify-center rounded-[2.2rem] bg-slate-950 text-5xl font-black tracking-[-0.08em] text-white shadow-2xl shadow-violet-200">
                  NA<span className="text-emerald-400">.</span>
                </div>

                <div className="absolute left-2 top-12 flex h-10 w-10 items-center justify-center rounded-xl border border-violet-100 bg-white text-lg text-violet-700 shadow-lg">
                  ✧
                </div>

                <div className="absolute bottom-12 right-0 flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-100 bg-white text-lg text-emerald-700 shadow-lg">
                  ⌘
                </div>
              </div>

              <div className="relative mt-2 text-center">
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Curious by nature.
                </h3>
                <p className="mt-2 font-mono text-xs text-violet-600">
                  Inspired by intelligent technology.
                </p>
              </div>
            </div>

            <div className="premium-card hover-lift flex min-h-[170px] flex-col justify-between rounded-[1.7rem] p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100 text-2xl text-violet-700">
                ◈
              </span>

              <div>
                <p className="text-xl font-extrabold tracking-tight text-slate-900">
                  AI & Data
                </p>
                <p className="mt-1 font-mono text-[10px] leading-5 text-slate-500">
                  INTELLIGENT SYSTEMS
                </p>
              </div>
            </div>

            <div className="premium-card hover-lift flex min-h-[170px] flex-col justify-between rounded-[1.7rem] p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-2xl text-emerald-700">
                ⌘
              </span>

              <div>
                <p className="text-xl font-extrabold tracking-tight text-slate-900">
                  Build & Learn
                </p>
                <p className="mt-1 font-mono text-[10px] leading-5 text-slate-500">
                  CONTINUOUS GROWTH
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          aria-labelledby="about-title"
          className="py-20"
        >
          <SectionHeading
            index="01"
            eyebrow="ABOUT ME"
            title="More than"
            highlight="a developer."
            description="An IT background, a curious mindset and a strong interest in emerging technologies."
          />

          <div className="grid gap-5 lg:grid-cols-12">
            <article className="premium-card hover-lift rounded-[2rem] p-8 sm:p-11 lg:col-span-7">
              <div className="mb-7 inline-flex items-center gap-2 rounded-lg bg-violet-50 px-3 py-2 font-mono text-xs font-semibold text-violet-700">
                <span aria-hidden="true">&lt;/&gt;</span>
                ABOUT_ME
              </div>

              <h3
                id="about-title"
                className="max-w-lg text-2xl font-extrabold leading-snug tracking-tight text-slate-950 sm:text-3xl"
              >
                Technology makes me curious.
                <br />
                <span className="text-violet-700">
                  Possibilities keep me learning.
                </span>
              </h3>

              <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  My journey in technology began with my Bachelor's
                  degree in Information Technology at the University
                  of Sargodha. Throughout my studies, I explored
                  programming, software development, databases,
                  networking and different areas of computing.
                </p>

                <p>
                  Artificial Intelligence became a particular area
                  of interest during my undergraduate thesis on
                  Twitter sentiment analysis. I later expanded
                  this knowledge through Samsung Innovation
                  Campus training, where I explored machine
                  learning, Python, data preprocessing and
                  predictive modelling.
                </p>

                <p>
                  I am currently developing my understanding of
                  chatbot development, conversational AI and
                  data-driven applications. I am especially
                  interested in creating technology that is
                  approachable, useful and thoughtfully designed.
                </p>
              </div>
            </article>

            <div className="grid gap-5 lg:col-span-5">
              <article className="premium-card hover-lift rounded-[2rem] p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-violet-700">
                    EDUCATION
                  </span>
                  <span className="text-2xl text-violet-500">
                    ◇
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-extrabold tracking-tight text-slate-900">
                  Bachelor of Science
                  <br />
                  in Information Technology
                </h3>

                <p className="mt-3 text-sm text-slate-600">
                  University of Sargodha
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="font-mono text-xs font-semibold text-slate-500">
                    2019 — 2023
                  </span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800">
                    Completed
                  </span>
                </div>
              </article>

              <article className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl shadow-slate-200">
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-20 h-60 w-60 rounded-full bg-violet-600/30 blur-3xl"
                />

                <div className="relative">
                  <p className="font-mono text-xs font-semibold tracking-widest text-emerald-300">
                    CURRENT FOCUS
                  </p>

                  <h3 className="mt-5 text-2xl font-bold tracking-tight">
                    Where I'm heading
                    <span className="text-emerald-400">.</span>
                  </h3>

                  <div className="mt-6 space-y-4">
                    {[
                      "Artificial Intelligence",
                      "Data Analytics",
                      "Chatbot Development",
                      "Modern Web Applications",
                    ].map((interest) => (
                      <div
                        key={interest}
                        className="flex items-center gap-3 text-sm text-slate-200"
                      >
                        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-400/15 text-emerald-300">
                          ✓
                        </span>
                        {interest}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          aria-label="Skills and technologies"
          className="py-20"
        >
          <SectionHeading
            index="02"
            eyebrow="TECHNICAL TOOLKIT"
            title="Skills that"
            highlight="shape ideas."
            description="A growing collection of technologies, foundational knowledge and practical tools."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((group, index) => (
              <article
                key={group.title}
                className="premium-card hover-lift group rounded-[2rem] p-8"
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl text-3xl transition-transform duration-300 group-hover:rotate-6 ${
                      index % 2 === 0
                        ? "bg-violet-100 text-violet-700"
                        : "bg-emerald-100 text-emerald-700"
                    }`}
                    aria-hidden="true"
                  >
                    {group.symbol}
                  </div>

                  <span className="font-mono text-xs font-semibold text-slate-400">
                    / {group.number}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-extrabold tracking-tight text-slate-950">
                  {group.title}
                </h3>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {group.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-xl border border-slate-200/80 bg-slate-50 px-3.5 py-2.5 text-xs font-semibold text-slate-700 transition-all duration-300 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="premium-card mt-5 flex flex-col items-start justify-between gap-5 rounded-2xl p-6 sm:flex-row sm:items-center sm:px-8">
            <div>
              <p className="font-mono text-[11px] font-semibold tracking-wider text-slate-500">
                MY APPROACH
              </p>
              <p className="mt-2 text-sm font-medium text-slate-700">
                Practical learning, one project at a time.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 font-mono text-xs font-semibold text-violet-700">
              <span>LEARN</span>
              <span className="text-slate-300">→</span>
              <span>EXPERIMENT</span>
              <span className="text-slate-300">→</span>
              <span>BUILD</span>
              <span className="text-slate-300">→</span>
              <span className="text-emerald-700">IMPROVE</span>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          aria-label="Selected projects"
          className="py-20"
        >
          <SectionHeading
            index="03"
            eyebrow="SELECTED WORK"
            title="Ideas into"
            highlight="experiments."
            description="A selection of academic projects and ongoing explorations reflecting my interest in AI and intelligent applications."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const violet = project.theme === "violet";

              return (
                <article
                  key={project.index}
                  className="premium-card hover-lift group flex flex-col overflow-hidden rounded-[2rem]"
                >
                  <div
                    className={`dot-grid relative flex h-52 items-center justify-center overflow-hidden border-b border-slate-100 ${
                      violet
                        ? "bg-gradient-to-br from-violet-50 via-white to-violet-100/60"
                        : "bg-gradient-to-br from-emerald-50 via-white to-teal-100/60"
                    }`}
                  >
                    <span className="absolute left-6 top-6 rounded-lg border border-white bg-white/85 px-3 py-2 font-mono text-[10px] font-semibold text-slate-500 shadow-sm">
                      PROJECT / {project.index}
                    </span>

                    <div
                      aria-hidden="true"
                      className={`absolute h-40 w-40 rounded-full border ${
                        violet
                          ? "border-violet-200"
                          : "border-emerald-200"
                      }`}
                    />

                    <div
                      aria-hidden="true"
                      className={`absolute h-52 w-52 rounded-full border border-dashed ${
                        violet
                          ? "border-violet-200/80"
                          : "border-emerald-200/80"
                      }`}
                    />

                    <div
                      aria-hidden="true"
                      className={`relative flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white bg-white text-6xl shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-6 ${
                        violet
                          ? "text-violet-700 shadow-violet-200/40"
                          : "text-emerald-700 shadow-emerald-200/40"
                      }`}
                    >
                      {project.icon}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-7 sm:p-8">
                    <p
                      className={`font-mono text-[10px] font-bold tracking-widest ${
                        violet
                          ? "text-violet-700"
                          : "text-emerald-700"
                      }`}
                    >
                      {project.category}
                    </p>

                    <h3 className="mt-4 text-xl font-extrabold leading-snug tracking-tight text-slate-950">
                      {project.title}
                    </h3>

                    <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                      {project.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 font-mono text-[10px] font-semibold text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                      <span className="text-xs font-semibold text-slate-500">
                        {project.status}
                      </span>

                      <span
                        aria-hidden="true"
                        className={`flex h-9 w-9 items-center justify-center rounded-full ${
                          violet
                            ? "bg-violet-50 text-violet-700"
                            : "bg-emerald-50 text-emerald-700"
                        }`}
                      >
                        <ArrowIcon diagonal />
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Certifications */}
        <section
          id="certifications"
          aria-label="Professional certifications"
          className="py-20"
        >
          <SectionHeading
            index="04"
            eyebrow="LEARNING JOURNEY"
            title="Proof of"
            highlight="curiosity."
            description="Courses and certifications that helped establish my foundation in artificial intelligence, machine learning and data."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {certifications.map((certification, index) => (
              <a
                key={certification.title}
                href={certification.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${certification.title} certification, opens in a new tab`}
                className="premium-card hover-lift group flex items-start gap-5 rounded-[1.8rem] p-7 sm:p-8"
              >
                <div
                  aria-hidden="true"
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl ${
                    index % 2 === 0
                      ? "bg-violet-100 text-violet-700"
                      : "bg-emerald-100 text-emerald-700"
                  }`}
                >
                  ✦
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[10px] font-bold tracking-wider text-violet-700">
                    {certification.type}
                  </p>

                  <h3 className="mt-3 text-lg font-extrabold leading-snug text-slate-900 transition-colors group-hover:text-violet-700">
                    {certification.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    {certification.issuer}
                  </p>

                  <p className="mt-4 font-mono text-xs text-slate-500">
                    ISSUED {certification.year}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="text-violet-600 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                >
                  <ArrowIcon diagonal />
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          aria-label="Contact Namra Ali"
          className="py-20"
        >
          <SectionHeading
            index="05"
            eyebrow="CONNECT WITH ME"
            title="Let's create"
            highlight="what's next."
            description="Interested in collaborating, discussing technology or sharing an opportunity? I'd love to hear from you."
          />

          <div className="grid gap-5 lg:grid-cols-12">
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-200 sm:p-10 lg:col-span-5">
              <div
                aria-hidden="true"
                className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-violet-600/30 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl"
              />

              <div className="relative">
                <div
                  aria-hidden="true"
                  className="flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-400/15 text-3xl text-violet-200"
                >
                  ✉
                </div>

                <h3 className="mt-9 text-3xl font-extrabold tracking-tight">
                  Have an idea?
                  <br />
                  Let's talk.
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-8 text-slate-300">
                  I'm interested in learning opportunities,
                  collaborations and projects related to AI,
                  data analysis, modern web applications and
                  conversational systems.
                </p>

                <div className="mt-12 space-y-8">
                  <div>
                    <p className="font-mono text-xs tracking-widest text-slate-400">
                      EMAIL ADDRESS
                    </p>
                    <a
                      href={`mailto:${emailAddress}`}
                      className="mt-2 inline-block break-all text-base font-semibold text-emerald-300 transition hover:text-emerald-200"
                    >
                      {emailAddress}
                    </a>
                  </div>

                  <div>
                    <p className="font-mono text-xs tracking-widest text-slate-400">
                      LOCATION
                    </p>
                    <p className="mt-2 text-sm font-medium text-white">
                      Sargodha, Punjab, Pakistan
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-xs tracking-widest text-slate-400">
                      GITHUB
                    </p>
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-violet-200 transition hover:text-white"
                    >
                      github.com/namraali2011
                      <ArrowIcon diagonal />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="premium-card rounded-[2rem] p-8 sm:p-10 lg:col-span-7">
              <div className="mb-9 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-mono text-[11px] font-bold tracking-wider text-violet-700">
                    CONTACT FORM
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950">
                    Send a message
                  </h3>
                </div>

                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-2xl text-violet-700"
                >
                  ↗
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-3 block text-sm font-semibold text-slate-800"
                    >
                      Your Name{" "}
                      <span className="text-violet-700">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(event) =>
                        setForm({
                          ...form,
                          name: event.target.value,
                        })
                      }
                      placeholder="Your name"
                      className="min-h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-950 outline-none transition-all duration-300 placeholder:text-slate-500 hover:border-violet-300 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-3 block text-sm font-semibold text-slate-800"
                    >
                      Email Address{" "}
                      <span className="text-violet-700">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      value={form.email}
                      onChange={(event) =>
                        setForm({
                          ...form,
                          email: event.target.value,
                        })
                      }
                      placeholder="you@example.com"
                      className="min-h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-950 outline-none transition-all duration-300 placeholder:text-slate-500 hover:border-violet-300 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-3 block text-sm font-semibold text-slate-800"
                  >
                    Your Message{" "}
                    <span className="text-violet-700">*</span>
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={6}
                    maxLength={3000}
                    value={form.message}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        message: event.target.value,
                      })
                    }
                    placeholder="Tell me about your idea, project or opportunity..."
                    className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-950 outline-none transition-all duration-300 placeholder:text-slate-500 hover:border-violet-300 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-violet-700 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-violet-200 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-800 hover:shadow-xl"
                >
                  Compose Email
                  <span className="transition-transform group-hover:translate-x-1">
                    <ArrowIcon diagonal />
                  </span>
                </button>

                <p className="text-center text-xs leading-6 text-slate-500">
                  This form opens your email application with
                  your message prepared. You can review and
                  send it from there.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Closing banner */}
        <section
          aria-label="Closing statement"
          className="pb-24 pt-10"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-violet-100 bg-gradient-to-r from-violet-100/80 via-white to-emerald-50 px-8 py-12 text-center sm:px-12">
            <div
              aria-hidden="true"
              className="dot-grid absolute inset-0 opacity-30"
            />

            <div className="relative">
              <p className="font-mono text-xs font-semibold tracking-widest text-violet-700">
                A PERSONAL PHILOSOPHY
              </p>

              <h2 className="mx-auto mt-5 max-w-3xl text-2xl font-extrabold leading-snug tracking-tight text-slate-950 sm:text-3xl">
                "The most exciting part of technology is
                discovering what I can learn to build next."
              </h2>

              <p className="mt-5 font-mono text-sm font-semibold text-emerald-700">
                — Namra Ali
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-11 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <a
                href="#home"
                className="inline-block text-2xl font-black tracking-[-0.05em] text-slate-950"
              >
                NAMRA<span className="text-violet-700">.</span>
              </a>

              <p className="mt-2 text-sm text-slate-500">
                Curious mind. Evolving skillset. Future focused.
              </p>
            </div>

            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              <a
                href="#about"
                className="text-sm font-medium text-slate-600 transition hover:text-violet-700"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-sm font-medium text-slate-600 transition hover:text-violet-700"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-slate-600 transition hover:text-violet-700"
              >
                Contact
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-violet-700 transition hover:text-violet-900"
              >
                GitHub
                <ArrowIcon diagonal />
              </a>
            </nav>
          </div>

          <div className="mt-10 flex flex-col justify-between gap-4 border-t border-slate-100 pt-7 sm:flex-row sm:items-center">
            <p className="font-mono text-[11px] text-slate-500">
              © {new Date().getFullYear()} Namra Ali.
              All rights reserved.
            </p>

            <a
              href="#home"
              className="inline-flex items-center gap-2 self-start rounded-lg font-mono text-xs font-semibold text-violet-700 transition hover:text-violet-900 sm:self-auto"
            >
              BACK TO TOP ↑
            </a>

            <p className="font-mono text-[11px] text-slate-500">
              NEXT.JS / TYPESCRIPT / TAILWIND CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
