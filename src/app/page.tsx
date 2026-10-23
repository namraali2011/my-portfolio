
"use client";

import { useState, type FormEvent } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const email = "namraalie048@gmail.com";

  const skills = [
    { name: "Python", category: "AI & Data" },
    { name: "Machine Learning", category: "AI & Data" },
    { name: "Data Analysis", category: "AI & Data" },
    { name: "NLP", category: "AI & Data" },
    { name: "Pandas", category: "AI & Data" },
    { name: "NumPy", category: "AI & Data" },
    { name: "SQL", category: "Development" },
    { name: "MySQL", category: "Development" },
    { name: "HTML & CSS", category: "Development" },
    { name: "Next.js", category: "Development" },
    { name: "TypeScript", category: "Development" },
    { name: "Tailwind CSS", category: "Development" },
    { name: "Microsoft Excel", category: "Analytics" },
    { name: "Data Visualization", category: "Analytics" },
    { name: "Chatbot Development", category: "Learning" },
    { name: "AI Agents", category: "Learning" },
  ];

  const projects = [
    {
      number: "01",
      category: "NATURAL LANGUAGE PROCESSING",
      title: "AI-Powered Sentiment Analysis",
      description:
        "My undergraduate thesis explored Twitter sentiment analysis using Python, text preprocessing and machine learning techniques to interpret opinions expressed in social media data.",
      tags: ["Python", "NLP", "Machine Learning"],
      icon: "◈",
      accent: "violet",
      status: "Academic Thesis",
    },
    {
      number: "02",
      category: "PREDICTIVE ANALYTICS",
      title: "Heart Disease Detection System",
      description:
        "Developed as my Samsung Innovation Campus AI capstone, this project explored how machine learning and health-related datasets can support predictive classification.",
      tags: ["Python", "Data Preprocessing", "ML"],
      icon: "♡",
      accent: "emerald",
      status: "AI Capstone",
    },
    {
      number: "03",
      category: "CONVERSATIONAL AI",
      title: "Intelligent Chatbot Lab",
      description:
        "An ongoing learning project focused on conversational interfaces, response generation, API integration and the foundations of AI-powered assistants.",
      tags: ["Python", "Chatbots", "AI APIs"],
      icon: "⌘",
      accent: "violet",
      status: "In Development",
    },
  ];

  const certifications = [
    {
      title: "Artificial Intelligence",
      issuer: "Samsung Innovation Campus",
      year: "2022",
      url: "https://drive.google.com/file/d/1qF9rVKb1JJMlt6uZ46SRYk3Ff-s4hZ5z/view",
    },
    {
      title: "Twitter Sentiment Analysis",
      issuer: "Coursera Guided Project",
      year: "2023",
      url: "https://coursera.org/verify/Z8V3TQP68AQ2",
    },
    {
      title: "AI for Everyone",
      issuer: "Coursera",
      year: "2023",
      url: "https://coursera.org/verify/BY8CEY7KBN86",
    },
    {
      title: "Foundations: Data, Data, Everywhere",
      issuer: "Google / Coursera",
      year: "2023",
      url: "https://coursera.org/verify/BQLXD6CUN9F5",
    },
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio enquiry from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href =
      `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#090b12] text-slate-100 selection:bg-violet-500/40 selection:text-white">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #090b12;
        }

        * {
          box-sizing: border-box;
        }

        .glass {
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.055),
            rgba(255, 255, 255, 0.018)
          );
          border: 1px solid rgba(255, 255, 255, 0.09);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .glow-card {
          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .glow-card:hover {
          transform: translateY(-5px);
          border-color: rgba(167, 139, 250, 0.4);
          box-shadow: 0 15px 55px rgba(124, 58, 237, 0.13);
        }

        .gradient-text {
          background: linear-gradient(
            110deg,
            #ffffff 0%,
            #ddd6fe 45%,
            #a78bfa 75%,
            #6ee7b7 100%
          );
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .dot-pattern {
          background-image: radial-gradient(
            rgba(167, 139, 250, 0.18) 1px,
            transparent 1px
          );
          background-size: 23px 23px;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        .floating {
          animation: float 7s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-64 left-1/3 h-[650px] w-[650px] rounded-full bg-violet-700/10 blur-[130px]" />
        <div className="absolute right-[-200px] top-[650px] h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[130px]" />
        <div className="absolute bottom-0 left-[-200px] h-[450px] w-[450px] rounded-full bg-violet-800/10 blur-[130px]" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090b12]/85 backdrop-blur-2xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#home" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 font-mono text-lg font-bold text-violet-300 ring-1 ring-violet-400/30 transition group-hover:bg-violet-500/25">
              N.
            </div>
            <div>
              <div className="text-sm font-bold tracking-wide text-white">
                NAMRA ALI
              </div>
              <div className="font-mono text-[10px] tracking-widest text-slate-500">
                AI / DATA / DEVELOPMENT
              </div>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {["About", "Skills", "Projects", "Credentials", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-slate-400 transition hover:text-violet-300"
                >
                  {item}
                </a>
              )
            )}
          </div>

          <a
            href="#contact"
            className="hidden rounded-full border border-violet-400/30 bg-violet-500/10 px-5 py-2.5 text-sm font-semibold text-violet-200 transition hover:bg-violet-500/20 sm:inline-flex"
          >
            Let's Connect ↗
          </a>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/10 p-2 text-white md:hidden"
          >
            <span className="text-xl">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#11131d] px-6 py-5 md:hidden">
            {["About", "Skills", "Projects", "Credentials", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-sm text-slate-300 hover:text-violet-300"
                >
                  {item}
                </a>
              )
            )}
          </div>
        )}
      </header>

      <main className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Hero */}
        <section
          id="home"
          className="grid scroll-mt-24 gap-8 pb-16 pt-20 lg:grid-cols-12 lg:items-stretch lg:pt-28"
        >
          <div className="flex flex-col justify-center lg:col-span-7">
            <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/5 px-4 py-2 font-mono text-xs text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              OPEN TO LEARNING & OPPORTUNITIES
            </div>

            <p className="mb-5 font-mono text-sm tracking-[0.3em] text-violet-400">
              HELLO WORLD, I'M
            </p>

            <h1 className="text-6xl font-black leading-[1.05] tracking-[-0.065em] sm:text-7xl lg:text-[100px]">
              Namra
              <br />
              <span className="gradient-text">Ali.</span>
            </h1>

            <h2 className="mt-8 max-w-2xl text-xl font-medium leading-relaxed text-slate-200 sm:text-2xl">
              Exploring the intersection of{" "}
              <span className="text-violet-300">
                Artificial Intelligence
              </span>
              ,{" "}
              <span className="text-emerald-300">
                Data Analytics
              </span>{" "}
              & Intelligent Applications.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">
              An Information Technology graduate from the University
              of Sargodha, passionate about turning data into insights
              and learning to build AI-powered solutions that solve
              meaningful problems.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 rounded-xl bg-violet-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-violet-800/30 transition hover:-translate-y-1 hover:bg-violet-500 hover:shadow-violet-600/30"
              >
                Explore My Work
                <span>↗</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-white/10"
              >
                Get in Touch
                <span>→</span>
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6 font-mono text-xs text-slate-500">
              <span>📍 SARGODHA, PAKISTAN</span>
              <span className="text-violet-500">/</span>
              <span>BS INFORMATION TECHNOLOGY</span>
            </div>
          </div>

          {/* Hero Bento */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-5">
            <div className="glass glow-card dot-pattern relative col-span-2 flex min-h-[280px] flex-col items-center justify-center overflow-hidden rounded-3xl p-8 sm:min-h-[340px]">
              <div className="absolute left-6 top-6 font-mono text-[11px] text-slate-500">
                FIG. 01 — DIGITAL IDENTITY
              </div>

              <div className="floating relative flex h-44 w-44 items-center justify-center sm:h-52 sm:w-52">
                <div className="absolute inset-0 rounded-full border border-violet-400/20" />
                <div className="absolute inset-5 rounded-full border border-dashed border-emerald-400/35" />
                <div className="absolute inset-9 rounded-full bg-gradient-to-br from-violet-600/40 to-emerald-400/20 blur-2xl" />
                <div className="relative flex h-28 w-28 items-center justify-center rounded-[2rem] border border-violet-300/30 bg-[#17182c] text-5xl font-black tracking-tighter text-white shadow-2xl shadow-violet-600/30 sm:h-32 sm:w-32">
                  NA
                  <span className="absolute -bottom-2 -right-2 h-6 w-6 rounded-lg border-4 border-[#17182c] bg-emerald-400" />
                </div>
              </div>

              <div className="mt-3 text-center">
                <p className="text-lg font-bold text-white">
                  Curious by nature.
                </p>
                <p className="font-mono text-xs text-violet-300">
                  Driven by technology.
                </p>
              </div>
            </div>

            <div className="glass glow-card flex min-h-[165px] flex-col justify-between rounded-3xl p-5 sm:p-6">
              <div className="text-3xl text-violet-400">⌘</div>
              <div>
                <p className="text-3xl font-bold text-white">3.53</p>
                <p className="mt-1 font-mono text-[11px] text-slate-400">
                  UNDERGRADUATE CGPA / 4.00
                </p>
              </div>
            </div>

            <div className="glass glow-card flex min-h-[165px] flex-col justify-between rounded-3xl p-5 sm:p-6">
              <div className="text-3xl text-emerald-400">✧</div>
              <div>
                <p className="text-3xl font-bold text-white">AI + Data</p>
                <p className="mt-1 font-mono text-[11px] text-slate-400">
                  MY CORE INTERESTS
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-28 py-16">
          <SectionHeading
            number="01"
            eyebrow="WHO I AM"
            title="Beyond the"
            highlight="code."
            description="A little about my background, interests and the direction I'm heading."
          />

          <div className="grid gap-4 lg:grid-cols-12">
            <div className="glass glow-card rounded-3xl p-7 sm:p-10 lg:col-span-7">
              <div className="mb-6 font-mono text-xs tracking-widest text-emerald-400">
                &lt; ABOUT_ME /&gt;
              </div>
              <h3 className="mb-5 text-2xl font-bold text-white sm:text-3xl">
                Learning, experimenting,
                <br />
                and building with purpose.
              </h3>
              <div className="space-y-5 text-sm leading-8 text-slate-400 sm:text-base">
                <p>
                  I'm Namra Ali, a Bachelor of Science in Information
                  Technology graduate from the University of Sargodha.
                  My academic journey gave me a foundation in
                  programming, database management, software development,
                  networking and computing technologies.
                </p>
                <p>
                  My interest in AI grew through my undergraduate
                  sentiment analysis thesis and the Samsung Innovation
                  Campus Artificial Intelligence programme. These
                  experiences introduced me to machine learning,
                  datasets, predictive models and the importance of
                  understanding results.
                </p>
                <p>
                  Today, I'm expanding my knowledge in data analytics,
                  modern web development, conversational AI and chatbot
                  development. I enjoy discovering how these
                  technologies can work together to create accessible,
                  practical applications.
                </p>
              </div>
            </div>

            <div className="grid gap-4 lg:col-span-5">
              <div className="glass glow-card rounded-3xl p-7">
                <span className="font-mono text-xs text-violet-300">
                  EDUCATION.LOG
                </span>
                <div className="mt-5 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-500/15 text-2xl text-violet-300">
                    ◇
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      BS Information Technology
                    </h4>
                    <p className="mt-1 text-sm text-slate-400">
                      University of Sargodha
                    </p>
                    <p className="mt-3 font-mono text-xs text-emerald-400">
                      2019 — 2023
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass glow-card rounded-3xl p-7">
                <span className="font-mono text-xs text-emerald-300">
                  CURRENT_FOCUS.JSON
                </span>
                <div className="mt-5 space-y-3 font-mono text-xs sm:text-sm">
                  <p>
                    <span className="text-violet-300">"ai"</span>
                    <span className="text-slate-500">: </span>
                    <span className="text-emerald-300">
                      "Machine Learning"
                    </span>
                  </p>
                  <p>
                    <span className="text-violet-300">"data"</span>
                    <span className="text-slate-500">: </span>
                    <span className="text-emerald-300">
                      "Analytics"
                    </span>
                  </p>
                  <p>
                    <span className="text-violet-300">"building"</span>
                    <span className="text-slate-500">: </span>
                    <span className="text-emerald-300">
                      "AI Chatbots"
                    </span>
                  </p>
                  <p>
                    <span className="text-violet-300">"mindset"</span>
                    <span className="text-slate-500">: </span>
                    <span className="text-emerald-300">
                      "Always Learning"
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-28 py-16">
          <SectionHeading
            number="02"
            eyebrow="MY TOOLKIT"
            title="Skills &"
            highlight="technologies."
            description="A combination of academic foundations, hands-on experience and technologies I'm actively learning."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            <SkillCard
              title="AI & Data Science"
              code="01 / INTELLIGENCE"
              icon="✳"
              color="violet"
              items={skills.filter((s) => s.category === "AI & Data")}
            />

            <SkillCard
              title="Development"
              code="02 / ENGINEERING"
              icon="⌘"
              color="emerald"
              items={skills.filter(
                (s) => s.category === "Development"
              )}
            />

            <div className="grid gap-4">
              <SkillCard
                title="Analytics"
                code="03 / INSIGHTS"
                icon="◈"
                color="violet"
                items={skills.filter(
                  (s) => s.category === "Analytics"
                )}
              />
              <SkillCard
                title="Currently Exploring"
                code="04 / NEXT STEPS"
                icon="↗"
                color="emerald"
                items={skills.filter(
                  (s) => s.category === "Learning"
                )}
              />
            </div>
          </div>

          <div className="glass mt-4 flex flex-wrap items-center justify-between gap-4 rounded-2xl px-7 py-5">
            <span className="font-mono text-xs text-slate-400">
              MY APPROACH TO LEARNING
            </span>
            <span className="font-mono text-sm text-emerald-300">
              Learn → Experiment → Build → Improve
            </span>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-28 py-16">
          <SectionHeading
            number="03"
            eyebrow="SELECTED WORK"
            title="Things I've"
            highlight="explored."
            description="Academic work and ongoing projects that reflect my interest in intelligent systems and practical technology."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const isViolet = project.accent === "violet";

              return (
                <article
                  key={project.number}
                  className="glass glow-card group flex min-h-[410px] flex-col overflow-hidden rounded-3xl"
                >
                  <div className="relative flex h-40 items-center justify-center overflow-hidden border-b border-white/5">
                    <div
                      className={`absolute inset-0 ${
                        isViolet
                          ? "bg-gradient-to-br from-violet-900/30 to-[#10121b]"
                          : "bg-gradient-to-br from-emerald-900/25 to-[#10121b]"
                      }`}
                    />
                    <div className="dot-pattern absolute inset-0 opacity-60" />

                    <div
                      className={`relative flex h-24 w-24 items-center justify-center rounded-[2rem] border text-6xl transition duration-500 group-hover:rotate-6 group-hover:scale-110 ${
                        isViolet
                          ? "border-violet-400/25 bg-violet-500/10 text-violet-300 shadow-xl shadow-violet-800/20"
                          : "border-emerald-400/25 bg-emerald-500/10 text-emerald-300 shadow-xl shadow-emerald-800/20"
                      }`}
                    >
                      {project.icon}
                    </div>

                    <span className="absolute right-5 top-5 font-mono text-xs text-slate-500">
                      / {project.number}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <p
                      className={`mb-3 font-mono text-[10px] tracking-widest ${
                        isViolet
                          ? "text-violet-300"
                          : "text-emerald-300"
                      }`}
                    >
                      {project.category}
                    </p>

                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[10px] text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                      <span className="font-mono text-[11px] text-slate-500">
                        {project.status}
                      </span>
                      <span
                        className={`text-lg ${
                          isViolet
                            ? "text-violet-400"
                            : "text-emerald-400"
                        }`}
                      >
                        ↗
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Credentials */}
        <section
          id="credentials"
          className="scroll-mt-28 py-16"
        >
          <SectionHeading
            number="04"
            eyebrow="CONTINUOUS LEARNING"
            title="Certified"
            highlight="curiosity."
            description="Courses and certifications that helped shape my foundation in AI, programming and data."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <a
                key={cert.title}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass glow-card group flex items-center gap-5 rounded-2xl p-6 sm:p-7"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-2xl text-violet-300">
                  {index % 2 === 0 ? "✦" : "◇"}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="mb-1 font-mono text-[10px] text-emerald-400">
                    VERIFIED LEARNING / {cert.year}
                  </p>
                  <h3 className="font-semibold text-white transition group-hover:text-violet-300">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">
                    {cert.issuer}
                  </p>
                </div>

                <span className="text-xl text-slate-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-300">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-28 py-16">
          <SectionHeading
            number="05"
            eyebrow="LET'S CONNECT"
            title="Let's build"
            highlight="something."
            description="Have a project idea, opportunity or an interesting conversation about technology? I'd love to hear from you."
          />

          <div className="grid gap-5 lg:grid-cols-12">
            <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-10 lg:col-span-5">
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-violet-600/15 blur-3xl" />

              <div className="relative">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/10 text-3xl text-violet-300">
                  ✉
                </div>

                <h3 className="text-2xl font-bold text-white">
                  Say hello.
                </h3>
                <p className="mt-4 text-sm leading-8 text-slate-400">
                  I'm interested in opportunities that allow me
                  to grow in AI, data analytics and software
                  development, collaborate with others and apply
                  what I've learned to meaningful projects.
                </p>

                <div className="mt-9 space-y-6">
                  <div>
                    <p className="font-mono text-[11px] tracking-widest text-slate-500">
                      EMAIL ADDRESS
                    </p>
                    <a
                      href={`mailto:${email}`}
                      className="mt-2 block break-all text-base font-semibold text-violet-300 transition hover:text-violet-200"
                    >
                      {email}
                    </a>
                  </div>

                  <div>
                    <p className="font-mono text-[11px] tracking-widest text-slate-500">
                      LOCATION
                    </p>
                    <p className="mt-2 text-sm text-slate-200">
                      Sargodha, Punjab, Pakistan
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-[11px] tracking-widest text-slate-500">
                      GITHUB
                    </p>
                    <a
                      href="https://github.com/namraali2011"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm text-emerald-300 transition hover:text-emerald-200"
                    >
                      github.com/namraali2011 ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-8 sm:p-10 lg:col-span-7">
              <div className="mb-8 flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">
                  Send a message
                </h3>
                <span className="font-mono text-xs text-emerald-400">
                  CONTACT.FORM
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-3 block font-mono text-xs text-slate-400"
                    >
                      YOUR NAME
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Your name"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-500/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-3 block font-mono text-xs text-slate-400"
                    >
                      EMAIL ADDRESS
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      maxLength={254}
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-500/10"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-3 block font-mono text-xs text-slate-400"
                  >
                    YOUR MESSAGE
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    required
                    maxLength={3000}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell me about your idea, project or opportunity..."
                    className="w-full resize-y rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm leading-7 text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-500/10"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 px-7 py-4 font-semibold text-white shadow-lg shadow-violet-700/20 transition hover:-translate-y-1 hover:from-violet-500 hover:to-violet-400 hover:shadow-violet-600/30"
                >
                  Compose Email
                  <span>↗</span>
                </button>

                <p className="text-center font-mono text-[11px] leading-5 text-slate-500">
                  This form opens your email app with the message
                  prepared for sending.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative mt-12 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <p className="text-lg font-black tracking-tight text-white">
                NAMRA<span className="text-violet-400">.</span>
              </p>
              <p className="mt-2 font-mono text-[11px] text-slate-500">
                Curious mind. Evolving skillset.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="#home"
                className="text-xs text-slate-400 transition hover:text-violet-300"
              >
                Back to Top ↑
              </a>
              <a
                href="#projects"
                className="text-xs text-slate-400 transition hover:text-violet-300"
              >
                Projects
              </a>
              <a
                href={`mailto:${email}`}
                className="text-xs text-slate-400 transition hover:text-violet-300"
              >
                Email
              </a>
              <a
                href="https://github.com/namraali2011"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 transition hover:text-violet-300"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 font-mono text-[11px] text-slate-500 sm:flex-row">
            <span>
              © {new Date().getFullYear()} Namra Ali. All rights reserved.
            </span>
            <span>
              DESIGNED WITH CURIOSITY <span className="text-emerald-400">✳</span> BUILT WITH NEXT.JS
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({
  number,
  eyebrow,
  title,
  highlight,
  description,
}: {
  number: string;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
}) {
  return (
    <div className="mb-10">
      <div className="mb-5 flex items-center gap-3 font-mono text-xs tracking-widest text-emerald-400">
        <span>{number} /</span>
        <span>{eyebrow}</span>
        <div className="h-px w-12 bg-emerald-400/30" />
      </div>

      <h2 className="text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
        {title}{" "}
        <span className="gradient-text">{highlight}</span>
      </h2>

      <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
        {description}
      </p>
    </div>
  );
}

function SkillCard({
  title,
  code,
  icon,
  color,
  items,
}: {
  title: string;
  code: string;
  icon: string;
  color: "violet" | "emerald";
  items: { name: string; category: string }[];
}) {
  const isViolet = color === "violet";

  return (
    <div className="glass glow-card rounded-3xl p-7">
      <div className="mb-7 flex items-start justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl border text-2xl ${
            isViolet
              ? "border-violet-400/20 bg-violet-500/10 text-violet-300"
              : "border-emerald-400/20 bg-emerald-500/10 text-emerald-300"
          }`}
        >
          {icon}
        </div>
        <span className="font-mono text-[10px] text-slate-500">
          {code}
        </span>
      </div>

      <h3 className="mb-6 text-xl font-bold text-white">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2.5">
        {items.map((skill) => (
          <span
            key={skill.name}
            className={`cursor-default rounded-xl border px-3.5 py-2 text-xs font-medium transition duration-300 ${
              isViolet
                ? "border-violet-400/15 bg-violet-400/5 text-violet-200 hover:border-violet-400/40 hover:bg-violet-500/15 hover:shadow-lg hover:shadow-violet-500/10"
                : "border-emerald-400/15 bg-emerald-400/5 text-emerald-200 hover:border-emerald-400/40 hover:bg-emerald-500/15 hover:shadow-lg hover:shadow-emerald-500/10"
            }`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}
