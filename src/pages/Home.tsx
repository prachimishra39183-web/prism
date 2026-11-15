
import { useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import Header from '../components/Header';
import ProductTile from '../components/ProductTile';
import CollectionCard from '../components/CollectionCard';
import Footer from '../components/Footer';
import Preloader from "../components/Preloader";

import { products, categories } from '../data/products';
const advantages = [
  {
    number: "01",
    category: "COLLECTION",
    title: "Jewellery Designs",
    description:
      "Explore thousands of lightweight diamond jewellery designs with new collections launched regularly.",
    button: "EXPLORE COLLECTION",
    image: "/jw1.png",
    color: "#d5c2a3",
  },
  {
    number: "02",
    category: "CRAFTSMANSHIP",
    title: "In-House Manufacturing",
    description:
      "Complete production under one roof — from CAD design to polishing and quality inspection.",
    button: "OUR CRAFTSMANSHIP",
    image: "/jw2.png",
    color: "#c5b79f",
  },
  {
    number: "03",
    category: "PERSONALISATION",
    title: "Custom Jewellery",
    description:
      "Create exclusive collections or customise existing designs to suit your brand and market.",
    button: "DISCOVER CUSTOM",
    image: "/jw3.png",
    color: "#d7b8a0",
  },
  {
    number: "04",
    category: "PARTNERSHIP",
    title: "Trusted B2B Partner",
    description:
      "Supplying retailers, wholesalers and jewellery brands with quality craftsmanship and reliable delivery.",
    button: "PARTNER WITH US",
    image: "/download.jpg",
    color: "#c4b69f",
  },
];
const leaders = [
  {
    name: "Manish Jiwani",
    role: "Chairman",
    image:
      "/m.png",
  },
  {
    name: "Bhavesh Vaghasiya",
    role: "Director",
    department: "Business Development & Operations",
    image:
      "https://erp-api.eshopprism.com/assets/b2b/section/Untitled-1_270720261209454506041.jpg",
  },
  {
    name: "Badal Mangukiya",
    role: "Head of Sales & Marketing",
    image: "https://erp-api.eshopprism.com/assets/b2b/section/ChatGPT_Image_May_23_2026_06_27_32_PM_230520261828097529973.png", // Add Badal's photograph here
  },
  {
    name: "Aniruddh Kyada",
    role: "Sales Manager",
    image:
      "https://erp-api.eshopprism.com/assets/b2b/section/WhatsApp_Image_2026-02-18_at_44318_PM_290520261653039629857.png",
  },
  {
    name: "Rutvik Beladiya",
    role: "Sales Executive",
    image:
      "https://erp-api.eshopprism.com/assets/b2b/section/616_x_616_-_01_210720261830596359815.jpg",
  },
];
export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [liked, setLiked] = useState<string[]>([]);
  const [cart, setCart] = useState(0);
  const [slide, setSlide] = useState(0);
  const [email, setEmail] = useState('');
    const [active, setActive] = useState(0);
      const item = advantages[active];


  const visibleProducts =
    activeCategory === 'All'
      ? products
      : products.filter(
          (item) => item.category === activeCategory
        );

  const toggleLike = (code: string) => {
    setLiked((current) =>
      current.includes(code)
        ? current.filter((item) => item !== code)
        : [...current, code]
    );
  };

  return (
      <>
    <Preloader />

    
    <div className="site-shell">

   

      <Header cart={cart} />

      <main id="top">

        {/* HERO SECTION */}

 
{/* HERO SECTION */}
<section className="hero-section">

  {/* Background Video */}
  <video
    className="hero-video"
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
  >
    <source src="/home.mp4" type="video/mp4" />
  </video>

  {/* Soft overlay - keeps video visible */}
  <div className="hero-overlay" />



  


</section>



<br></br>

{/* PRISM — 3D BRAND ADVANTAGES */}

<section className="prism-showcase">

      <div className="showcase-image">
        <img
          key={item.image}
          src={item.image}
          alt={item.title}
        />

        <div className="image-overlay" />
        <span className="image-caption">
          PRISM INTERNATIONAL
        </span>
      </div>

      <div className="showcase-divider">
        {advantages.map((slide, index) => (
          <button
            key={slide.number}
            className={`showcase-dot ${
              active === index ? "active" : ""
            }`}
            onClick={() => setActive(index)}
            aria-label={`Show ${slide.title}`}
            aria-pressed={active === index}
          />
        ))}
      </div>

      <div className="showcase-content" key={active}>

        <span className="showcase-eyebrow">
          {item.number} / {item.category}
        </span>

        <div className="showcase-decoration">
          ✧
        </div>

        <h2>{item.title}</h2>

        <div className="showcase-line" />

        <p>{item.description}</p>

        <button className="showcase-button">
          {item.button}
          <span>↗</span>
        </button>

        <div className="showcase-footer">
          <span>PRISM INTERNATIONAL</span>
          <span>
            0{active + 1} / 04
          </span>
        </div>

      </div>

    </section>

       
{/* ARRIVALS SHOWCASE */}

<section className="arrivals-showcase">

  <div className="arrivals-layout">

    {/* LEFT: PRODUCT CARDS */}

    <div className="arrivals-left">

      <div className="arrivals-header">
        <div>
          <span className="arrivals-eyebrow">
            DISCOVER OUR COLLECTION
          </span>
        </div>

        <div className="arrivals-controls">
          <button aria-label="Previous arrivals">
            <ChevronLeft size={20} />
          </button>

          <button aria-label="Next arrivals">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="arrivals-rail">

        {products.map((product, index) => (
          <article
            className={`arrival-card arrival-card-${index % 4}`}
            key={product.code}
          >

           
<div className={`arrival-art arrival-art-${index % 4}`}>

  <img
    src={product.image}
    alt={product.name || product.code}
    className="arrival-product-image"
    loading="lazy"
  />

  <span className="arrival-card-number">
    0{index + 1}
  </span>

</div>


          </article>
        ))}

      </div>

    </div>


    {/* RIGHT: VIDEO SHOWCASE */}

    <div className="arrivals-video-wrap">

      <video
        className="arrivals-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/jew.mp4" type="video/mp4" />
      </video>

      <div className="arrivals-video-overlay" />

      <div className="arrivals-video-content">
        <span>THE ART OF FINE JEWELLERY</span>

        <h3>
          Crafted to
          <br />
          <em>Captivate.</em>
        </h3>


        
      </div>

      <div className="video-frame-line" />

    </div>

  </div>

</section>


        {/* PRODUCT SECTION */}

        <section className="product-section" id="arrivals">
          <div className="section-heading">
            <div>
              <p className="eyebrow">The latest edit</p>
              <h2>New arrivals</h2>
            </div>

            <a href="#shop">
              View all pieces
              <ArrowRight size={15} />
            </a>
          </div>

          <div className="category-tabs">
            {categories.map((category) => (
              <button
                className={
                  activeCategory === category ? 'selected' : ''
                }
                key={category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="product-rail">
            {visibleProducts.map((product) => (
              <ProductTile
                key={product.code}
                product={product}
                liked={liked.includes(product.code)}
                onLike={() => toggleLike(product.code)}
                onAdd={() => setCart((current) => current + 1)}
              />
            ))}
          </div>
        </section>

        {/* BEST SELLERS VIDEO SECTION */}

<section className="bestseller-hero">
  <video
    className="bestseller-background-video"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/bst.mp4" type="video/mp4" />
  </video>

  <div className="bestseller-overlay"></div>

  <div className="bestseller-heading">
    <p className="eyebrow">PRISM INTERNATIONAL</p>

    <h2>
      Our <em>Best Sellers.</em>
    </h2>

  
  </div>
</section>
       <section className="team-section">
      <div className="team-heading">
        <span className="team-eyebrow">
          THE PEOPLE BEHIND PRISM
        </span>

        <h2>
          Meet the <em>Team.</em>
        </h2>

        <p>
          Driven by craftsmanship, quality, and long-term
          partnerships, our leadership team brings deep
          industry expertise and a clear vision for
          scalable B2B jewellery manufacturing.
        </p>
      </div>

      <div className="team-grid">
        {leaders.map((person, index) => (
          <article className="team-card" key={person.name}>
            <div className="team-image-wrap">
              {person.image ? (
                <img
                  src={person.image}
                  alt={person.name}
                  loading="lazy"
                />
              ) : (
                <div className="team-image-placeholder">
                  <span>{person.name.charAt(0)}</span>
                  <small>PORTRAIT COMING SOON</small>
                </div>
              )}

              <span className="team-number">
                0{index + 1}
              </span>
            </div>

            <div className="team-info">
              <div>
                <h3>{person.name}</h3>
                <p className="team-role">{person.role}</p>
                {person.department && (
                  <p className="team-department">
                    {person.department}
                  </p>
                )}
              </div>
              <span className="team-arrow">↗</span>
            </div>
          </article>
        ))}
      </div>

      <div className="team-footer">
        <span>BUILT ON TRUST. DRIVEN BY EXCELLENCE.</span>

        <a href="/about" className="team-button">
          Know About Us <span>↗</span>
        </a>
      </div>
    </section>

      {/* LUXURY ENQUIRY SECTION */}

<section className="jewel-enquiry">
  <div className="enquiry-overlay"></div>

  <div className="enquiry-content">

    <div className="enquiry-left">
      <span className="enquiry-eyebrow">
        <span className="gold-line"></span>
        CONNECT WITH PRISM
      </span>

      <h2>
        Let's Create
        <br />
        Something <span>Exceptional.</span>
      </h2>

      <p>
        Looking for a trusted jewellery manufacturing partner?
        Share your requirements with us and let's bring your vision
        to life with precision and excellence.
      </p>

      <div className="enquiry-highlights">
        <div>✧ Premium Craftsmanship</div>
        <div>✧ Dedicated B2B Support</div>
        <div>✧ Trusted Jewellery Expertise</div>
      </div>
    </div>

    <div className="enquiry-form-card">
      <div className="form-heading">
        <span>YOUR NEXT MASTERPIECE STARTS HERE</span>
        <h3>Make an Enquiry</h3>
        <p>Tell us a little about what you're looking for.</p>
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          alert("Thank you! Your enquiry has been submitted.");
        }}
      >
        <div className="enquiry-input-grid">
          <input
            type="text"
            placeholder="Your Full Name"
            required
          />

          <input
            type="text"
            placeholder="Company Name"
          />

          <input
            type="email"
            placeholder="Business Email Address"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
          />
        </div>

        <select defaultValue="" required>
          <option value="" disabled>
            Select Enquiry Type
          </option>
          <option>Jewellery Manufacturing</option>
          <option>Diamond Jewellery</option>
          <option>Gold Jewellery</option>
          <option>Wholesale Partnership</option>
          <option>Custom Jewellery</option>
          <option>Other</option>
        </select>

        <textarea
          placeholder="Tell us about your requirements..."
          rows="4"
          required
        />

        <button type="submit" className="enquiry-submit">
          Send Your Enquiry
          <span>↗</span>
        </button>

        <small>
          Your information will be treated with complete confidentiality.
        </small>
      </form>
    </div>

  </div>
</section>
            
      </main>

      <Footer />

    </div>
      </>
  );
}
