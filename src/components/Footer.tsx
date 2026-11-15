
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a className="wordmark" href="#top">
          PRISM<span>JEWELLERY</span>
        </a>

        <p>
          Fine jewellery for every
          <br />
          way of being.
        </p>
      </div>

      <div className="footer-links">
        <div>
          <b>Explore</b>
          <a href="#shop">Jewellery</a>
          <a href="#arrivals">New arrivals</a>
          <a href="#shop">Collections</a>
        </div>

        <div>
          <b>About</b>
          <a href="#story">Our story</a>
          <a href="#impact">Impact</a>
          <a href="#story">Journal</a>
        </div>

        <div>
          <b>Client care</b>
          <a href="#top">Contact us</a>
          <a href="#top">Shipping & returns</a>
          <a href="#top">Book an appointment</a>
        </div>

        <div>
          <b>Follow along</b>
          <a href="#top">Instagram</a>
          <a href="#top">Pinterest</a>
          <a href="#top">LinkedIn</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Prism Jewellery</span>
        <span>Privacy &nbsp;&nbsp; Terms</span>
        <span>Made to be remembered</span>
      </div>
    </footer>
  );
}
