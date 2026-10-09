import "./ContactPage.css";

const contactTopics = [
  {
    number: "01",
    title: "Test automation",
    text: "Build or improve a maintainable automation approach for your application.",
  },
  {
    number: "02",
    title: "Quality engineering",
    text: "Strengthen quality practices, feedback loops and collaboration across your team.",
  },
  {
    number: "03",
    title: "Performance & reliability",
    text: "Understand how your application behaves under load and where it can improve.",
  },
];

export default function ContactPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const company = String(data.get("company") ?? "");
    const topic = String(data.get("topic") ?? "General enquiry");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`NOVESQ enquiry: ${topic}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company || "Not provided"}\nTopic: ${topic}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:hello@novesq.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-page">
      <header className="contact-nav">
        <a className="contact-brand" href="/" aria-label="NOVESQ home">
          <span>NOVES</span><span className="contact-brand-q">Q</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="/solutions">Solutions</a>
          <a href="/about">About us</a>
          <a href="/technology">Technology</a>
          <a className="contact-nav-active" href="/contact">Contact</a>
        </nav>
        <a className="contact-nav-link" href="#contact-form">Let’s talk <span>↗</span></a>
      </header>

      <main>
        <section className="contact-hero">
          <div className="contact-hero-copy">
            <div className="contact-eyebrow"><span /> LET’S TALK</div>
            <h1>Let’s make software quality <em>work for you.</em></h1>
            <p className="contact-hero-lead">
              Tell us about your goals, challenges or ideas. We’ll explore how
              practical quality engineering and modern technology can help.
            </p>
            <a className="contact-primary-button" href="#contact-form">
              Start a conversation <span>→</span>
            </a>
            <p className="contact-hero-note">No obligation. Just a focused conversation about your needs.</p>
          </div>

          <div className="contact-hero-art" aria-hidden="true">
            <div className="contact-art-orbit contact-art-orbit-one" />
            <div className="contact-art-orbit contact-art-orbit-two" />
            <div className="contact-art-core">N<span>Q</span></div>
            <div className="contact-art-caption">QUALITY, BY DESIGN</div>
            <div className="contact-art-dot contact-art-dot-one" />
            <div className="contact-art-dot contact-art-dot-two" />
          </div>
        </section>

        <section className="contact-content" id="contact-form">
          <div className="contact-form-intro">
            <div className="contact-eyebrow"><span /> GET IN TOUCH</div>
            <h2>What would you like to <em>improve?</em></h2>
            <p>
              Share a little context and we can take it from there. Whether you
              have a defined project or are still exploring options, you’re welcome
              to get in touch.
            </p>
            <div className="contact-topic-list">
              {contactTopics.map((item) => (
                <article className="contact-topic" key={item.number}>
                  <span className="contact-topic-number">{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-heading">
              <span>CONTACT FORM</span>
              <p>Fields marked with * are required.</p>
            </div>
            <div className="contact-form-row">
              <label>
                Name *
                <input name="name" type="text" autoComplete="name" placeholder="Your name" required />
              </label>
              <label>
                Business email *
                <input name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
              </label>
            </div>
            <label>
              Company <span className="contact-optional">(optional)</span>
              <input name="company" type="text" autoComplete="organization" placeholder="Company name" />
            </label>
            <label>
              What can we help with? *
              <select name="topic" defaultValue="" required>
                <option value="" disabled>Select a topic</option>
                <option>Test automation</option>
                <option>Quality engineering</option>
                <option>Performance & reliability</option>
                <option>Intelligent testing</option>
                <option>General enquiry</option>
              </select>
            </label>
            <label>
              A little about your project *
              <textarea name="message" rows={5} placeholder="Tell us about your goals, challenges or current setup…" required />
            </label>
            <button className="contact-primary-button contact-submit" type="submit">
              Prepare message <span>→</span>
            </button>
            <p className="contact-form-footnote">
              Submitting opens your default email application with your message prepared.
              Nothing is sent directly from this website.
            </p>
          </form>
        </section>

        <section className="contact-bottom">
          <div>
            <div className="contact-eyebrow contact-eyebrow-light"><span /> NOVESQ</div>
            <h2>Proven expertise.<br /><em>Modern technology.</em></h2>
          </div>
          <a className="contact-outline-button" href="#contact-form">Let’s talk <span>↗</span></a>
          <div className="contact-bottom-mark" aria-hidden="true">Q</div>
        </section>
      </main>

      <footer className="contact-footer">
        <a className="contact-footer-brand" href="/">NOVES<span>Q</span></a>
        <span>© {new Date().getFullYear()} NOVESQ. All rights reserved.</span>
        <span>Intelligent Software Quality</span>
      </footer>
    </div>
  );
}
