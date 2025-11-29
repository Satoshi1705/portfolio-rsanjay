// src/components/Portfolio.jsx
import React from "react";

const projects = [
  {
    id: 1,
    title: "Locating Companion (SOS Safety App)",
    desc: "A safety-focused SOS app using real-time tracking to monitor travel and vehicle stats with a strong focus on UI/UX.",
    tech: ["Frontend", "GPS Tracking", "UI/UX"],
    link: "#",
  },
  {
    id: 2,
    title: "Rain Detection System for Clothes Protection",
    desc: "An IoT-based sensor system that detects rain and triggers an automated protective mechanism for drying clothes.",
    tech: ["IoT", "Sensors", "Automation"],
    link: "#",
  },
  {
    id: 3,
    title: "Food Inventory Automation Workflow",
    desc: "A workflow built using n8n to track food expiry dates with Sheets, Gmail alerts, and AI-generated mail content using Gemini Flash 2.0.",
    tech: ["n8n", "Google Sheets", "Gmail API", "Gemini Flash 2.0"],
    link: "#",
  },
];

const skills = [
  "Python",
  "Java (Basics)",
  "GitHub",
  "Linux",
  "UI/UX",
  "Photoshop",
  "Canva",
  "Illustrator",
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-tech bg-blobs relative overflow-hidden">
      <div className="relative z-10">

        {/* HEADER */}
        <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold">
              RS
            </div>
            <div>
              <h1 className="text-xl font-semibold">R Sanjay</h1>
              <p className="text-sm text-gray-600">
                Full Stack Developer | UI/UX & Graphic Design Intern
              </p>
            </div>
          </div>

          <nav className="space-x-4 text-sm">
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </header>

        {/* HERO SECTION */}
        <section className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT — HERO CARD */}
          <div>
            <div className="card p-8 bg-white/95 rounded-[23px] shadow-sm hover:shadow-xl transform hover:-translate-y-2 transition-all duration-200">
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-[var(--text)]">
                Hi — I'm R Sanjay.
              </h2>

              <p className="mt-4 text-gray-700">
                I build efficient web applications, intuitive user experiences, and automation workflows.
              </p>

              <p className="mt-3 text-gray-600">
                I’m a third-year CSE student at SNS College of Technology,
                specializing in full-stack development, UI/UX design, and automation using modern tools.
              </p>

              {/* CTA BUTTONS */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-block px-4 py-2 bg-[var(--accent)] text-white rounded-[12px] shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-150"
                >
                  View My Projects
                </a>

                <a
                  href="/resume.pdf"
                  className="inline-block px-4 py-2 bg-white text-[var(--text)] border border-gray-200 rounded-[12px] shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-150"
                >
                  Download Resume
                </a>

                <a
                  href="#contact"
                  className="inline-block px-4 py-2 bg-[var(--peach)] text-[var(--text)] rounded-[12px] shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-150"
                >
                  Let's Connect
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — FIXED ROUND PROFILE IMAGE (WhatsApp-style) */}
          <div className="flex justify-center md:justify-end">
            <div
              className="w-80 h-80 rounded-full bg-white shadow-2xl overflow-hidden border-6 border-white transform hover:-translate-y-1 transition-all duration-200"
              aria-hidden="true"
            >
              <img
                src="/profile.jpg"
                alt="R Sanjay"
                className="w-full h-full object-cover"
                style={{
                  transform: "translateY(-6%) scale(1.12)",
                  objectPosition: "50% 38%"
                }}
              />
            </div>
          </div>

        </section>

        {/* PROJECTS */}
        <section id="projects" className="max-w-5xl mx-auto px-6 py-12">
          <h3 className="text-2xl font-semibold">Projects</h3>
          <p className="mt-2 text-gray-600">Some of my highlighted work in development and automation.</p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article
                key={p.id}
                className="bg-white p-5 rounded-[23px] shadow-sm hover:shadow-xl hover:-translate-y-2 transform transition-all duration-200"
              >
                <h4 className="font-semibold text-lg">{p.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{p.desc}</p>

                <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-500">
                  {p.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 border rounded">{t}</span>
                  ))}
                </div>

                <div className="mt-4">
                  <a href={p.link} className="text-blue-700 text-sm">View project →</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="max-w-5xl mx-auto px-6 py-12">
          <h3 className="text-2xl font-semibold">Skills</h3>
          <p className="mt-2 text-gray-600">Tools I work with regularly.</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((s, i) => (
              <div
                key={i}
                className="px-3 py-2 bg-gray-100 border rounded-[23px] text-sm shadow-sm hover:scale-105 transform transition duration-200"
              >
                {s}
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="max-w-5xl mx-auto px-6 py-12">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <p className="mt-2 text-gray-600">
            Let’s connect — email or LinkedIn works best.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">

            {/* Left contact box */}
            <div className="bg-white p-6 rounded-[23px] shadow-sm">
              <h4 className="font-semibold">Email</h4>
              <p className="text-sm text-gray-600 mt-2">sanjayramesh883@gmail.com</p>

              <h4 className="font-semibold mt-4">LinkedIn</h4>
              <p className="text-sm text-gray-600 mt-2">
                linkedin.com/in/yourprofile
              </p>
            </div>

            {/* Message form */}
            <form className="bg-white p-6 rounded-[23px] shadow-sm">
              <label className="block text-sm">Your name</label>
              <input className="w-full mt-1 p-2 border rounded" placeholder="Name" />

              <label className="block text-sm mt-3">Message</label>
              <textarea
                className="w-full mt-1 p-2 border rounded h-28"
                placeholder="Say hi — let's collaborate!"
              ></textarea>

              <div className="mt-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-[var(--accent)] text-white rounded-[12px] shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-150"
                >
                  Send message
                </button>
              </div>
            </form>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="max-w-5xl mx-auto p-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} R Sanjay — Built with ❤️
        </footer>

      </div>
    </div>
  );
}





