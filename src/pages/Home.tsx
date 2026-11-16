
import { useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ChevronLeft,
  ChevronRight,

  Heart,
  
} from 'lucide-react';
import { Link } from "react-router-dom";


import ProductTile from '../components/ProductTile';
import CollectionCard from '../components/CollectionCard';
import Footer from '../components/Footer';
import Preloader from "../components/Preloader";
import {
  products,
  categories,
  categoryShowcase,
} from '../data/products';
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
    <source src="/bst.mp4" type="video/mp4" />
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

 

    
<section className="arrivals-showcase">

  {/* ARRIVALS HEADING */}
  <div className="arrivals-header">
    <h2>Our Collection</h2>
  </div>

  {/* FULL WIDTH VIDEO */}
  <div className="arrivals-video-wrap">

    <video
      className="arrivals-video"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    >
      <source src="/jew.mp4" type="video/mp4" />
    </video>

    <div className="arrivals-video-overlay" />

    <div className="arrivals-video-content">
      <span>THE ART OF FINE JEWELLERY</span>

    
    </div>

    <div className="video-frame-line" />

  </div>

</section>

      

<section className="prism-gallery" id="arrivals">

  <div className="prism-gallery-heading">
    <span>THE PRISM COLLECTION</span>
    <h2>Beauty in <i>Every Dimension.</i></h2>
    <p>Discover extraordinary creations, designed to exist beyond time.</p>
  </div>

  {/* CATEGORY FILTERS */}

  <div className="prism-categories">
    {categories.map((category) => (
      <button
        key={category}
        className={activeCategory === category ? "active" : ""}
        onClick={() => setActiveCategory(category)}
      >
        {category}
      </button>
    ))}
  </div>

  {/* CATEGORY IMAGE GALLERY */}

  <div className="prism-floating-gallery category-image-gallery">

    {categoryShowcase
      .filter((category) =>
        activeCategory === "All" ||
        category.name.toLowerCase() === activeCategory.toLowerCase()
      )
      .map((category, index) => (

        <div
          className={`prism-piece piece-${index % 6}`}
          key={category.name}
        >

          <div className="prism-display category-prism-display">

            <div className="prism-orbit orbit-a" />
            <div className="prism-orbit orbit-b" />
            <div className="prism-orbit orbit-c" />

            <div className="prism-halo" />

            <div className="prism-image-area category-prism-image">

              <img
                src={category.images[0]}
                alt={category.name}
                className="prism-product-image"
                loading="lazy"
              />

            </div>

            <span className="prism-star star-a">✧</span>
            <span className="prism-star star-b">✦</span>
            <span className="prism-star star-c">✧</span>

          </div>

          <div className="prism-piece-info">
            <span>PRISM COLLECTION</span>

            <h3>{category.name}</h3>

            <div className="prism-piece-actions">
              <small>{category.description}</small>

              <Link to={category.link}>
                Explore ↗
              </Link>
            </div>
          </div>

        </div>

      ))}

    {categoryShowcase.filter((category) =>
      activeCategory === "All" ||
      category.name.toLowerCase() === activeCategory.toLowerCase()
    ).length === 0 && (
      <p className="prism-no-products">
        New creations arriving soon.
      </p>
    )}

  </div>

  <div className="prism-gallery-bottom">
    <span>PRISM JEWELLERY</span>
    <span>TIMELESS. EFFORTLESS. EXTRAORDINARY.</span>
  </div>

</section>

{/* ============== END PRISM GALLERY ============== */}

{/* ================= END JEWELLERY UNIVERSE ================= */}


        {/* BEST SELLERS VIDEO SECTION */}

<section className="bestseller-hero">
   
 
  <video
    className="bestseller-background-video"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/home.mp4" type="video/mp4" />
  </video>

  <div className="bestseller-overlay"></div>

  <div className="bestseller-heading">
    <p className="eyebrow">PRISM INTERNATIONAL</p>

  

  
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

<Link to="/about" className="know-about-btn">
  Know About Us <span>↗</span>
</Link>
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
         rows={4}
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
