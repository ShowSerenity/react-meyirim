import React from 'react';
import '../assets/styles/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>© 2024 Meyirim. All Rights Reserved.</p>
        <div className="socials">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-facebook fa-2x"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-youtube fa-2x"></i>
          </a>
        </div>
        <div className="contact-info">
          <p>Phone: +123 456 789</p>
          <p>Address: 123 Meyirim Street, City</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
