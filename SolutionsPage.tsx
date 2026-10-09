import React from "react";
import "./SolutionsPage.css";
import SolutionIcon from "./SolutionIcon";

const solutions = [
  {
    id: "test-automation",
    number: "01",
    icon: "automation" as const,
    title: "Test Automation",
    intro: "Reliable automation that supports confident releases.",
    description:
      "Build a maintainable automation foundation around the workflows that matter most to your business. We help teams reduce repetitive manual effort and get useful feedback earlier.",
    capabilities: [
      "UI and end-to-end automation",
      "API and integration testing",
      "Regression suites and smoke tests",
      "CI/CD integration and reporting",
    ],
    color: "copper",
  },
  {
    id: "quality-engineering",
    number: "02",
    icon: "quality" as const,
    title: "Quality Engineering",
    intro: "Quality built into the development process.",
    description:
      "Move quality beyond the final testing phase. We help establish pragmatic quality practices, clarify responsibilities and make testing a useful part of everyday delivery.",
    capabilities: [
      "Test strategy and risk-based planning",
      "Shift-left and quality-by-design practices",
      "Test process assessment and improvement",
      "Coaching for development and QA teams",
    ],
    color: "sage",
  },
  {
    id: "performance-reliability",
    number: "03",
    icon: "performance" as const,
    title: "Performance & Reliability",
    intro: "Know how your application behaves under pressure.",
    description:
      "Find performance bottlenecks before they affect customers. We help teams validate response times, capacity and stability with tests designed around realistic usage.",
    capabilities: [
      "Load and stress testing",
      "Performance baselines and thresholds",
      "Bottleneck analysis and reporting",
      "Reliability checks for critical journeys",
    ],
    color: "copper",
  },
  {
    id: "intelligent-testing",
    number: "04",
    icon: "intelligent" as const,
    title: "Intelligent Testing",
    intro: "Use modern tools with experienced judgement.",
    description:
      "Apply new testing techniques where they create practical value. We combine proven engineering methods with carefully selected modern tools to make testing more effective and adaptable.",
    capabilities: [
      "AI-assisted test design and analysis",
      "Evaluation of AI-enabled features",
      "Test data and scenario generation",
      "Human-reviewed results and quality metrics",
    ],
    color: "sage",
  },
];

const principles = [
  {
    number: "01",
    title: "Start with your risks",
    text: "We focus first on business-critical journeys, real user needs and the failures that would matter most.",
  },
  {
    number: "02",
    title: "Build for maintainability",
    text: "Automation should be understandable, reusable and practical to evolve as your product changes.",
  },
  {
    number: "03",
    title: "Fit your delivery flow",
    text: "We integrate quality checks into your existing tools and CI/CD process instead of adding unnecessary complexity.",
  },
];

export default function SolutionsPage() {
  return (
    <main className="solutions-page">
      <section className="sp-hero">
        <div className="sp-container">
          <div className="sp-eyebrow">
            <span className="sp-eyebrow-line" />
            SOLUTIONS
          </div>

          <div className="sp-hero-grid">
            <div className="sp-hero-copy">
              <h1>
                Quality engineering,
                <br />
                <span>built for modern software.</span>
              </h1>
              <p className="sp-hero-lead">
                Practical expertise. Thoughtful automation. Quality you can
                build on.
              </p>
              <p className="sp-hero-description">
                NOVESQ helps software teams improve confidence in every release
                through test automation, quality engineering and modern testing
                practices — tailored to the way your business works.
              </p>
              <div className="sp-actions">
                <a className="sp-button sp-button-primary" href="#sp-contact">
                  Discuss your needs <span aria-hidden="true">↗</span>
                </a>
                <a className="sp-text-link" href="#sp-services">
                  Explore our solutions <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            <div className="sp-hero-art" aria-hidden="true">
              <div className="sp-art-grid" />
              <div className="sp-art-orbit sp-art-orbit-outer" />
              <div className="sp-art-orbit sp-art-orbit-inner" />
              <div className="sp-art-ring">
                <span className="sp-art-ring-cut" />
                <span className="sp-art-tail" />
              </div>
              <span className="sp-art-dot sp-art-dot-one" />
              <span className="sp-art-dot sp-art-dot-two" />
              <span className="sp-art-dot sp-art-dot-three" />
              <div className="sp-art-caption">
                <span>PROVEN EXPERTISE.</span>
                <span>MODERN TECHNOLOGY.</span>
                <i />
              </div>
            </div>
          </div>

          <div className="sp-hero-foot">
            <span>BUILT AROUND YOUR PRODUCT</span>
            <span>DESIGNED FOR CONFIDENT DELIVERY</span>
          </div>
        </div>
      </section>

      <section className="sp-services" id="sp-services">
        <div className="sp-container">
          <div className="sp-section-intro">
            <div>
              <div className="sp-eyebrow">
                <span className="sp-eyebrow-line" />
                WHAT WE DO
              </div>
              <h2>
                The right quality approach
                <br />
                <span>for your challenges.</span>
              </h2>
            </div>
            <p>
              Every product is different. We combine the right methods,
              technology and experience to solve the quality challenges that
              matter to your team.
            </p>
          </div>

          <div className="sp-service-grid">
            {solutions.map((item) => (
              <article className="sp-service-card" key={item.id}>
                <div className="sp-card-top">
                  <span className={`sp-card-icon sp-${item.color}`}>
                    <SolutionIcon name={item.icon} />
                  </span>
                  <span className="sp-card-number">{item.number}</span>
                </div>
                <h3>{item.title}</h3>
                <p className="sp-card-intro">{item.intro}</p>
                <p className="sp-card-description">{item.description}</p>
                <a className="sp-card-link" href={`#${item.id}`}>
                  Explore solution <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-detail-section">
        <div className="sp-container">
          <div className="sp-detail-heading">
            <div className="sp-eyebrow">
              <span className="sp-eyebrow-line" />
              OUR CAPABILITIES
            </div>
            <h2>
              From individual challenges
              <br />
              <span>to a stronger quality practice.</span>
            </h2>
            <p>
              Start with a focused need or combine capabilities into an
              approach that grows with your product.
            </p>
          </div>

          <div className="sp-detail-list">
            {solutions.map((item) => (
              <article className="sp-detail-row" id={item.id} key={item.id}>
                <div className={`sp-detail-mark sp-${item.color}`}>
                  <SolutionIcon name={item.icon} />
                </div>
                <div className="sp-detail-title">
                  <span>{item.number} / SOLUTION</span>
                  <h3>{item.title}</h3>
                  <p>{item.intro}</p>
                </div>
                <div className="sp-detail-content">
                  <p>{item.description}</p>
                  <ul>
                    {item.capabilities.map((capability) => (
                      <li key={capability}>{capability}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-approach">
        <div className="sp-container sp-approach-grid">
          <div className="sp-approach-heading">
            <div className="sp-eyebrow sp-eyebrow-light">
              <span className="sp-eyebrow-line" />
              HOW WE APPROACH QUALITY
            </div>
            <h2>
              Proven expertise.
              <br />
              <span>Modern technology.</span>
            </h2>
            <p>
              Tools matter, but experience determines how to use them. We focus
              on useful feedback, maintainable solutions and measurable
              improvements — not complexity for its own sake.
            </p>
          </div>
          <div className="sp-principles">
            {principles.map((principle) => (
              <article className="sp-principle" key={principle.number}>
                <span>{principle.number}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-contact" id="sp-contact">
        <div className="sp-container sp-contact-inner">
          <div>
            <div className="sp-eyebrow">
              <span className="sp-eyebrow-line" />
              LET'S TALK
            </div>
            <h2>
              Make quality a
              <br />
              <span>competitive advantage.</span>
            </h2>
            <p>
              Tell us what you are building, where testing is difficult, or
              what you want to improve. We will help you identify a practical
              next step.
            </p>
          </div>
          <a className="sp-button sp-button-primary" href="mailto:hello@novesq.com">
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
