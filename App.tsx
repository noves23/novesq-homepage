import "./App.css";
import NovesqHeroGraphic from "./NovesqHeroGraphic";
import SolutionIcon from "./SolutionIcon";
import SolutionsPage from "./SolutionsPage";
import AboutUsPage from "./AboutUsPage";
import TechnologyPage from "./TechnologyPage";
import ContactPage from "./ContactPage";
import "./SiteSubpageNav.css";

const solutions = [
  {
    icon: "automation" as const,
    title: "Test Automation",
    text: "Reliable, maintainable and scalable test automation for web, mobile and API.",
    iconColor: "copper",
  },
  {
    icon: "quality" as const,
    title: "Quality Engineering",
    text: "Shift-left quality by design and expert consulting to improve your development flow.",
    iconColor: "sage",
  },
  {
    icon: "performance" as const,
    title: "Performance & Reliability",
    text: "Ensure your application performs, scales and stays resilient under pressure.",
    iconColor: "copper",
  },
  {
    icon: "intelligent" as const,
    title: "Intelligent Testing",
    text: "Leverage modern tools and techniques to test smarter, not harder.",
    iconColor: "sage",
  },
];

const technologies = [
  "Playwright",
  "TypeScript",
  "API",
  "CI/CD",
  "Cloud",
  "AI",
];

const values = [
  {
    icon: "♧",
    title: "Proven expertise",
    text: "Years of hands-on experience with real systems and complex requirements.",
  },
  {
    icon: "⚙",
    title: "Intelligent automation",
    text: "We automate where it creates real value — for your team and your business.",
  },
  {
    icon: "⌁",
    title: "Modern technology",
    text: "We use the right tools and frameworks for long-term success.",
  },
  {
    icon: "◇",
    title: "Quality by design",
    text: "Quality isn't the last step — it's part of every stage of the process.",
  },
];

function HomePage() {
  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="/" aria-label="NOVESQ home">
          <span>NOVES</span><span className="brand-q">Q</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="/solutions">Solutions</a>
          <a href="/technology">Technology</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>

        <a className="button button-primary nav-cta" href="/contact">
          Talk to us <span>→</span>
        </a>
      </header>

      <main id="top">
        <section className="hero section-light">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              SOFTWARE QUALITY. AUTOMATED.
            </div>

            <h1>
              Intelligent
              <br />
              Software Quality
            </h1>

            <p className="hero-lead">
              Proven expertise. Modern technology.
            </p>

            <p className="hero-description">
              We combine software quality expertise with modern automation
              technologies to help teams build, test and deliver software with
              confidence.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="/solutions">
                Explore solutions <span>→</span>
              </a>
              <a className="button button-secondary" href="/contact">
                Talk to us
              </a>
            </div>
          </div>

           <div className="hero-visual">
     <NovesqHeroGraphic />
   </div>
        </section>

        <section className="solutions section-light" id="solutions">
          <div className="section-heading">
            <div className="section-label">
              <span className="eyebrow-line" />
              01&nbsp;&nbsp; WHAT WE DO
            </div>
            <div className="section-heading-grid">
              <h2>
                Quality engineering,
                <br />
                built for modern software.
              </h2>
              <p>
                From test automation to performance engineering, we help you
                build reliable, scalable and high-quality software — faster
                and more efficiently.
              </p>
            </div>
          </div>

          <div className="solution-grid">
            {solutions.map((item) => (
              <article className="solution-card" key={item.title}>
                <div className={`card-icon card-icon-${item.iconColor}`}>
                  <SolutionIcon name={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href="/contact" className="text-link">
                  Learn more <span>→</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="process section-dark" id="about">
          <div className="process-intro">
            <div className="section-label section-label-dark">
              <span className="eyebrow-line" />
              02&nbsp;&nbsp; HOW WE WORK
            </div>
            <h2>
              Experience first.
              <br />
              Technology where it matters.
            </h2>
            <p>
              We bring deep domain knowledge and real-world experience to every
              project. Technology helps us go further — automating repetitive
              work, increasing coverage and delivering faster insights.
            </p>
            <a href="/contact" className="text-link text-link-copper">
              Our approach <span>→</span>
            </a>
          </div>

          <div className="process-steps">
            {[
              ["01", "⌕", "Understand", "We analyze your needs and your context."],
              ["02", "⚙", "Automate", "We build efficient, scalable and maintainable solutions."],
              ["03", "▥", "Measure", "We provide clear insights and transparency."],
              ["04", "↗", "Improve", "We help you continuously increase quality and speed."],
            ].map(([number, icon, title, text], index) => (
              <div className="process-step" key={title}>
                <div className="step-top">
                  <span className="step-number">{number}</span>
                  <div className={`step-icon ${index === 2 ? "sage" : ""}`}>
                    {icon}
                  </div>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="values section-light">
          <div className="values-title">
            <div className="section-label">
              <span className="eyebrow-line" />
              03&nbsp;&nbsp; WHY NOVESQ
            </div>
            <h2>
              Built on experience.
              <br />
              Enhanced by technology.
            </h2>
          </div>

          <div className="values-grid">
            {values.map((value) => (
              <article className="value-card" key={value.title}>
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="technology section-light" id="technology">
          <div className="section-heading">
            <div className="section-label">
              <span className="eyebrow-line" />
              04&nbsp;&nbsp; TECHNOLOGY
            </div>
            <div className="section-heading-grid">
              <h2>We use the right technology for the right problem.</h2>
              <p>
                Our toolkit is based on proven, industry-leading technologies.
                We stay up to date with modern tools and frameworks to deliver
                the best results for your team and your product.
              </p>
            </div>
          </div>

          <div className="technology-list">
            {technologies.map((technology, index) => (
              <div className="technology-item" key={technology}>
                <span className={`tech-symbol tech-${index + 1}`}>
                  {["◈", "TS", "⌘", "∞", "☁", "✦"][index]}
                </span>
                <span>{technology}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="contact section-dark" id="contact">
          <div>
            <div className="section-label section-label-dark">
              <span className="eyebrow-line" />
              LET'S TALK
            </div>
            <h2>Let's build better software.</h2>
            <p>
              Get in touch and let's discuss how NOVESQ can support your
              software quality goals.
            </p>
            <a className="button button-copper" href="mailto:hello@novesq.com">
              Talk to us <span>→</span>
            </a>
          </div>

          <div className="contact-mark" aria-hidden="true">
            <svg
              className="contact-q"
              viewBox="0 0 180 180"
              role="img"
              aria-label="NOVESQ symbol"
            >
              <defs>
                <linearGradient id="contactQTail" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C47A5A" stopOpacity="0.48" />
                  <stop offset="100%" stopColor="#F7EDDF" stopOpacity="1" />
                </linearGradient>
              </defs>
              <path
                d="M 119 112 A 49 49 0 1 1 126 94"
                fill="none"
                stroke="#C47A5A"
                strokeWidth="12"
                strokeLinecap="butt"
              />
              <path d="M 112 111 L 123 100 L 135 112 L 124 124 Z" fill="#C47A5A" />
              <path
                d="M 119 119 L 130 108 L 171 149 L 160 160 Z"
                fill="url(#contactQTail)"
              />
            </svg>
            <div className="contact-brand">
              <span>NOVES</span><span className="brand-q">Q</span>
            </div>
            <p>Intelligent Software Quality</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <span>NOVES</span><span className="brand-q">Q</span>
        </div>
        <span>© {new Date().getFullYear()} NOVESQ. All rights reserved.</span>
        <span>Proven expertise. Modern technology.</span>
      </footer>
    </div>
  );
}


function SubpageNavigation() {
  return (
    <header className="site-subpage-nav">
      <a className="site-subpage-brand" href="/" aria-label="NOVESQ home">
        <span>NOVES</span><b>Q</b>
      </a>
      <nav aria-label="Main navigation">
        <a href="/solutions">Solutions</a>
        <a href="/about">About us</a>
        <a href="/technology">Technology</a>
        <a href="/contact">Contact</a>
      </nav>
      <a className="site-subpage-cta" href="/contact">Let’s talk <span>↗</span></a>
    </header>
  );
}

function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  switch (path) {
    case "/solutions":
      return <><SubpageNavigation /><SolutionsPage /></>;
    case "/about":
    case "/about-us":
      return <><SubpageNavigation /><AboutUsPage /></>;
    case "/technology":
      return <TechnologyPage />;
    case "/contact":
      return <ContactPage />;
    case "/":
    default:
      return <HomePage />;
  }
}

export default App;
