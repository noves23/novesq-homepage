import "./TechnologyPage.css";

const technologyGroups = [
  {
    number: "01",
    title: "Test automation",
    intro: "Build confidence with automated checks that are maintainable, repeatable and aligned with business risk.",
    items: ["Playwright", "TypeScript", "API testing", "Reusable test frameworks"],
    tone: "copper",
  },
  {
    number: "02",
    title: "Delivery & integration",
    intro: "Bring quality checks into the development workflow and make feedback available when teams need it.",
    items: ["CI/CD pipelines", "GitHub Actions", "Automated reporting", "Environment-aware execution"],
    tone: "sage",
  },
  {
    number: "03",
    title: "Performance & reliability",
    intro: "Understand how applications behave under load and use evidence to identify bottlenecks and risks.",
    items: ["k6", "LoadRunner", "Performance metrics", "Monitoring & analysis"],
    tone: "copper",
  },
  {
    number: "04",
    title: "Intelligent testing",
    intro: "Use modern AI-supported techniques selectively, where they improve insight, efficiency or coverage.",
    items: ["AI-assisted workflows", "LLM evaluation concepts", "Risk-based test design", "Human-reviewed results"],
    tone: "sage",
  },
];

const principles = [
  { number: "01", title: "Purpose before tools", text: "We start with the product, the risks and the team's goals — then choose the technology that fits." },
  { number: "02", title: "Practical over fashionable", text: "A tool is valuable when it solves a real problem and can be maintained over time." },
  { number: "03", title: "Clear, useful feedback", text: "Reports and metrics should help teams understand quality and decide what to do next." },
];

export default function TechnologyPage() {
  return (
    <div className="technology-page">
      <header className="technology-nav">
        <a className="technology-brand" href="/" aria-label="NOVESQ home"><span>NOVES</span><b>Q</b></a>
        <nav aria-label="Main navigation">
          <a href="/solutions">Solutions</a>
          <a href="/about">About us</a>
          <a href="/technology">Technology</a>
          <a href="/contact">Contact</a>
        </nav>
        <a className="technology-nav-cta" href="/contact">Talk to us <span>→</span></a>
      </header>

      <main id="top">
        <section className="technology-hero">
          <div className="technology-hero-copy">
            <div className="technology-eyebrow"><span /> TECHNOLOGY & METHODS</div>
            <h1>The right tools.<br /><em>For the right reasons.</em></h1>
            <p className="technology-hero-lead">Modern technology, guided by experience.</p>
            <p className="technology-hero-text">We use proven frameworks and modern methods to build effective quality practices. Our focus is not on collecting tools — it is on choosing the right approach for your product, team and goals.</p>
            <a className="technology-button" href="#toolkit">Explore our toolkit <span>↓</span></a>
          </div>
          <div className="technology-hero-art" aria-hidden="true">
            <div className="technology-orbit orbit-one" />
            <div className="technology-orbit orbit-two" />
            <div className="technology-orbit orbit-three" />
            <div className="technology-art-core"><span>N</span><i>Q</i></div>
            <div className="technology-art-label label-top">ENGINEERING</div>
            <div className="technology-art-label label-bottom">QUALITY BY DESIGN</div>
          </div>
        </section>

        <section className="technology-toolkit" id="toolkit">
          <div className="technology-section-heading">
            <div className="technology-eyebrow"><span /> OUR TOOLKIT</div>
            <div className="technology-heading-grid">
              <h2>Technology that<br />serves quality.</h2>
              <p>Our toolkit evolves with the needs of each project. These are examples of the technologies and practices that can support a robust, efficient quality process.</p>
            </div>
          </div>
          <div className="technology-groups">
            {technologyGroups.map((group) => (
              <article className={`technology-group tone-${group.tone}`} key={group.number}>
                <div className="technology-group-top"><span>{group.number}</span><div className="technology-group-symbol">{group.number === "01" ? "⌘" : group.number === "02" ? "∞" : group.number === "03" ? "↗" : "✳"}</div></div>
                <h3>{group.title}</h3>
                <p>{group.intro}</p>
                <div className="technology-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
          <p className="technology-note">The exact toolset depends on your application, existing workflow and quality objectives.</p>
        </section>

        <section className="technology-principles" id="principles">
          <div className="technology-principles-intro">
            <div className="technology-eyebrow technology-eyebrow-light"><span /> HOW WE CHOOSE</div>
            <h2>Tools are important.<br /><em>Judgement matters more.</em></h2>
            <p>Technology creates value when it is applied with context, experience and a clear understanding of the problem to solve.</p>
          </div>
          <div className="technology-principles-list">
            {principles.map((principle) => <article key={principle.number}>
              <span className="technology-principle-number">{principle.number}</span>
              <div><h3>{principle.title}</h3><p>{principle.text}</p></div>
              <span className="technology-principle-arrow">↗</span>
            </article>)}
          </div>
        </section>

        <section className="technology-cta" id="contact">
          <div>
            <div className="technology-eyebrow"><span /> LET'S TALK</div>
            <h2>Looking for the right approach?</h2>
            <p>Let's discuss your application, your quality goals and the tools that can help you get there.</p>
          </div>
          <a className="technology-button" href="mailto:hello@novesq.com">Talk to us <span>→</span></a>
        </section>
      </main>

      <footer className="technology-footer">
        <a className="technology-brand" href="/"><span>NOVES</span><b>Q</b></a>
        <span>© {new Date().getFullYear()} NOVESQ. All rights reserved.</span>
        <span>Proven expertise. Modern technology.</span>
      </footer>
    </div>
  );
}
