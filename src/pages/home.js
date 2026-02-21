import "../styles.css";
import coffeeIcon from "../images/coffee-cup.png";
import booksIcon from "../images/book.png";
import croissantIcon from "../images/croissant.png";
import locationIcon from "../images/location.png";
import clockIcon from "../images/clock.png";
import wifiIcon from "../images/wifi.png";
import bookshelfIcon from "../images/books.png";

export function renderHome() {
  return `
  <!-- HERO SECTION -->
  <section class="hero">
    <div class="hero-content">
      <h2>Café des Livres</h2>
      <p>A quiet corner for coffee, books, and slow moments</p>
      <button class="btn-primary">View Menu</button>
      <button class="btn-secondary">Visit Us</button>
    </div>
  </section>

  <!-- ABOUT SECTION -->
  <section class="about">
    <div class="about-img"></div>
    <div class="about-text">
      <p>A gentle refuge from the noise of the world. Here, coffee is savoured slowly, pages turn softly, and time moves kindly.</p>
    </div>
  </section>

  <!-- WHAT WE OFFER SECTION -->
  <section class="offerings">
    <h2 class="offerings-title">What We Offer</h2>
    
    <div class="offerings-grid">
      <div class="offering-card">
        <img src="${coffeeIcon}" alt="Coffee cup icon">
        <h3>Artisan Coffee</h3>
        <p>Carefully brewed comfort in every cup.</p>
      </div>
      
      <div class="offering-card">
        <img src="${booksIcon}" alt="Books icon">
        <h3>Reading Corner</h3>
        <p>A peaceful space to read and unwind.</p>
      </div>
      
      <div class="offering-card">
        <img src="${croissantIcon}" alt="Croissant icon">
        <h3>Fresh Pastries</h3>
        <p>Baked delights to sweeten your day.</p>
      </div>
    </div>
  </section>

  <!-- QUOTE SECTION -->
  <section class="quote-section">
    <blockquote>
      "There is nothing finer than coffee and a good book on a quiet afternoon."
    </blockquote>
  </section>

    <!-- VISIT US SECTION -->
  <section class="visit-us">
    <h2 class="visit-us-title">Visit Us</h2>
    
    <div class="visit-us-grid">
      <div class="visit-card">
        <img src="${locationIcon}" alt="Location icon">
        <h3>123 Rue de Lumière</h3>
      </div>
      
      <div class="visit-card">
        <img src="${clockIcon}" alt="Clock icon">
        <h3>Open Daily:</h3>
        <p>8 AM - 6 PM</p>
      </div>
      
      <div class="visit-card">
        <img src="${wifiIcon}" alt="WiFi icon">
        <h3>Free Wi-Fi</h3>
      </div>
      
      <div class="visit-card">
        <img src="${bookshelfIcon}" alt="Bookshelf icon">
        <h3>Book Exchange Shelf</h3>
      </div>
    </div>
  </section>
`;
}
