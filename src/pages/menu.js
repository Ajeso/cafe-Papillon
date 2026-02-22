// pages/menu.js
import menuImage from "../images/menu-latte.jpg";

// Coffee icons
import espressoIcon from "../images/icons/espresso.png";
import cappuccinoIcon from "../images/icons/cappuccino.png";
import latteIcon from "../images/icons/latte.png";
import frenchPressIcon from "../images/icons/french-press.png";

// Pastry icons
import croissantIcon from "../images/croissant.png";
import painChocolatIcon from "../images/icons/challah.png";
import tartIcon from "../images/icons/tart.png";
import madeleineIcon from "../images/icons/madeleine.png";

// Tea & More icons
import teaIcon from "../images/icons/tea.png";
import hotChocolateIcon from "../images/icons/hot-chocolate.png";
import matchaIcon from "../images/icons/matcha-latte.png";

export function renderMenu() {
  return `
    <!-- Menu Hero -->
    <section class="menu-hero">
      <h2>Menu</h2>
      <p>Simple pleasures, thoughtfully prepared.</p>
    </section>

    <!-- Menu Tabs -->
    <section class="menu-tabs">
      <button class="menu-tab active" data-category="coffee">Coffee</button>
      <button class="menu-tab" data-category="pastries">Pastries</button>
      <button class="menu-tab" data-category="tea">Tea & More</button>
    </section>

    <!-- Menu Content -->
    <section class="menu-content">
      
      <!-- Coffee Section -->
      <div class="menu-section active" id="coffee">
        <div class="menu-grid">
          <div class="menu-list">
            <h3 class="menu-category-title">Coffee</h3>
            
            <div class="menu-item">
              <img src="${espressoIcon}" alt="Espresso" class="menu-icon">
              <div class="menu-item-text">
                <h4>Espresso</h4>
                <p>Rich and bold.</p>
              </div>
            </div>

            <div class="menu-item">
              <img src="${cappuccinoIcon}" alt="Cappuccino" class="menu-icon">
              <div class="menu-item-text">
                <h4>Cappuccino</h4>
                <p>Velvety milk with deep espresso.</p>
              </div>
            </div>

            <div class="menu-item">
              <img src="${latteIcon}" alt="Caffè Latte" class="menu-icon">
              <div class="menu-item-text">
                <h4>Caffè Latte</h4>
                <p>Smooth, creamy comfort.</p>
              </div>
            </div>

            <div class="menu-item">
              <img src="${frenchPressIcon}" alt="French Press" class="menu-icon">
              <div class="menu-item-text">
                <h4>French Press</h4>
                <p>Slow brewed, full-bodied flavour.</p>
              </div>
            </div>

            <div class="menu-item">
              <img src="${espressoIcon}" alt="Americano" class="menu-icon">
              <div class="menu-item-text">
                <h4>Americano</h4>
                <p>Espresso with hot water, pure and simple.</p>
              </div>
            </div>

            <div class="menu-item">
              <img src="${latteIcon}" alt="Mocha" class="menu-icon">
              <div class="menu-item-text">
                <h4>Mocha</h4>
                <p>Chocolate and espresso in harmony.</p>
              </div>
            </div>
          </div>

          <div class="menu-image">
            <img src="${menuImage}" alt="Artisan coffee">
          </div>
        </div>
      </div>

      <!-- Pastries Section -->
      <div class="menu-section" id="pastries">
        <div class="menu-grid">
          <div class="menu-list">
            <h3 class="menu-category-title">Pastries</h3>
            
            <div class="menu-item">
              <img src="${croissantIcon}" alt="Croissant" class="menu-icon">
              <div class="menu-item-text">
                <h4>Croissant</h4>
                <p>Buttery, flaky perfection.</p>
              </div>
            </div>

            <div class="menu-item">
              <img src="${painChocolatIcon}" alt="Pain au Chocolat" class="menu-icon">
              <div class="menu-item-text">
                <h4>Pain au Chocolat</h4>
                <p>Chocolate wrapped in layers of bliss.</p>
              </div>
            </div>

            <div class="menu-item">
              <img src="${tartIcon}" alt="Almond Tart" class="menu-icon">
              <div class="menu-item-text">
                <h4>Almond Tart</h4>
                <p>Sweet, nutty indulgence.</p>
              </div>
            </div>

            <div class="menu-item">
              <img src="${madeleineIcon}" alt="Madeleine" class="menu-icon">
              <div class="menu-item-text">
                <h4>Madeleine</h4>
                <p>Delicate, buttery French classic.</p>
              </div>
            </div>

            <div class="menu-item">
              <img src="${croissantIcon}" alt="Blueberry Scone" class="menu-icon">
              <div class="menu-item-text">
                <h4>Blueberry Scone</h4>
                <p>Tender crumb with bursts of berry.</p>
              </div>
            </div>

            <div class="menu-item">
              <img src="${tartIcon}" alt="Lemon Tart" class="menu-icon">
              <div class="menu-item-text">
                <h4>Lemon Tart</h4>
                <p>Bright, zesty sweetness.</p>
              </div>
            </div>
          </div>

          <div class="menu-image">
            <img src="${menuImage}" alt="Fresh pastries">
          </div>
        </div>
      </div>

      <!-- Tea & More Section -->
      <div class="menu-section" id="tea">
        <div class="menu-grid">
          <div class="menu-list">
            <h3 class="menu-category-title">Tea & More</h3>
            
            <div class="menu-item">
              <img src="${teaIcon}" alt="Earl Grey" class="menu-icon">
              <div class="menu-item-text">
                <h4>Earl Grey</h4>
                <p>Classic bergamot elegance.</p>
              </div>
            </div>

            <div class="menu-item">
              <img src="${teaIcon}" alt="Chamomile" class="menu-icon">
              <div class="menu-item-text">
                <h4>Chamomile</h4>
                <p>Soothing floral serenity.</p>
              </div>
            </div>

            <div class="menu-item">
              <img src="${teaIcon}" alt="English Breakfast" class="menu-icon">
              <div class="menu-item-text">
                <h4>English Breakfast</h4>
                <p>Robust, full-bodied morning blend.</p>
              </div>
            </div>

            <div class="menu-item">
              <img src="${matchaIcon}" alt="Matcha Latte" class="menu-icon">
              <div class="menu-item-text">
                <h4>Matcha Latte</h4>
                <p>Smooth, earthy indulgence.</p>
              </div>
            </div>

            <div class="menu-item">
              <img src="${hotChocolateIcon}" alt="Hot Chocolate" class="menu-icon">
              <div class="menu-item-text">
                <h4>Hot Chocolate</h4>
                <p>Rich, velvety decadence.</p>
              </div>
            </div>

            <div class="menu-item">
              <img src="${teaIcon}" alt="Peppermint Tea" class="menu-icon">
              <div class="menu-item-text">
                <h4>Peppermint Tea</h4>
                <p>Refreshing, cool clarity.</p>
              </div>
            </div>
          </div>

          <div class="menu-image">
            <img src="${menuImage}" alt="Tea and beverages">
          </div>
        </div>
      </div>

    </section>
  `;
}
