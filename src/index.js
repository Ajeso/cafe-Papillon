import "./styles.css";

const container = document.getElementById("content");

container.innerHTML = `
<div class="hero">
<div class="hero-content">
  <h2>Cafè des Livres</h2>
  <p>A quiet corner for coffee, books, and slow moments</p>
  <button>View Menu</button>
  <button>Visit Us</button>
  </div>
</div>


<div class = "about">
<div class="aboutImg"></div>
<div>
<p> A gentle refuge from the noise of the world. Here, coffee is savoured  slowly, pages turned softly, and time moves kindly.</p>
</div>
</div>

<div class="offerings">
    <div class="offering-card">
      <i class="fa-solid fa-mug-hot"></i>
      <h3>Artisan Coffee</h3>
      <p>Carefully brewed comfort in every cup.</p>
    </div>
    
    <div class="offering-card">
      <i class="fa-solid fa-book"></i>
      <h3>Reading Corner</h3>
      <p>A peaceful space to read and unwind.</p>
    </div>
    
    <div class="offering-card">
      <i class="fa-solid fa-croissant"></i>
      <h3>Fresh Pastries</h3>
      <p>Baked delights to sweeten your day.</p>
    </div>
  </div>


`;
console.log("Monicah You gat this");
