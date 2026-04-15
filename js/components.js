/* ============================================================
   KoinWorx — components.js
   Injects nav + footer + floating widgets into every page
   ============================================================ */

// Auto-detect base path based on current page depth
const _depth = window.location.pathname.split('/').filter(Boolean).length;
const _isSubpage = window.location.pathname.includes('/services/');
const BASE = _isSubpage ? '../' : '';

const NAV_HTML = `
<nav class="nav">
  <div class="container">
    <div class="nav-inner">
      <a href="${BASE}index.html" class="nav-logo">
        <div class="nav-logo-icon">K</div>
        KoinWorx
      </a>
      <div class="nav-links">
        <a href="${BASE}index.html">Home</a>
        <div class="nav-dropdown">
          <a href="${BASE}services.html">Services</a>
          <div class="dropdown-menu">
            <a href="${BASE}services/cloud.html"><span class="icon"></span> Cloud (Azure & AWS)</a>
            <a href="${BASE}services/test-automation.html"><span class="icon"></span> Test Automation</a>
            <a href="${BASE}services/erp.html"><span class="icon"></span> ERP Applications</a>
            <a href="${BASE}services/blockchain.html"><span class="icon"></span> Blockchain</a>
            <a href="${BASE}services/it-staffing.html"><span class="icon"></span> IT Staffing</a>
            <a href="${BASE}services/software-development.html"><span class="icon"></span> Software Development</a>
            <a href="${BASE}services/cybersecurity.html"><span class="icon"></span> Cybersecurity</a>
          </div>
        </div>
        <a href="${BASE}about.html">About Us</a>
        <a href="${BASE}contact.html">Contact</a>
      </div>
      <div class="nav-phone">📞 +00 000 000 000</div>
      <div class="nav-cta">
        <a href="${BASE}contact.html" class="btn btn-outline">Get a Quote</a>
        <a href="${BASE}contact.html#book" class="btn btn-primary">Book a Call</a>
      </div>
      <button class="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
  <div class="mobile-nav">
    <a href="${BASE}index.html">Home</a>
    <a href="${BASE}services.html">Services</a>
    <a href="${BASE}services/cloud.html" style="padding-left:36px;">Cloud</a>
    <a href="${BASE}services/test-automation.html" style="padding-left:36px;">🧪 Test Automation</a>
    <a href="${BASE}services/erp.html" style="padding-left:36px;">ERP</a>
    <a href="${BASE}services/blockchain.html" style="padding-left:36px;">Blockchain</a>
    <a href="${BASE}services/it-staffing.html" style="padding-left:36px;">IT Staffing</a>
    <a href="${BASE}services/software-development.html" style="padding-left:36px;">Software Dev</a>
    <a href="${BASE}services/cybersecurity.html" style="padding-left:36px;"> Cybersecurity</a>
    <a href="${BASE}about.html">About Us</a>
    <a href="${BASE}contact.html">Contact</a>
    <a href="${BASE}contact.html#book" class="btn btn-primary" style="margin:12px 16px;display:block;text-align:center;">📅 Book a Call</a>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="${BASE}index.html" class="nav-logo" style="color:white;">
          <div class="nav-logo-icon">K</div>
          KoinWorx
        </a>
        <p>Enterprise technology solutions delivered with precision. We power digital transformation across cloud, software, blockchain, and beyond.</p>
        <div class="footer-social">
          <a href="https://www.linkedin.com/company/koinworx" target="_blank" rel="noopener noreferrer" title="LinkedIn">in</a>
          <a href="https://twitter.com/koinworx" target="_blank" rel="noopener noreferrer" title="Twitter/X">𝕏</a>
          <a href="https://github.com/koinworx" target="_blank" rel="noopener noreferrer" title="GitHub">⌥</a>
          <a href="https://wa.me/18001234567" target="_blank" rel="noopener noreferrer" title="WhatsApp">💬</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <a href="${BASE}services/cloud.html">Cloud (Azure & AWS)</a>
        <a href="${BASE}services/test-automation.html">Test Automation</a>
        <a href="${BASE}services/erp.html">ERP Applications</a>
        <a href="${BASE}services/blockchain.html">Blockchain</a>
        <a href="${BASE}services/it-staffing.html">IT Staffing</a>
        <a href="${BASE}services/software-development.html">Software Development</a>
        <a href="${BASE}services/cybersecurity.html">Cybersecurity</a>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <a href="${BASE}about.html">About Us</a>
        <a href="${BASE}about.html#team">Our Team</a>
        <a href="${BASE}about.html#offices">Offices</a>
        <a href="${BASE}about.html#partners">Partners</a>
        <a href="${BASE}contact.html">Contact</a>
      </div>
      <div class="footer-col">
        <h4>Offices</h4>
        <a href="${BASE}contact.html">🇳🇱 Netherlands</a>
        <a href="${BASE}contact.html">🇧🇪 Belgium</a>
        <a href="${BASE}contact.html">🇵🇱 Poland</a>
        <a href="${BASE}contact.html">🇮🇳 India</a>
        <div style="margin-top:16px;">
          <a href="mailto:info@koinworx.com" style="color:rgba(255,255,255,.55);">info@koinworx.com</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 KoinWorx. All rights reserved.</span>
      <div class="footer-bottom-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookie Policy</a>
      </div>
    </div>
  </div>
</footer>`;

const WIDGETS_HTML = `
<div class="float-widgets">
  <a href="https://wa.me/18001234567" class="float-btn float-whatsapp" title="Chat on WhatsApp" target="_blank">💬</a>
  <a href="${BASE}contact.html#book" class="float-btn float-call" title="Book a Call">📅</a>
</div>`;

function injectComponents() {
  // Nav
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = NAV_HTML;
  else document.body.insertAdjacentHTML('afterbegin', NAV_HTML);

  // Footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;
  else document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // Floating widgets
  document.body.insertAdjacentHTML('beforeend', WIDGETS_HTML);
}

injectComponents();
