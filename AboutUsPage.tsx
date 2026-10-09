import React from "react";
import "./AboutUsPage.css";

const expertise = [
  {
    number: "01",
    title: "Quality engineering",
    text: "A structured approach to quality that connects business expectations, technical risks and the way software is delivered.",
  },
  {
    number: "02",
    title: "Test automation",
    text: "Maintainable automated checks that provide fast feedback, support regression testing and help teams release with confidence.",
  },
  {
    number: "03",
    title: "Performance & reliability",
    text: "Practical testing and analysis to understand application behaviour, identify bottlenecks and improve resilience.",
  },
  {
    number: "04",
    title: "Modern testing methods",
    text: "Carefully selected tools and new techniques, including AI-supported approaches, applied where they bring measurable value.",
  },
];

const principles = [
  {
    number: "01",
    title: "Understand before acting",
    text: "We begin by learning about your product, users, delivery process and the risks that matter most.",
  },
  {
    number: "02",
    title: "Keep it practical",
    text: "We favour clear, maintainable solutions over complexity for its own sake. The approach should fit your team and your context.",
  },
  {
    number: "03",
    title: "Improve continuously",
    text: "Quality grows through feedback, collaboration and regular improvement—not through a single tool or one final testing phase.",
  },
];

export default function AboutUsPage() {
  return (
    <main className="about-page">
      <section className="ap-hero">
        <div className="ap-container">
          <div className="ap-eyebrow"><span className="ap-eyebrow-line" /> ABOUT NOVESQ</div>
          <div className="ap-hero-grid">
            <div className="ap-hero-copy">
              <h1>
                Experience that makes
                <br />
                <span>quality work.</span>
              </h1>
              <p className="ap-hero-lead">Proven expertise. Modern technology.</p>
              <p className="ap-hero-description">
                NOVESQ brings together years of hands-on experience in software
                quality, testing and automation. We help teams approach quality
                with clarity, use technology with purpose and build confidence
                throughout the software delivery process.
              </p>
              <div className="ap-actions">
                <a className="ap-button ap-button-primary" href="#ap-contact">
                  Get to know us <span aria-hidden="true">↗</span>
                </a>
                <a className="ap-text-link" href="#ap-approach">
                  Our approach <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
            <div className="ap-hero-art" aria-hidden="true">
              <div className="ap-art-grid" />
              <div className="ap-art-orbit ap-art-orbit-outer" />
              <div className="ap-art-orbit ap-art-orbit-inner" />
              <div className="ap-art-ring"><span className="ap-art-ring-cut" /><span className="ap-art-tail" /></div>
              <span className="ap-art-dot ap-art-dot-one" />
              <span className="ap-art-dot ap-art-dot-two" />
              <span className="ap-art-dot ap-art-dot-three" />
              <div className="ap-art-caption"><span>EXPERIENCE.</span><span>ENGINEERING.</span><i /></div>
            </div>
          </div>
          <div className="ap-hero-foot"><span>EXPERIENCE IN PRACTICE</span><span>QUALITY WITH PURPOSE</span></div>
        </div>
      </section>

      <section className="ap-intro">
        <div className="ap-container ap-intro-grid">
          <div>
            <div className="ap-eyebrow"><span className="ap-eyebrow-line" /> WHO WE ARE</div>
            <h2>Quality is more than a test at the end.</h2>
          </div>
          <div className="ap-intro-copy">
            <p>
              Good software quality starts with understanding what a product
              needs to achieve, where the risks lie and how a team works. Testing
              is most effective when it is connected to these questions from the
              beginning—not added only when a release is approaching.
            </p>
            <p>
              NOVESQ is built around this practical mindset. We combine proven
              engineering principles with experience from software testing and
              delivery to help organisations make informed decisions, improve
              feedback and develop quality practices that last.
            </p>
          </div>
        </div>
      </section>

      <section className="ap-expertise">
        <div className="ap-container">
          <div className="ap-section-heading">
            <div>
              <div className="ap-eyebrow"><span className="ap-eyebrow-line" /> EXPERIENCE & EXPERTISE</div>
              <h2>Strong foundations.<br /><span>Modern capabilities.</span></h2>
            </div>
            <p>
              Every engagement is different. We draw on a broad quality
              engineering toolkit and adapt our work to the product, team and
              business goals in front of us.
            </p>
          </div>
          <div className="ap-expertise-grid">
            {expertise.map((item) => (
              <article className="ap-expertise-card" key={item.number}>
                <span className="ap-card-number">{item.number}</span>
                <div className="ap-card-rule" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ap-approach" id="ap-approach">
        <div className="ap-container ap-approach-grid">
          <div className="ap-approach-intro">
            <div className="ap-eyebrow ap-eyebrow-light"><span className="ap-eyebrow-line" /> HOW WE THINK</div>
            <h2>Experience first.<br /><span>Technology where it matters.</span></h2>
            <p>
              Tools can make quality work faster and more consistent, but they
              do not replace sound judgement. We select methods and technologies
              based on the problem to solve—not simply because they are new.
            </p>
          </div>
          <div className="ap-principles">
            {principles.map((item) => (
              <article className="ap-principle" key={item.number}>
                <span className="ap-principle-number">{item.number}</span>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
                <span className="ap-principle-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ap-belief">
        <div className="ap-container ap-belief-inner">
          <div className="ap-eyebrow"><span className="ap-eyebrow-line" /> OUR BELIEF</div>
          <blockquote>
            “The best quality approach is one that helps people make better
            decisions—and helps teams deliver better software with confidence.”
          </blockquote>
          <p>That is the standard we aim to bring to every collaboration.</p>
        </div>
      </section>

      <section className="ap-contact" id="ap-contact">
        <div className="ap-container ap-contact-inner">
          <div>
            <div className="ap-eyebrow ap-eyebrow-light"><span className="ap-eyebrow-line" /> LET'S TALK</div>
            <h2>Let's make quality<br /><span>part of your advantage.</span></h2>
            <p>Tell us about your product, your challenges and where you would like to improve. We can explore a practical way forward together.</p>
            <a className="ap-button ap-button-copper" href="mailto:hello@novesq.com">Start a conversation <span aria-hidden="true">↗</span></a>
          </div>
          <div className="ap-contact-mark" aria-hidden="true">
            <div className="ap-contact-q"><span /></div>
            <div className="ap-contact-brand"><span>NOVES</span><b>Q</b></div>
            <p>Intelligent Software Quality</p>
          </div>
        </div>
      </section>
    </main>
  );
}
