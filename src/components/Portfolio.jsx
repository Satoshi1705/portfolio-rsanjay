import React, { useEffect } from "react";
import "./Portfolio.css";

const projects = [
  {
    title: "TruPoint D2C Analytics Dashboard",
    tags: "Figma / UX Research / Design Systems",
    desc: "A full analytics dashboard for D2C businesses, built from research into real merchant workflows. 60+ responsive screens cover sales, customers, marketing, and operations, backed by a reusable component library.",
  },
  {
    title: "MERN Notes Application",
    tags: "MongoDB / Express / React / Node",
    desc: "A full-stack CRUD notes app with a clean, responsive React interface backed by RESTful APIs and MongoDB storage.",
  },
  {
    title: "AI Food Inventory Automation",
    tags: "n8n / Gemini Flash / Gmail API",
    desc: "An AI-powered workflow that tracks inventory and expiry dates in Google Sheets, then generates and sends personalized alert emails using Gemini Flash.",
  },
];

const skills = [
  ["UX Process", "User research, user flows, wireframing, prototyping, usability considerations, information architecture"],
  ["UI Design", "High-fidelity UI, responsive web design, design systems, reusable components, dashboard design"],
  ["Design Tools", "Figma, Adobe Photoshop, Adobe Illustrator, Canva"],
  ["Front-End", "React.js, HTML5, CSS3, JavaScript. Building and validating designs in-browser"],
  ["Back-End & Tools", "Node.js, Express.js, MongoDB, RESTful APIs, Git/GitHub, Postman"],
  ["AI & Automation", "n8n, Gemini API, prompt engineering, AI workflow automation"],
];

const experience = [
  {
    date: "Dec 2025 — 2026",
    role: "UI/UX Design Intern",
    org: "APR Hub Technologies",
    points: [
      "Conducted UX research and designed user-centered interfaces, translating merchant workflows into clear design requirements",
      "Designed the TruPoint D2C Analytics Dashboard end-to-end. 60+ high-fidelity screens across analytics, customer, marketing, and operations",
      "Built a reusable component library and design system in Figma",
      "Partnered with developers and stakeholders to turn requirements into implementation-ready product experiences",
    ],
  },
  {
    date: "June 2025",
    role: "UI/UX & Graphic Design Intern",
    org: "Scorpleo Technologies",
    points: [
      "Designed branding materials, social creatives, posters, and marketing assets across Photoshop, Illustrator, and Canva",
      "Maintained visual consistency across multiple client campaigns",
    ],
  },
  {
    date: "June 2026 — Present",
    role: "Web App Development Intern",
    org: "Skill Hive Innovations",
    points: [
      "Building and maintaining real-world web application projects, translating UI designs into functional, accessible interfaces",
      "Collaborating with a development team on industry-standard software practices",
    ],
  },
  {
    date: "Aug 2024",
    role: "Full Stack Development Intern",
    org: "TechSnapie Solutions",
    points: [
      "Developed responsive web applications with RESTful APIs and database integration",
      "Worked with Git across the full software development lifecycle",
    ],
  },
];

const education = [
  "AWS Academy Graduate — Generative AI Foundations (Training Badge)",
  "Complete Linux Training Course to Get Your Dream IT Job 2025 (Udemy)",
  "Internship Certifications — TechSnapie Solutions, APR Hub Technologies, Scorpleo Technologies",
  "Best Rotaractor of the Month — Rotaract Club of SNS College of Technology",
];

export default function Portfolio() {
  useEffect(() => {
    const heroHeading = document.getElementById("heroHeading");
    if (heroHeading) {
      const words = heroHeading.textContent.trim().split(" ");
      heroHeading.innerHTML = words
        .map(
          (word, i) =>
            `<span class="word"><span style="animation-delay:${0.28 + i * 0.055}s">${word}</span></span>`
        )
        .join(" ");
    }

    document.querySelectorAll("main h2").forEach((heading) => {
      heading.innerHTML = `<span class="h2-inner">${heading.innerHTML}</span>`;
    });

    const navLinks = document.querySelectorAll(".nav-list a");
    const sections = document.querySelectorAll("main section");

    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          const link = document.querySelector(`.nav-list a[href="#${id}"]`);
          if (entry.isIntersecting) {
            navLinks.forEach((item) => item.classList.remove("active"));
            if (link) link.classList.add("active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => spyObserver.observe(section));

    const groups = [
      document.querySelectorAll(".skill-card"),
      document.querySelectorAll(".exp-item"),
      document.querySelectorAll(".project-card"),
      document.querySelectorAll(".edu-row"),
      document.querySelectorAll(".about-text"),
    ];

    groups.forEach((group) => {
      group.forEach((element, i) => {
        element.classList.add("reveal");
        element.style.setProperty("--rd", `${i * 0.08}s`);
      });
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((element) =>
      revealObserver.observe(element)
    );

    const h2Observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            h2Observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    document.querySelectorAll("main h2").forEach((heading) =>
      h2Observer.observe(heading)
    );

    const progressFill = document.getElementById("progressFill");

    const updateProgress = () => {
      if (!progressFill) return;
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressFill.style.height = `${pct}%`;
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    const hero = document.getElementById("home");
    const grid = document.getElementById("canvasGrid");
    const mxVal = document.getElementById("mxVal");
    const myVal = document.getElementById("myVal");

    const handleMouseMove = (event) => {
      if (!hero || !grid) return;
      const rect = hero.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      grid.style.setProperty("--mx", `${x}px`);
      grid.style.setProperty("--my", `${y}px`);
      if (mxVal) mxVal.textContent = Math.round(x);
      if (myVal) myVal.textContent = Math.round(y);
    };

    hero?.addEventListener("mousemove", handleMouseMove);

    const navToggle = document.getElementById("navToggle");
    const sidebar = document.getElementById("sidebar");

    const toggleMenu = () => sidebar?.classList.toggle("open");
    navToggle?.addEventListener("click", toggleMenu);

    navLinks.forEach((link) => {
      link.addEventListener("click", () => sidebar?.classList.remove("open"));
    });

    return () => {
      spyObserver.disconnect();
      revealObserver.disconnect();
      h2Observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
      hero?.removeEventListener("mousemove", handleMouseMove);
      navToggle?.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <div className="portfolio">
      <button className="nav-toggle" id="navToggle" aria-label="Toggle navigation">
        MENU
      </button>

      <aside className="sidebar" id="sidebar">
        <div className="progress-rail">
          <div className="progress-fill" id="progressFill" />
        </div>

        <div>
          <div className="status">
            <span className="dot" />
            OPEN TO WORK
          </div>

          <div className="brand-mark">Portfolio / 2026</div>
          <div className="brand-name">R Sanjay</div>
          <div className="brand-role">UI/UX Designer &amp; Developer</div>

          <ul className="nav-list" id="navList">
            <li><a href="#home"><span className="idx">00</span>Home</a></li>
            <li><a href="#about"><span className="idx">01</span>About</a></li>
            <li><a href="#skills"><span className="idx">02</span>Skills</a></li>
            <li><a href="#experience"><span className="idx">03</span>Experience</a></li>
            <li><a href="#projects"><span className="idx">04</span>Projects</a></li>
            <li><a href="#education"><span className="idx">05</span>Education</a></li>
            <li><a href="#contact"><span className="idx">06</span>Contact</a></li>
          </ul>
        </div>

        <div className="sidebar-foot">
          <a href="https://portfolio-navy-omega-xi0cyl97tj.vercel.app/" target="_blank" rel="noopener noreferrer">Portfolio (old)</a>
          <a href="https://www.linkedin.com/in/sanjayrameshk/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/Satoshi1705" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:sanjayramesh883@gmail.com">Email</a>
        </div>
      </aside>

      <main className="main">
        <section id="home">
          <div className="canvas-grid" id="canvasGrid" />
          <div className="inspector" id="inspector">
            X <span id="mxVal">—</span> · Y <span id="myVal">—</span>
          </div>

          <div className="hero-inner">
            <div className="hero-kicker">Coimbatore, Tamil Nadu, India</div>
            <h1 id="heroHeading">
              Designing interfaces people don&apos;t have to think about.
            </h1>
            <div className="hero-role">
              Final-year CSE student building at the intersection of UX research,
              UI design, and front-end engineering.
            </div>
            <p className="hero-pitch">
              I research how people actually use a product, then design and build
              the interface that gets out of their way, from Figma wireframe to
              shipped React component.
            </p>

            <div className="hero-meta">
              <div><strong>60+</strong>Design screens on a live analytics product</div>
              <div><strong>04</strong>Design &amp; dev internships</div>
              <div><strong>8.31</strong>CGPA, CSE, expected 2027</div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="eyebrow">01 — About</div>
          <h2>Where research meets the build.</h2>
          <p className="about-text">
            I&apos;m a final-year Computer Science and Engineering student working
            as a UI/UX designer and full-stack developer. My process starts with
            understanding how people work, through research, flows, and wireframes,
            and ends with an interface I can build myself, in Figma and in code.
          </p>
          <p className="about-text">
            That range shows up in the work: 60+ production screens for a D2C
            analytics dashboard, branding and campaign design for client-facing
            brands, and full-stack applications built end to end with React, Node,
            and MongoDB. I care about consistency, one design system, one voice,
            used everywhere it needs to be.
          </p>
        </section>

        <section id="skills">
          <div className="eyebrow">02 — Skills</div>
          <h2>What I work with.</h2>
          <div className="skills-grid">
            {skills.map(([title, description]) => (
              <div className="skill-card" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="experience">
          <div className="eyebrow">03 — Experience</div>
          <h2>Where I&apos;ve worked.</h2>

          {experience.map((item) => (
            <div className="exp-item" key={`${item.role}-${item.org}`}>
              <div className="exp-date">{item.date}</div>
              <div>
                <div className="exp-role">{item.role}</div>
                <div className="exp-org">{item.org}</div>
                <ul className="exp-list">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        <section id="projects">
          <div className="eyebrow">04 — Projects</div>
          <h2>Selected work.</h2>

          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-top">
                <div className="project-title">{project.title}</div>
                <div className="project-tags">{project.tags}</div>
              </div>
              <div className="project-desc">{project.desc}</div>
            </article>
          ))}
        </section>

        <section id="education">
          <div className="eyebrow">05 — Education</div>
          <h2>Background &amp; recognition.</h2>

          <div className="edu-row">
            <div>
              <div className="edu-name">
                Bachelor of Engineering, Computer Science and Engineering
              </div>
              <div className="edu-sub">
                SNS College of Technology · CGPA 8.31 / 10
              </div>
            </div>
            <div className="edu-date">Expected April 2027</div>
          </div>

          <ul className="cert-list">
            {education.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section id="contact">
          <div className="eyebrow">06 — Contact</div>
          <div className="contact-big">Let&apos;s build something worth using.</div>

          <div className="contact-links">
            <a href="mailto:sanjayramesh883@gmail.com">
              <span className="n">01</span>sanjayramesh883@gmail.com
            </a>
            <a href="tel:+919384241373">
              <span className="n">02</span>+91 93842 41373
            </a>
            <a href="https://www.linkedin.com/in/sanjayrameshk/" target="_blank" rel="noopener noreferrer">
              <span className="n">03</span>linkedin.com/in/sanjayrameshk
            </a>
            <a href="https://github.com/Satoshi1705" target="_blank" rel="noopener noreferrer">
              <span className="n">04</span>github.com/Satoshi1705
            </a>
          </div>

          <div className="foot-note">
            Coimbatore, Tamil Nadu, India — © {new Date().getFullYear()}
          </div>
        </section>
      </main>
    </div>
  );
}





