import React, { useEffect, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Gem, Globe2, Truck, Sparkles,
  ShieldCheck, ChevronRight, MoveRight,
  BusIcon
} from "lucide-react";

const whyChooseUs = [
  {
    image: "/exp.png",
    title: "10+ Years Of Industry Experience",
    description: "A decade of expertise delivering precision-crafted jewellery for global B2B partners.",
    number: "01",
    tag: "EXPERIENCE"
  },
  {
    image: "/download.jpg",
    title: "Global B2B Client Network",
    description: "Trusted by jewellery brands, wholesalers, and retailers across international markets.",
    number: "02",
    tag: "GLOBAL REACH"
  },
  {
    image: "/pre.png",
    title: "Precision-Driven Craftsmanship",
    description: "Every piece is manufactured with strict quality control and refined finishing.",
    number: "03",
    tag: "PRECISION"
  },
  {
    image: "/sh.png",
    title: "Reliable Turnaround & Delivery",
    description: "Consistent production timelines with secure domestic and global shipping.",
    number: "04",
    tag: "RELIABILITY"
  },
];

const processSteps = [
  { number: "01", title: "Design & CAD Approval", description: "Every project begins with detailed design discussions and CAD development to ensure accuracy, feasibility, and complete alignment with client requirements before production starts.", image: "https://erp-api.eshopprism.com/assets/b2b/section/AboutUs_Process_image001_060420261213483545403.png" },
  { number: "02", title: "Diamond Selection & Sourcing", description: "Diamonds are carefully selected based on quality, consistency, and ethical sourcing standards, including certified and lab-grown options as per client needs.", image: "https://erp-api.eshopprism.com/assets/b2b/section/AboutUs_Process_image002_060420261214307530551.png" },
  { number: "03", title: "Precision Manufacturing", description: "Using advanced machinery and skilled craftsmanship, each jewellery piece is manufactured with strict control over metal purity, stone setting, and finishing quality.", image: "https://erp-api.eshopprism.com/assets/b2b/section/AboutUs_Process_image003_060420261214558750700.png" },
  { number: "04", title: "Quality Inspection", description: "Each product undergoes multiple quality checks to verify design accuracy, durability, stone security, and overall finish.", image: "https://erp-api.eshopprism.com/assets/b2b/section/AboutUs_Process_image004_060420261215321838557.png" },
  { number: "05", title: "Secure Packaging & Export", description: "Finished jewellery is securely packaged with complete documentation and prepared for safe domestic and international shipping.", image: "https://erp-api.eshopprism.com/assets/b2b/section/AboutUs_Process_image005_060420261216052379057.png" },
];

const values = [
  { number: "01", title: "Transparency", description: "We believe true beauty begins with trust. Every piece of jewellery we create comes with complete clarity about its materials, sourcing, and craftsmanship. From certified gemstones to detailed product descriptions and fair pricing, we ensure you know exactly what you are investing in. No hidden costs, no false claims—just honest jewellery you can cherish for a lifetime." },
  { number: "02", title: "Precision", description: "Precision is at the heart of every creation. From design approval to stone setting and final finishing, we focus on accuracy, consistency, and attention to detail at every stage of manufacturing." },
  { number: "03", title: "Partnership", description: "We believe in building lasting business relationships. We work closely with our B2B partners through clear communication, dependable service, and a shared commitment to quality and long-term growth." },
];

function Eyebrow({ children }) {
  return <span className="prism-eyebrow"><i />{children}</span>;
}

export default function About() {
  const [activeProcess, setActiveProcess] = useState(0);
  const [activeValue, setActiveValue] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;
    const timer = window.setInterval(() => {
      setActiveProcess((current) => (current + 1) % processSteps.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll(".prism-reveal");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const marqueeItems = [...whyChooseUs, ...whyChooseUs];

  return (
    <main className="prism-about">
      <section className="prism-hero">
        <div className="prism-hero-image" />
        <div className="prism-hero-vignette" />
        <div className="hero-grain" />
        <div className="hero-orbit hero-orbit-a" />
        <div className="hero-orbit hero-orbit-b" />
        <div className="hero-content">
          <Eyebrow>THE WORLD OF PRISM</Eyebrow>
          <p className="hero-overline">ENGINEERED FOR BRILLIANCE · CRAFTED FOR THE WORLD</p>
          <h1>Beyond<br /><em>Brilliance.</em></h1>
          <p className="hero-intro">Where craftsmanship meets precision,<br className="desktop-break" /> and every partnership is built to last.</p>
          <a href="#who-we-are" className="hero-link">DISCOVER OUR STORY <span><ArrowRight size={17} /></span></a>
        </div>
        <div className="hero-vertical">PRISM INTERNATIONAL <b>·</b> MUMBAI, INDIA</div>
        <div className="hero-bottomline"><span>01 — 05</span><span>CRAFTED WITH INTENTION</span><span>SCROLL TO EXPLORE ↓</span></div>
        <div className="hero-index">P<span>.</span></div>
      </section>

      <section className="prism-intro prism-section" id="who-we-are">
        <div className="intro-top prism-reveal">
          <Eyebrow>A STORY OF CRAFTSMANSHIP</Eyebrow>
          <span className="intro-coordinate">19°04' N&nbsp; / &nbsp;72°52' E</span>
        </div>
        <div className="intro-grid">
          <div className="intro-heading prism-reveal">
  <span className="giant-index">01</span>

  <img
    src="/int.png"
    alt="PRISM International Jewellery Craftsmanship"
    className="intro-heading-image"
  />
</div>
          <div className="intro-copy prism-reveal">
            
            <p className="intro-lead">We are PRISM International — bringing together jewellery craftsmanship, manufacturing precision, and a commitment to meaningful business partnerships.</p>
            <p>Our focus is on creating jewellery that meets the expectations of global B2B partners. From thoughtful design and careful sourcing to precision manufacturing and quality inspection, every stage reflects our commitment to detail.</p>
            <a className="text-link" href="#our-process">EXPLORE OUR PROCESS <ArrowUpRight size={17} /></a>
          </div>
          <div className="intro-image prism-reveal">
            <img src="/who.png" />
            <div className="image-stamp"><Gem size={17} /><span>CRAFTED<br />WITH PURPOSE</span></div>
          </div>
        </div>
      </section>

      <section className="prism-advantage prism-section">
        <div className="section-heading prism-reveal">
          <div><Eyebrow>THE PRISM ADVANTAGE</Eyebrow><h2>Why choose<br /><em>PRISM?</em></h2></div>
          <p>More than manufacturing. We bring together experience, craftsmanship, and dependable partnerships to help businesses grow.</p>
          <span className="section-count">02 / 05</span>
        </div>
        <div className="advantage-marquee" aria-label="PRISM advantages">
          <div className="advantage-track">
            {marqueeItems.map((item, index) => (
              <article className="advantage-card" key={`${item.number}-${index}`}>
                <div className="adv-card-top"><span>{item.number}</span><ArrowUpRight size={19} /></div>
               <div className="choose-card-image">
  <img src={item.image} alt={item.title} />
</div>
                <span className="adv-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="adv-card-bottom"><span>PRISM INTERNATIONAL</span><span>↗</span></div>
              </article>
            ))}
          </div>
        </div>
        <div className="marquee-caption"><span>BUILT ON EXPERIENCE</span><span>DRAG / SCROLL TO EXPLORE</span></div>
      </section>

    
<section className="prism-strength-section prism-section">

  {/* LEFT EDITORIAL CONTENT */}
  <div className="strength-intro prism-reveal">

    <Eyebrow>OUR COMMITMENT, IN MOTION</Eyebrow>

    <h2>
      One vision.
      <br />
      <em>Many strengths.</em>
    </h2>

    <p>
      Every detail has a role. Every stage adds value.
      Together, they create a partnership built around
      precision, craftsmanship and trust.
    </p>

    <div className="strength-signature">
      <span className="signature-line"></span>
      <span>THE PRISM STANDARD</span>
    </div>

    <div className="strength-big-number">04</div>

  </div>

  {/* RIGHT BENTO CARDS */}
  <div className="strength-bento prism-reveal">

    {/* GLOBAL NETWORK */}
    <div className="strength-card strength-global">

      <div className="strength-card-top">
        <span>01 / REACH</span>
        <Globe2 size={24} strokeWidth={1.3} />
      </div>

      <div className="strength-card-visual global-visual">
        <div className="global-circle circle-one"></div>
        <div className="global-circle circle-two"></div>
        <div className="global-circle circle-three"></div>
        <Globe2 size={95} strokeWidth={0.7} />
      </div>

      <div className="strength-card-info">
        <h3>Global Network</h3>
        <p>Connecting opportunities and partnerships across markets.</p>
      </div>

      <span className="strength-card-index">01</span>

    </div>

    {/* QUALITY CONTROL */}
    <div className="strength-card strength-quality">

      <div className="strength-card-top">
        <span>02 / ASSURANCE</span>
        <ShieldCheck size={24} strokeWidth={1.3} />
      </div>

      <div className="strength-card-visual quality-visual">
        <div className="quality-diamond">
          <ShieldCheck size={75} strokeWidth={0.8} />
        </div>
        <span className="quality-orbit"></span>
      </div>

      <div className="strength-card-info">
        <h3>Quality Control</h3>
        <p>Thoughtful inspection and consistent standards at every stage.</p>
      </div>

      <span className="strength-card-index">02</span>

    </div>

    {/* CRAFT PRECISION */}
    <div className="strength-card strength-craft">

      <div className="strength-card-top">
        <span>03 / CRAFT</span>
        <Gem size={24} strokeWidth={1.3} />
      </div>

      <div className="strength-card-visual craft-visual">
        <div className="craft-shape">
          <Gem size={100} strokeWidth={0.65} />
        </div>
        <div className="craft-shine"></div>
      </div>

      <div className="strength-card-info">
        <h3>Craft Precision</h3>
        <p>Where considered design meets manufacturing excellence.</p>
      </div>

      <span className="strength-card-index">03</span>

    </div>

    {/* RELIABLE DELIVERY */}
    <div className="strength-card strength-delivery">

      <div className="strength-card-top">
        <span>04 / COMMITMENT</span>
        <Truck size={24} strokeWidth={1.3} />
      </div>

      <div className="strength-card-visual delivery-visual">
        <div className="delivery-track"></div>
        <Truck size={100} strokeWidth={0.8} />
      </div>

      <div className="strength-card-info">
        <h3>Reliable Delivery</h3>
        <p>Dependable coordination from production to destination.</p>
      </div>

      <span className="strength-card-index">04</span>

    </div>

  </div>

</section>


      <section className="prism-process prism-section" id="our-process">
        <div className="process-head prism-reveal"><div><Eyebrow>FROM CONCEPT TO CREATION</Eyebrow><h2>The art of<br /><em>making brilliance.</em></h2></div><p>Every creation follows a carefully managed journey, where precision and quality guide each step.</p></div>
        <div className="process-experience prism-reveal">
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <button className={`process-step ${activeProcess === index ? "active" : ""}`} key={step.number} onClick={() => setActiveProcess(index)}>
                <span>{step.number}</span><strong>{step.title}</strong><ChevronRight size={18} />
              </button>
            ))}
          </div>
          <div className="process-feature" key={activeProcess}>
            <div className="process-photo"><img src={processSteps[activeProcess].image} alt={processSteps[activeProcess].title} /><span className="photo-number">{processSteps[activeProcess].number}</span><span className="photo-caption">THE PRISM PROCESS</span></div>
            <div className="process-detail"><span>STEP {processSteps[activeProcess].number} / 05</span><h3>{processSteps[activeProcess].title}</h3><p>{processSteps[activeProcess].description}</p><div className="process-progress"><i style={{ width: `${((activeProcess + 1) / processSteps.length) * 100}%` }} /></div><div className="process-controls"><button onClick={() => setActiveProcess((activeProcess + processSteps.length - 1) % processSteps.length)} aria-label="Previous step">←</button><button onClick={() => setActiveProcess((activeProcess + 1) % processSteps.length)} aria-label="Next step">→</button></div></div>
          </div>
        </div>
      </section>

      <section className="prism-values prism-section">
        <div className="values-heading prism-reveal"><Eyebrow>WHAT DEFINES US</Eyebrow><h2>Principles that<br /><em>shape every piece.</em></h2><p>The principles behind every creation and every relationship we build.</p></div>
        <div className="values-grid prism-reveal">
          <div className="values-image"><img src="https://erp-api.eshopprism.com/assets/b2b/section/About_ourValues_image001_060420261216424794345.png" alt="PRISM International craftsmanship and values" /><span>BEAUTY WITH PURPOSE.</span></div>
          <div className="values-cards">
            {values.map((value, index) => <button key={value.number} className={`value-card ${activeValue === index ? "selected" : ""}`} onClick={() => setActiveValue(index)}><span className="value-number">{value.number}</span><span className="value-main"><strong>{value.title}</strong>{activeValue === index && <p>{value.description}</p>}</span><span className="value-symbol">{activeValue === index ? "−" : "+"}</span></button>)}
          </div>
        </div>
      </section>

      <section className="prism-cta">
        <div className="cta-orbit" /><div className="cta-glow" />
        <div className="cta-content prism-reveal"><Eyebrow>LET'S BUILD SOMETHING EXCEPTIONAL</Eyebrow><h2>Your vision.<br /><em>Our craftsmanship.</em></h2><p>Discover a manufacturing partnership built around quality, precision, and trust.</p><a href="/contact" className="cta-button">START A CONVERSATION <ArrowUpRight size={18} /></a></div>
        <div className="cta-footer"><span>PRISM INTERNATIONAL</span><span>CRAFTED FOR THE WORLD · MUMBAI, INDIA</span></div>
      </section>
    </main>
  );
}
