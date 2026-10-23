
"use client";

import { useState, type FormEvent } from "react";

const EMAIL = "namraalie048@gmail.com";
const GITHUB = "https://github.com/namraali2011";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Projects", href: "#projects" },
  { name: "Learning", href: "#learning" },
  { name: "Contact", href: "#contact" },
];

const expertise = [
  {
    id: "01",
    label: "ARTIFICIAL INTELLIGENCE",
    title: "Making sense of intelligent systems.",
    description:
      "Exploring machine learning, natural language processing, predictive modelling and conversational AI to understand how intelligent applications are designed and built.",
    skills: ["Python", "Machine Learning", "NLP", "Chatbots"],
    symbol: "✳",
    color: "violet",
  },
  {
    id: "02",
    label: "DATA & ANALYTICS",
    title: "Finding the story behind the data.",
    description:
      "Working with datasets, preprocessing techniques, data exploration and analytical tools to discover insights and support better decision-making.",
    skills: ["Pandas", "NumPy", "SQL", "Excel"],
    symbol: "◈",
    color: "mint",
  },
  {
    id: "03",
    label: "SOFTWARE DEVELOPMENT",
    title: "Turning ideas into digital experiences.",
    description:
      "Applying programming fundamentals and modern web technologies to create responsive interfaces and explore useful software solutions.",
    skills: ["HTML", "CSS", "Next.js", "Git"],
    symbol: "⌘",
    color: "peach",
  },
];

const projects = [
  {
    number: "01",
    category: "NATURAL LANGUAGE PROCESSING",
    title: "AI-Based Twitter Sentiment Analysis",
    description:
      "My undergraduate thesis explored how machine learning can be used to analyse sentiment in social media text, including data preprocessing and classification.",
    tags: ["Python", "NLP", "Machine Learning"],
    background: "lavender",
    label: "UNDERGRADUATE THESIS",
  },
  {
    number: "02",
    category: "PREDICTIVE MACHINE LEARNING",
    title: "Heart Disease Detection System",
    description:
      "A Samsung Innovation Campus capstone exploring predictive classification using health-related data and machine learning techniques.",
    tags: ["Python", "Prediction", "Data"],
    background: "mint",
    label: "AI CAPSTONE",
  },
  {
    number: "03",
    category: "CONVERSATIONAL AI",
    title: "Chatbot Development Exploration",
    description:
      "An ongoing learning project exploring conversational interfaces, Python-based chatbots, AI integrations and the design of useful digital assistants.",
    tags: ["Chatbots", "Python", "AI APIs"],
    background: "peach",
    label: "IN PROGRESS",
  },
];

const certifications = [
  {
    title: "Artificial Intelligence",
    issuer: "Samsung Innovation Campus",
    year: "2022",
    link: "https://drive.google.com/file/d/1qF9rVKb1JJMlt6uZ46SRYk3Ff-s4hZ5z/view",
  },
  {
    title: "Twitter Sentiment Analysis",
    issuer: "Coursera Guided Project",
    year: "2023",
    link: "https://coursera.org/verify/Z8V3TQP68AQ2",
  },
  {
    title: "AI for Everyone",
    issuer: "Coursera",
    year: "2023",
    link: "https://coursera.org/verify/BY8CEY7KBN86",
  },
  {
    title: "Foundations: Data, Data, Everywhere",
    issuer: "Google / Coursera",
    year: "2023",
    link: "https://coursera.org/verify/BQLXD6CUN9F5",
  },
];

function Arrow({
  diagonal = false,
  size = 20,
}: {
  diagonal?: boolean;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
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
          <path d="M4 12h16" />
          <path d="m14 6 6 6-6 6" />
        </>
      )}
    </svg>
  );
}

function SectionIntro({
  eyebrow,
  title,
  emphasis,
  description,
}: {
  eyebrow: string;
  title: string;
  emphasis: string;
  description?: string;
}) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="mb-5 flex items-center gap-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#7155ee]" />
        <span className="text-xs font-extrabold tracking-[0.17em] text-[#6252c8]">
          {eyebrow}
        </span>
      </div>

      <h2 className="max-w-4xl text-[clamp(2.7rem,5.5vw,5.2rem)] font-semibold leading-[1.08] tracking-[-0.065em] text-[#111b34]">
        {title}{" "}
        <span className="font-serif italic font-normal text-[#7155ee]">
          {emphasis}
        </span>
      </h2>

      {description && (
        <p className="mt-6 max-w-2xl text-base leading-8 text-[#536078] md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="hero-canvas relative mx-auto h-[390px] w-full max-w-[540px] sm:h-[480px] lg:h-[580px]"
    >
      {/* Large architectural background */}
      <div className="absolute inset-[8%] rounded-[45%] bg-[#ece9ff] blur-[65px]" />

      <div className="hero-float absolute left-[13%] top-[12%] h-[78%] w-[74%]">
        <div className="absolute inset-0 rounded-[43%] border border-[#d7d1fb]" />
        <div className="absolute inset-[11%] rounded-[40%] border border-dashed border-[#c8bffa]" />
        <div className="absolute inset-[25%] rounded-full bg-[#c8bcff]/35 blur-3xl" />

        <svg
          viewBox="0 0 400 400"
          className="relative h-full w-full overflow-visible"
        >
          <defs>
            <linearGradient id="orbitGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8b72ff" />
              <stop offset="100%" stopColor="#4931bb" />
            </linearGradient>

            <linearGradient id="nodeGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#b8aaff" />
              <stop offset="100%" stopColor="#6751d7" />
            </linearGradient>

            <filter id="nodeShadow">
              <feDropShadow
                dx="0"
                dy="15"
                stdDeviation="15"
                floodColor="#6550a6"
                floodOpacity="0.2"
              />
            </filter>
          </defs>

          <circle
            cx="200"
            cy="200"
            r="151"
            fill="none"
            stroke="#bcb1f2"
            strokeWidth="1.3"
            strokeDasharray="5 10"
          />

          <ellipse
            cx="200"
            cy="200"
            rx="176"
            ry="87"
            fill="none"
            stroke="#a99ce6"
            strokeWidth="1.5"
            transform="rotate(-38 200 200)"
          />

          <ellipse
            cx="200"
            cy="200"
            rx="170"
            ry="85"
            fill="none"
            stroke="#c6bdf5"
            strokeWidth="1.5"
            transform="rotate(46 200 200)"
          />

          <path
            d="M200 60 L320 130 L320 270 L200 340 L80 270 L80 130 Z"
            fill="#ddd6ff"
            opacity="0.4"
          />

          <path
            d="M200 93 L291 146 L291 251 L200 305 L109 251 L109 146 Z"
            fill="url(#orbitGradient)"
            filter="url(#nodeShadow)"
          />

          <path
            d="M200 93 L291 146 L200 200 L109 146 Z"
            fill="#a697ff"
          />
          <path
            d="M109 146 L200 200 L200 305 L109 251 Z"
            fill="#5844bd"
          />
          <path
            d="M291 146 L200 200 L200 305 L291 251 Z"
            fill="#7863de"
          />

          <circle
            cx="200"
            cy="200"
            r="56"
            fill="#ffffff"
            fillOpacity=".15"
            stroke="#ffffff"
            strokeOpacity=".35"
          />

          <g
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          >
            <circle cx="180" cy="184" r="7" />
            <circle cx="222" cy="178" r="7" />
            <circle cx="201" cy="222" r="7" />
            <path d="M186 188 196 216 M217 184 206 217 M188 184 215 179" />
          </g>

          <circle cx="64" cy="115" r="11" fill="#47c7a3" />
          <circle cx="345" cy="284" r="9" fill="#a28ef9" />
          <circle cx="312" cy="49" r="6" fill="#47c7a3" />

          <path
            d="M61 304h33M77.5 288v33"
            stroke="#9180e7"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Floating dashboard card */}
      <div className="hero-float-delayed absolute left-0 top-[18%] w-[175px] rounded-[22px] border border-white bg-white/95 p-4 shadow-[0_22px_65px_rgba(69,54,139,0.13)] sm:w-[205px] sm:p-5">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-[10px] font-extrabold tracking-widest text-slate-400">
            DATA INSIGHTS
          </span>
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
            ↗
          </span>
        </div>

        <div className="flex h-16 items-end gap-2">
          {[30, 48, 38, 65, 52, 78, 90].map((height, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-md bg-gradient-to-t from-[#795de5] to-[#b0a3ff]"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>

        <p className="mt-3 text-xs font-bold text-[#1a2440]">
          Finding patterns in data
        </p>
      </div>

      {/* Floating chatbot */}
      <div className="hero-float absolute bottom-[13%] right-0 w-[200px] rounded-[22px] border border-white bg-white/95 p-4 shadow-[0_25px_65px_rgba(69,54,139,0.13)] sm:w-[235px] sm:p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8e3ff] text-[#6a53ce]">
            ✳
          </div>
          <div>
            <p className="text-xs font-extrabold text-[#18233d]">
              AI Assistant
            </p>
            <p className="mt-0.5 text-[10px] text-emerald-600">
              ● Exploring possibilities
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-xl bg-[#f3f1ff] px-3 py-3 text-[11px] leading-5 text-[#60538f]">
          Hello! What shall we create today?
        </div>

        <div className="mt-3 flex gap-1.5">
          {[0, 1, 2].map((dot) => (
            <span
              key={dot}
              className="h-2 w-2 rounded-full bg-[#a293f4]"
            />
          ))}
        </div>
      </div>

      <div className="absolute right-[12%] top-[7%] rounded-2xl bg-[#d9fbeb] px-4 py-3 text-2xl text-[#168d69] shadow-lg shadow-emerald-100">
        ✦
      </div>
    </div>
  );
}

function ProjectVisual({
  type,
}: {
  type: "lavender" | "mint" | "peach";
}) {
  if (type === "lavender") {
    return (
      <div
        aria-hidden="true"
        className="relative flex h-64 items-center justify-center overflow-hidden bg-[#eeebff] sm:h-72"
      >
        <div className="absolute h-64 w-64 rounded-full border border-[#c8bef9]" />
        <div className="absolute h-44 w-44 rounded-full border border-dashed border-[#b4a6f3]" />
        <div className="relative flex h-36 w-52 -rotate-6 flex-col rounded-2xl border border-white bg-white p-5 shadow-[0_20px_50px_rgba(99,76,190,0.18)] transition-transform duration-500 group-hover:rotate-0">
          <div className="mb-4 flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-rose-300" />
            <span className="h-2 w-2 rounded-full bg-amber-300" />
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
          </div>
          <div className="space-y-3">
            <div className="h-2 w-4/5 rounded bg-[#c2b7fb]" />
            <div className="h-2 w-3/5 rounded bg-[#e4dfff]" />
            <div className="h-2 w-2/3 rounded bg-[#d1c8fa]" />
          </div>
          <div className="absolute -bottom-5 -right-5 rounded-xl bg-[#7257e8] px-5 py-3 text-xs font-bold text-white shadow-xl">
            Sentiment: Positive ✦
          </div>
        </div>
      </div>
    );
  }

  if (type === "mint") {
    return (
      <div
        aria-hidden="true"
        className="relative flex h-64 items-center justify-center overflow-hidden bg-[#e6f8ef] sm:h-72"
      >
        <div className="absolute h-60 w-60 rounded-full border border-[#a8e9cf]" />
        <div className="absolute h-44 w-44 rounded-full border border-dashed border-[#8bdcbf]" />

        <div className="relative flex h-36 w-48 rotate-6 flex-col items-center justify-center rounded-2xl border border-white bg-white shadow-[0_20px_50px_rgba(21,128,99,0.13)] transition-transform duration-500 group-hover:rotate-0">
          <svg
            width="140"
            height="78"
            viewBox="0 0 140 78"
            fill="none"
          >
            <path
              d="M8 39H30L44 19L59 61L73 30L84 42H132"
              stroke="#20ad80"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-xs font-bold text-[#247e62]">
            Predictive Modelling
          </p>
        </div>

        <div className="absolute bottom-9 right-[11%] rounded-xl bg-[#16a57a] px-4 py-2 text-xs font-bold text-white shadow-lg">
          AI / ML
        </div>
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="relative flex h-64 items-center justify-center overflow-hidden bg-[#fff0e8] sm:h-72"
    >
      <div className="absolute h-60 w-60 rounded-full border border-[#f2d3c4]" />
      <div className="absolute h-44 w-44 rounded-full border border-dashed border-[#f1c2ad]" />

      <div className="relative w-52 -rotate-6 rounded-2xl border border-white bg-white p-5 shadow-[0_20px_50px_rgba(181,110,73,0.13)] transition-transform duration-500 group-hover:rotate-0">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f6e4ff] text-violet-600">
            ✳
          </div>
          <span className="text-xs font-bold text-slate-800">
            Chat Interface
          </span>
        </div>

        <div className="mt-4 space-y-3">
          <div className="ml-auto w-3/4 rounded-xl bg-[#eee9ff] p-3">
            <div className="h-1.5 w-full rounded bg-violet-300" />
            <div className="mt-2 h-1.5 w-2/3 rounded bg-violet-200" />
          </div>
          <div className="w-3/4 rounded-xl bg-[#e5f8ee] p-3">
            <div className="h-1.5 w-full rounded bg-emerald-300" />
            <div className="mt-2 h-1.5 w-4/5 rounded bg-emerald-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
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
      `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="min-h-screen overflow-x-clip bg-[#faf9f6] text-[#152039] selection:bg-[#ddd5ff] selection:text-[#382495]">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 100px;
        }

        body {
          margin: 0;
          background: #faf9f6;
        }

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        :focus-visible {
          outline: 3px solid #7455e7;
          outline-offset: 4px;
        }

        @keyframes hero-float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-13px);
          }
        }

        @keyframes fade-enter {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-float {
          animation: hero-float 8s ease-in-out infinite;
        }

        .hero-float-delayed {
          animation: hero-float 7s ease-in-out -3s infinite;
        }

        .fade-enter {
          animation: fade-enter 0.9s ease-out both;
        }

        .fade-enter-delayed {
          animation: fade-enter 1s ease-out 0.2s both;
        }

        .soft-card {
          background: #ffffff;
          border: 1px solid #eeedf1;
          box-shadow: 0 15px 45px rgba(25, 30, 60, 0.035);
        }

        .premium-hover {
          transition:
            transform 350ms cubic-bezier(.2,.8,.2,1),
            box-shadow 350ms ease,
            border-color 350ms ease;
        }

        .premium-hover:hover {
          transform: translateY(-7px);
          border-color: #d7cffb;
          box-shadow: 0 25px 60px rgba(73, 57, 148, 0.09);
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <a
        href="#main"
        className="fixed left-4 top-3 z-[100] -translate-y-24 rounded-lg bg-[#7155ee] px-5 py-3 font-semibold text-white focus:translate-y-0"
      >
        Skip to content
      </a>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#eeeaf5] bg-[#faf9f6]/95 backdrop-blur-xl">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-[86px] max-w-[1320px] items-center justify-between px-5 sm:px-8 lg:px-12"
        >
          <a
            href="#home"
            className="flex items-center gap-3"
            aria-label="Namra Ali - Home"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#7155ee] text-xl font-black text-white shadow-lg shadow-violet-200">
              n<span className="text-[#aef1d5]">.</span>
            </span>

            <span className="text-[22px] font-extrabold tracking-[-0.065em] text-[#152039]">
              namra<span className="text-[#7155ee]">ali.</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13px] font-semibold text-[#44506a] transition-colors hover:text-[#7155ee]"
              >
                {item.name}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden min-h-12 items-center gap-3 rounded-full bg-[#7155ee] px-6 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#5940d1] hover:shadow-xl hover:shadow-violet-200 sm:inline-flex"
          >
            Let's Connect
            <Arrow diagonal size={17} />
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#e4e0ee] bg-white text-xl text-[#152039] lg:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {menuOpen && (
          <div
            id="mobile-menu"
            className="border-t border-[#eeeaf5] bg-white px-6 py-5 lg:hidden"
          >
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm font-semibold text-[#44506a] hover:bg-violet-50 hover:text-[#7155ee]"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </header>

      <main id="main">
        {/* Hero */}
        <section
          id="home"
          className="relative overflow-hidden bg-[#faf9f6]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-64 -top-32 h-[650px] w-[650px] rounded-full bg-[#eeeaff]/55 blur-[100px]"
          />

          <div className="relative mx-auto grid min-h-[690px] max-w-[1320px] items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-24">
            <div className="fade-enter lg:col-span-7">
              <div className="mb-9 inline-flex items-center gap-2.5 rounded-full border border-[#e3dafd] bg-[#f1edff] px-4 py-2.5 text-xs font-bold text-[#6550c4]">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                IT GRADUATE • AI ENTHUSIAST
              </div>

              <h1 className="max-w-[800px] text-[clamp(3.5rem,6.7vw,6.8rem)] font-semibold leading-[1.04] tracking-[-0.075em] text-[#121b31]">
                Hello, I'm
                <br />
                <span className="font-serif italic font-normal text-[#7155ee]">
                  Namra Ali.
                </span>
              </h1>

              <h2 className="mt-8 max-w-[650px] text-[clamp(1.45rem,2.3vw,2rem)] font-semibold leading-[1.36] tracking-[-0.035em] text-[#26304a]">
                Exploring AI, understanding data,
                <br className="hidden sm:block" /> and building what comes next.
              </h2>

              <p className="mt-6 max-w-[570px] text-[16px] leading-[1.95] text-[#607087]">
                I'm an Information Technology graduate from the
                University of Sargodha, interested in artificial
                intelligence, data analytics, intelligent chatbots
                and modern digital applications. I believe the
                best way to learn technology is to build with it.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-[#7155ee] px-8 text-sm font-bold text-white shadow-[0_13px_30px_rgba(113,85,238,0.19)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#5c41d6]"
                >
                  Explore My Work
                  <span className="transition-transform group-hover:translate-x-1">
                    <Arrow diagonal />
                  </span>
                </a>

                <a
                  href="#about"
                  className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-[#dcd6ed] bg-white px-8 text-sm font-bold text-[#212b44] transition-all duration-300 hover:border-[#7155ee] hover:text-[#7155ee]"
                >
                  More About Me
                  <Arrow />
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-xs font-semibold text-[#7a8496]">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#7155ee]" />
                  SARGODHA, PAKISTAN
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#36b88c]" />
                  LEARNING • EXPLORING • BUILDING
                </span>
              </div>
            </div>

            <div className="fade-enter-delayed lg:col-span-5">
              <HeroVisual />
            </div>
          </div>
        </section>

        {/* Technologies Strip */}
        <section
          aria-label="Technologies and areas of interest"
          className="border-y border-[#eeeaf3] bg-white"
        >
          <div className="mx-auto flex max-w-[1320px] flex-col gap-7 px-5 py-9 sm:px-8 lg:flex-row lg:items-center lg:gap-12 lg:px-12">
            <p className="shrink-0 text-xs font-bold uppercase tracking-[0.14em] text-[#81899a]">
              Technologies I explore
            </p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
              {[
                ["✳", "Python"],
                ["◈", "Machine Learning"],
                ["⌘", "SQL"],
                ["◇", "Next.js"],
                ["✦", "Data Analytics"],
              ].map(([symbol, label]) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 text-sm font-bold text-[#465169]"
                >
                  <span className="text-xl text-[#806be0]">
                    {symbol}
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
        >
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="relative lg:col-span-5">
              <div className="relative min-h-[490px] overflow-hidden rounded-[36px] bg-[#eae5ff] p-9">
                <div
                  aria-hidden="true"
                  className="absolute -bottom-28 -right-20 h-96 w-96 rounded-full bg-[#c7b9ff] blur-[70px]"
                />

                <div className="relative flex h-full min-h-[410px] flex-col justify-between">
                  <span className="text-xs font-bold tracking-[0.15em] text-[#6551c2]">
                    PROFILE / 001
                  </span>

                  <div>
                    <div className="flex h-24 w-24 items-center justify-center rounded-[28px] bg-white/80 text-5xl font-bold text-[#7155ee] shadow-lg shadow-violet-200">
                      NA
                    </div>

                    <h3 className="mt-8 text-4xl font-semibold leading-tight tracking-[-0.06em] text-[#211a4a]">
                      Always curious.
                      <br />
                      Always learning.
                    </h3>

                    <p className="mt-5 max-w-xs text-sm leading-7 text-[#625889]">
                      A personal journey shaped by technology,
                      creative problem-solving and a desire to
                      understand intelligent systems.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 right-[-8px] rounded-2xl border border-[#eeebf5] bg-white px-6 py-5 shadow-[0_20px_45px_rgba(49,37,94,0.12)] sm:right-[-20px]">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-xl text-emerald-600">
                    ✦
                  </span>
                  <div>
                    <p className="text-sm font-extrabold text-[#18243e]">
                      University of Sargodha
                    </p>
                    <p className="mt-1 text-xs text-[#69758a]">
                      BS Information Technology
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <SectionIntro
                eyebrow="GET TO KNOW ME"
                title="Technology is my"
                emphasis="curiosity."
              />

              <div className="space-y-6 text-[16px] leading-[1.95] text-[#5b6780]">
                <p>
                  My academic journey began with a Bachelor's
                  degree in Information Technology from the
                  University of Sargodha. During my studies,
                  I gained experience with programming
                  fundamentals, database systems, networking
                  and software development.
                </p>

                <p>
                  My interest in artificial intelligence grew
                  while working on my undergraduate thesis
                  involving Twitter sentiment analysis.
                  Studying AI through Samsung Innovation Campus
                  further encouraged me to explore Python,
                  machine learning and predictive systems.
                </p>

                <p>
                  Today, I'm continuing to develop my knowledge
                  of data analytics, conversational AI, chatbot
                  development and modern web technologies.
                  I enjoy combining technical skills with
                  curiosity to create useful digital experiences.
                </p>
              </div>

              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#ebe7f4] bg-white p-6">
                  <div className="mb-4 text-2xl text-[#7155ee]">
                    ◈
                  </div>
                  <h3 className="text-base font-extrabold text-[#1c2942]">
                    Analytical Thinking
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#69758a]">
                    Exploring patterns, data and practical solutions.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#ebe7f4] bg-white p-6">
                  <div className="mb-4 text-2xl text-emerald-600">
                    ✳
                  </div>
                  <h3 className="text-base font-extrabold text-[#1c2942]">
                    Continuous Learning
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#69758a]">
                    Building skills through study and experimentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section
          id="expertise"
          className="bg-[#f2f0fb] py-24 lg:py-32"
        >
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <SectionIntro
                eyebrow="WHAT I WORK WITH"
                title="Knowledge meets"
                emphasis="possibility."
                description="My core areas of interest combine technical foundations with emerging technologies."
              />

              <p className="mb-16 max-w-[270px] text-sm leading-7 text-[#68738b]">
                I see technology as a constantly evolving field.
                Every new skill opens the door to another idea.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {expertise.map((item) => {
                const isViolet = item.color === "violet";
                const isMint = item.color === "mint";

                return (
                  <article
                    key={item.id}
                    className="premium-hover group flex flex-col rounded-[28px] border border-[#e7e3f0] bg-white p-8 sm:p-10"
                  >
                    <div className="flex items-start justify-between">
                      <div
                        aria-hidden="true"
                        className={`flex h-16 w-16 items-center justify-center rounded-[20px] text-4xl transition-transform duration-300 group-hover:rotate-6 ${
                          isViolet
                            ? "bg-[#eee9ff] text-[#7254df]"
                            : isMint
                            ? "bg-[#e1f8ef] text-[#16a77a]"
                            : "bg-[#fff0e8] text-[#e18a65]"
                        }`}
                      >
                        {item.symbol}
                      </div>

                      <span className="font-mono text-xs font-bold text-[#b0a9be]">
                        {item.id}
                      </span>
                    </div>

                    <p className="mt-10 text-[11px] font-extrabold tracking-[0.15em] text-[#7863d5]">
                      {item.label}
                    </p>

                    <h3 className="mt-4 text-[27px] font-semibold leading-tight tracking-[-0.045em] text-[#17233d]">
                      {item.title}
                    </h3>

                    <p className="mt-5 flex-1 text-sm leading-8 text-[#68748a]">
                      {item.description}
                    </p>

                    <div className="mt-9 flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-[#f5f4f8] px-3.5 py-2 text-[11px] font-bold text-[#5d6579]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
        >
          <SectionIntro
            eyebrow="MY PROJECTS"
            title="Exploring ideas."
            emphasis="Building knowledge."
            description="Selected academic projects and ongoing experiments in artificial intelligence and software development."
          />

          <div className="grid gap-7 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="premium-hover group flex flex-col overflow-hidden rounded-[28px] border border-[#eceaf1] bg-white shadow-[0_15px_40px_rgba(25,30,60,0.035)]"
              >
                <ProjectVisual
                  type={
                    project.background as
                      | "lavender"
                      | "mint"
                      | "peach"
                  }
                />

                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold tracking-[0.12em] text-[#7155ee]">
                      {project.category}
                    </span>

                    <span className="font-mono text-xs text-[#a2a9b6]">
                      / {project.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-[23px] font-semibold leading-tight tracking-[-0.045em] text-[#1b2640]">
                    {project.title}
                  </h3>

                  <p className="mt-5 flex-1 text-sm leading-[1.9] text-[#68748a]">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#eae7f1] bg-[#faf9fc] px-3 py-1.5 text-[11px] font-bold text-[#646e83]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-[#efedf3] pt-6">
                    <span className="text-xs font-bold text-[#798398]">
                      {project.label}
                    </span>

                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f1edff] text-[#7155ee] transition-transform group-hover:rotate-45"
                    >
                      <Arrow diagonal size={18} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Learning and certifications */}
        <section
          id="learning"
          className="bg-[#f4f7f5] py-24 lg:py-32"
        >
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-5">
                <SectionIntro
                  eyebrow="GROWTH & EDUCATION"
                  title="Learning never"
                  emphasis="stops."
                  description="My learning journey extends beyond university courses through focused training, guided projects and personal exploration."
                />

                <div className="rounded-[24px] bg-[#e4f5ed] p-7">
                  <span className="text-xs font-extrabold tracking-widest text-[#278969]">
                    EDUCATION
                  </span>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#203c32]">
                    BS Information Technology
                  </h3>

                  <p className="mt-2 text-sm text-[#4e7566]">
                    University of Sargodha
                  </p>

                  <div className="mt-7 border-t border-[#c9e7d8] pt-5 text-xs font-bold text-[#278969]">
                    2019 — 2023
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <a
                      key={cert.title}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${cert.title} certificate in new tab`}
                      className="premium-hover group flex items-start gap-5 rounded-[22px] border border-[#e9edea] bg-white p-6 sm:p-7"
                    >
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#eeeaff] text-2xl text-[#7155ee]">
                        {index % 2 === 0 ? "✦" : "◈"}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-extrabold tracking-wider text-[#369875]">
                          {cert.year} / CERTIFICATION
                        </p>

                        <h3 className="mt-2 text-lg font-semibold tracking-tight text-[#1a2942] transition-colors group-hover:text-[#7155ee]">
                          {cert.title}
                        </h3>

                        <p className="mt-2 text-sm text-[#758197]">
                          {cert.issuer}
                        </p>
                      </div>

                      <span className="text-[#7155ee] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                        <Arrow diagonal />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning approach */}
        <section className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-[35px] bg-[#211b47] px-7 py-16 text-white sm:px-12 lg:px-20">
            <div
              aria-hidden="true"
              className="absolute -right-32 -top-28 h-[450px] w-[450px] rounded-full bg-[#7054da]/30 blur-[85px]"
            />

            <div className="relative grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="text-xs font-bold tracking-[0.18em] text-[#b8a7ff]">
                  MY APPROACH
                </p>

                <h2 className="mt-6 text-[clamp(2.5rem,4.5vw,4.4rem)] font-semibold leading-tight tracking-[-0.06em]">
                  Learn something.
                  <br />
                  <span className="font-serif italic font-normal text-[#bbaaff]">
                    Build something.
                  </span>
                </h2>

                <p className="mt-6 max-w-lg text-base leading-8 text-[#c7c2e1]">
                  I believe meaningful technical growth comes
                  from understanding ideas, experimenting with
                  tools, making mistakes and improving through
                  practice.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["01", "Discover", "Explore a new idea."],
                  ["02", "Understand", "Learn its foundations."],
                  ["03", "Experiment", "Turn theory into practice."],
                  ["04", "Improve", "Refine what I've built."],
                ].map(([number, title, description]) => (
                  <div
                    key={number}
                    className="rounded-2xl border border-white/10 bg-white/[0.07] p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/10"
                  >
                    <span className="text-xs font-bold text-[#b9a7ff]">
                      {number}
                    </span>
                    <h3 className="mt-5 text-xl font-semibold">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm text-[#c4beda]">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mx-auto max-w-[1320px] px-5 pb-28 pt-12 sm:px-8 lg:px-12"
        >
          <SectionIntro
            eyebrow="LET'S CONNECT"
            title="Have an idea?"
            emphasis="Let's talk."
            description="Whether it's a project, learning opportunity or conversation about emerging technology, I'd be happy to connect."
          />

          <div className="grid gap-6 lg:grid-cols-12">
            <div className="relative overflow-hidden rounded-[28px] bg-[#eae5ff] p-8 sm:p-10 lg:col-span-5">
              <div
                aria-hidden="true"
                className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#cfc4ff] blur-[50px]"
              />

              <div className="relative flex h-full flex-col">
                <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-white text-3xl text-[#7155ee] shadow-sm">
                  ✉
                </div>

                <h3 className="mt-10 text-3xl font-semibold leading-tight tracking-[-0.045em] text-[#251c50]">
                  Great conversations
                  <br />
                  start with hello.
                </h3>

                <p className="mt-5 text-sm leading-8 text-[#665e88]">
                  I'm interested in collaborations, technical
                  learning opportunities and projects in artificial
                  intelligence, analytics and software development.
                </p>

                <div className="mt-12 space-y-7">
                  <div>
                    <p className="text-[11px] font-bold tracking-widest text-[#796e9c]">
                      EMAIL
                    </p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="mt-2 block break-all text-base font-bold text-[#4f38b1] hover:underline"
                    >
                      {EMAIL}
                    </a>
                  </div>

                  <div>
                    <p className="text-[11px] font-bold tracking-widest text-[#796e9c]">
                      LOCATION
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[#332957]">
                      Sargodha, Pakistan
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] font-bold tracking-widest text-[#796e9c]">
                      GITHUB
                    </p>
                    <a
                      href={GITHUB}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-[#4f38b1] hover:underline"
                    >
                      github.com/namraali2011
                      <Arrow diagonal size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#ebe8f0] bg-white p-8 shadow-sm sm:p-10 lg:col-span-7">
              <h3 className="text-2xl font-semibold tracking-tight text-[#1c2942]">
                Send a message
              </h3>

              <p className="mt-3 text-sm text-[#758197]">
                Fill out the form and compose an email directly.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-9 space-y-6"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-3 block text-sm font-bold text-[#36415b]"
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      maxLength={100}
                      placeholder="Your name"
                      value={form.name}
                      onChange={(event) =>
                        setForm({
                          ...form,
                          name: event.target.value,
                        })
                      }
                      className="min-h-14 w-full rounded-xl border border-[#e7e4ed] bg-[#faf9fd] px-4 text-sm text-[#1d2942] outline-none transition focus:border-[#7155ee] focus:bg-white focus:ring-4 focus:ring-violet-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-3 block text-sm font-bold text-[#36415b]"
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(event) =>
                        setForm({
                          ...form,
                          email: event.target.value,
                        })
                      }
                      className="min-h-14 w-full rounded-xl border border-[#e7e4ed] bg-[#faf9fd] px-4 text-sm text-[#1d2942] outline-none transition focus:border-[#7155ee] focus:bg-white focus:ring-4 focus:ring-violet-100"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-3 block text-sm font-bold text-[#36415b]"
                  >
                    Your Message *
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={6}
                    maxLength={3000}
                    placeholder="Tell me what you have in mind..."
                    value={form.message}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        message: event.target.value,
                      })
                    }
                    className="w-full resize-y rounded-xl border border-[#e7e4ed] bg-[#faf9fd] px-4 py-4 text-sm leading-7 text-[#1d2942] outline-none transition focus:border-[#7155ee] focus:bg-white focus:ring-4 focus:ring-violet-100"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#7155ee] px-7 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#5c40d1] hover:shadow-lg hover:shadow-violet-200"
                >
                  Compose Email
                  <span className="transition-transform group-hover:translate-x-1">
                    <Arrow diagonal />
                  </span>
                </button>

                <p className="text-center text-xs leading-6 text-[#8590a2]">
                  Your email application will open with your message
                  prepared. Review it there to send.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#181632] text-white">
        <div className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-10 md:flex-row">
            <div>
              <a
                href="#home"
                className="text-3xl font-extrabold tracking-[-0.07em]"
              >
                namra<span className="text-[#ab96ff]">ali.</span>
              </a>

              <p className="mt-4 max-w-sm text-sm leading-7 text-[#b4aecb]">
                Exploring artificial intelligence, understanding
                data and building knowledge through curiosity.
              </p>
            </div>

            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap items-start gap-x-7 gap-y-4"
            >
              {navLinks.slice(1).map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold text-[#c3bed5] transition-colors hover:text-white"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-14 flex flex-col justify-between gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
            <p className="text-xs text-[#aaa5c0]">
              © {new Date().getFullYear()} Namra Ali.
              All rights reserved.
            </p>

            <a
              href="#home"
              className="inline-flex items-center gap-2 self-start text-xs font-bold text-[#c2b2ff] transition hover:text-white sm:self-auto"
            >
              BACK TO TOP ↑
            </a>

            <p className="font-mono text-[11px] text-[#aaa5c0]">
              MADE WITH NEXT.JS & TAILWIND CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
