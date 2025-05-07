class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header id="header">
        <div class="container">
          <nav class="navbar">
            <a href="/index.html" class="logo">
              Zie Core <span>Fitness</span>
              <p class="tagline">UNISEX GYM</p>
            </a>
            <ul class="nav-links">
              <li><a href="index.html#location">Location</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="service.html">Services</a></li>
              <li><a href="ladies-hours.html">Ladies' Hours</a></li>
              <li><a href="contactus.html">Contact</a></li>
            </ul>
            <button class="mobile-menu-btn">
              <i class="fa fa-bars"></i>
            </button>
          </nav>
        </div>
      </header>
    `;
  }
}

class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="section cta">
        <div class="container">
          <h2>Ready to Transform Your Life?</h2>
          <p>
            Take the first step towards a healthier, stronger you. Join Zie Core Fitness today and experience the difference with our expert trainers, top-notch facilities, and supportive community.
          </p>
          <div class="hero-btns">
            <a href="contactus.html#Contact-form" class="btn btn-primary">Join Now</a>
            <a href="contactus.html#Contact-form" class="btn btn-secondary">Enquiry</a>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-col">
              <h3>Zie Core Fitness</h3>
              <p>
                Your premier fitness destination offering top-quality training, equipment, and nutrition guidance to help you achieve your health and fitness goals.
              </p>
              <div class="social-links">
                <a href="#" class="fab fa-facebook-f"></a>
                <a href="#" class="fab fa-instagram"></a>
              </div>
            </div>

            <div class="footer-col">
              <h3>Quick Links</h3>
              <ul class="footer-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="service.html">Services</a></li>
                <li><a href="ladies-hours.html">Ladies' Hours</a></li>
                <li><a href="contactus.html">Contact</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h3>Contact Us</h3>
              <ul class="contact-info">
                <li>
                  <i class="fas fa-map-marker-alt"></i>
                  <span>Shop 6, Al Tallah Bldg 8, Muwaihat 1, near Nesto, Al Tallah 2, Ajman, UAE</span>
                </li>
                <li>
                  <i class="fas fa-phone-alt"></i>
                  <span>+97 1502610078</span>
                </li>
                <li>
                  <i class="fas fa-envelope"></i>
                  <span>Ziecorefitnessgym2024@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="footer-bottom">
            <p>&copy; 2025 Zie Core Fitness. All Rights Reserved. |
              <a href="#">Privacy Policy</a> |
              <a href="#">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);
