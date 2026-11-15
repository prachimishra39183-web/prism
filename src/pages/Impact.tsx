
import React from "react";
import "./Impact.css";

const impactItems = [
  {
    number: "01",
    title: "Education for a Better Tomorrow",
    category: "EMPOWERING COMMUNITIES",
    image:
      "https://erp-api.eshopprism.com/assets/b2b/section/Impact_BlogImage_001_060420261225033952462.png",
    description:
      "We support education-driven initiatives that focus on creating meaningful learning opportunities for individuals and communities. Our efforts aim to encourage skill development, knowledge sharing, and access to quality education. We believe education plays a critical role in shaping sustainable careers and empowering future generations. By supporting learning initiatives, we help build confidence and capability at the grassroots level. Education enables long-term social and economic growth. We encourage continuous learning and personal development. Our commitment to education reflects our belief in inclusive progress. Through these efforts, we invest in a stronger and more informed future.",
    theme: "education",
  },
  {
    number: "02",
    title: "Caring for the Planet",
    category: "A GREENER TOMORROW",
    image:
      "https://erp-api.eshopprism.com/assets/b2b/section/Impact_BlogImage_002_060420261225198278664.png",
    description:
      "Sustainability is an integral part of our approach to responsible business. We actively promote environmentally conscious practices that help reduce our ecological footprint. Our focus remains on responsible use of resources and environmentally friendly operations. We believe sustainable practices are essential for long-term growth and environmental balance. By supporting initiatives that protect natural ecosystems, we contribute to a healthier planet. Environmental responsibility guides our operational decisions. Sustainability is not a one-time effort but an ongoing commitment. Through responsible actions, we aim to preserve the environment for future generations.",
    theme: "planet",
  },
  {
    number: "03",
    title: "Health & Care Initiatives",
    category: "WELL-BEING FOR ALL",
    image:
      "https://erp-api.eshopprism.com/assets/b2b/section/Impact_BlogImage_003_060420261225366005801.png",
    description:
      "We believe access to healthcare and well-being support is fundamental to a healthy society. Our initiatives focus on contributing to medical support and wellness programs that improve quality of life. We aim to support efforts that enhance access to essential healthcare services. Health and well-being enable individuals and communities to thrive. Our approach is guided by care, responsibility, and compassion. We recognize the importance of preventive care and overall wellness. Supporting healthcare initiatives reflects our commitment to social responsibility. Through these efforts, we strive to contribute to healthier communities.",
    theme: "health",
  },
  {
    number: "04",
    title: "Kindness Towards All Life",
    category: "COMPASSION & CARE",
    image:
      "https://erp-api.eshopprism.com/assets/b2b/section/Impact_BlogImage_004_060420261225562834379.png",
    description:
      "We are committed to supporting initiatives that promote animal welfare and protection. Our approach emphasizes compassion, responsibility, and ethical care for all living beings. We believe animals deserve humane treatment and a safe environment. By supporting animal welfare initiatives, we encourage awareness and responsible action. Animal protection is an important aspect of ethical responsibility. Respect for animal life reflects our broader values of care and sustainability. We aim to support initiatives that improve animal well-being. Through responsible practices, we contribute to a more compassionate ecosystem.",
    theme: "life",
  },
];

export default function Impact() {
  return (
    <main className="impact-page">
      {/* HERO */}
      <section className="impact-hero">
        <img
          src="https://erp-api.eshopprism.com/assets/b2b/section/CSR_ACTIVITY_060420261224362388292.png"
          alt="PRISM social responsibility"
        />

        
      </section>

      {/* INTRODUCTION */}
      <section className="impact-intro">
        <div className="impact-intro-label">
          <span></span>
          OUR PURPOSE
        </div>

        <div className="impact-intro-content">
          <div>
            <p className="impact-eyebrow">BEYOND BUSINESS</p>
            <h2>
              Our Responsibility,
              <br />
              Our <span>Commitment.</span>
            </h2>
          </div>

          <div className="impact-intro-text">
            <p>
              We believe that true success is not only measured by business
              growth, but also by the positive impact we create for society
              and the environment. Our CSR philosophy is rooted in ethical
              practices, sustainable operations, and a commitment to
              long-term social responsibility.
            </p>

            <p>
              We integrate responsible decision-making into every stage of
              our jewellery manufacturing process, ensuring that growth
              remains meaningful and inclusive.
            </p>
          </div>
        </div>
      </section>

      {/* IMPACT CARDS */}
      <section className="impact-stories">
        <div className="impact-section-heading">
          <div>
            <p className="impact-eyebrow">WHAT MATTERS TO US</p>
            <h2>Our Areas of Impact</h2>
          </div>
          <p>Small actions. Meaningful change. A lasting difference.</p>
        </div>

        <div className="impact-grid">
          {impactItems.map((item) => (
            <article
              className={`impact-card ${item.theme}`}
              key={item.number}
            >
              <div className="impact-card-image">
                <img src={item.image} alt={item.title} />
                <span className="impact-card-number">
                  {item.number}
                </span>
                <span className="impact-card-arrow">↗</span>
              </div>

              <div className="impact-card-content">
                <p className="impact-card-category">
                  {item.category}
                </p>

                <h3>{item.title}</h3>

                <p className="impact-card-description">
                  {item.description}
                </p>

                <div className="impact-card-bottom">
                  <span>OUR COMMITMENT</span>
                  <span className="impact-card-line"></span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CLOSING */}
      <section className="impact-closing">
        <p>OUR PROMISE TO THE FUTURE</p>
        <h2>
          Progress means more
          <br />
          when it includes <span>everyone.</span>
        </h2>
        <div className="impact-closing-line"></div>
      </section>
    </main>
  );
}
