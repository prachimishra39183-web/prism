
export default function Footer() {
  return (
    <footer className="footer">

      {/* FOOTER MAIN */}
      <div className="footer-main">

        {/* BRAND */}
        <div className="footer-brand">
          <a href="#top" className="footer-logo">
            <img
              src="https://prismintl.in/Images/PrismLogo_002.png"
              alt="Prism International"
            />
          </a>

          <p>
            Delivering quality, trust, and innovation
            in every product. We are committed to
            excellence and customer satisfaction.
          </p>

          {/* APP DOWNLOAD */}
          <div className="footer-apps">
            <a
              href="https://play.google.com/store/apps/details?id=com.nothing.prism.b2b&hl=en_IN"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://prismintl.in/Images/G-play.svg"
                alt="Get it on Google Play"
              />
            </a>

            <a
              href="https://apps.apple.com/us/app/prism-trade/id6791436049"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://prismintl.in/Images/App-store.svg"
                alt="Download on App Store"
              />
            </a>
          </div>
        </div>

        {/* CONTACT */}
        <div className="footer-column footer-contact">
          <h4>Contact Us</h4>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Plot+No+79-A+Mahatma+Industrial+Co-Op+Kapodara+Surat+395006"
            target="_blank"
            rel="noreferrer"
          >
            <span>⌖</span>
            Plot No. 79-A, Mahatma Industrial Co-Op,
            Soc-2, Second Floor, Opp. Jalaram Steel,
            Varachha Road, Kapodara 395006
          </a>

          <a href="tel:+912612579060">
            <span>✆</span> +91 261 2579060
          </a>

          <a href="tel:+919978706802">
            <span>✆</span> +91 99787 06802
          </a>

          <a href="mailto:order@prismintl.in">
            <span>✉</span> order@prismintl.in
          </a>

          <div className="footer-socials">
            <a href="https://www.instagram.com/prism.india/" target="_blank" rel="noreferrer">
              <img src="https://prismintl.in/Icons/Footer_SocialMedia_Icon001.svg" alt="Instagram" />
            </a>

            <a href="https://www.facebook.com/prismintl.india/" target="_blank" rel="noreferrer">
              <img src="https://prismintl.in/Icons/Footer_SocialMedia_Icon002.svg" alt="Facebook" />
            </a>

            <a href="https://twitter.com/prismintl_india/" target="_blank" rel="noreferrer">
              <img src="https://prismintl.in/Icons/Footer_SocialMedia_Icon003.svg" alt="Twitter" />
            </a>

            <a href="https://www.pinterest.com/prismindia/" target="_blank" rel="noreferrer">
              <img src="https://prismintl.in/Icons/Footer_SocialMedia_Icon005.svg" alt="Pinterest" />
            </a>

            <a href="https://www.linkedin.com/company/prism-india/" target="_blank" rel="noreferrer">
              <img src="https://prismintl.in/Icons/linkedin_small.png" alt="LinkedIn" />
            </a>
          </div>
        </div>

        {/* GET TO KNOW US */}
        <div className="footer-column">
          <h4>Get To Know Us</h4>

          <a href="https://prismintl.in/about-us" target="_blank" rel="noreferrer">
            About Us
          </a>

          <a href="https://prismintl.in/impact" target="_blank" rel="noreferrer">
            Impact
          </a>
        </div>

        {/* LEGAL */}
        <div className="footer-column">
          <h4>Legal</h4>

          <a href="https://prismintl.in/privacy-policy" target="_blank" rel="noreferrer">
            Privacy Policy
          </a>

          <a href="https://prismintl.in/terms-conditions" target="_blank" rel="noreferrer">
            Terms Of Use
          </a>
        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">

        <span>
          Copyright © 2026 Prism. All Rights Reserved
        </span>

        <span className="footer-credit">
          Developed By{" "}
          <a href="https://nothinginfo.in/" target="_blank" rel="noreferrer">
            Nothing Info.
          </a>
        </span>

      </div>

    </footer>
  );
}
