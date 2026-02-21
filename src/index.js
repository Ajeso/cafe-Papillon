import "./styles.css";
import { renderHome } from "./pages/home.js";
import { renderAbout } from "./pages/about.js";
import { renderMenu } from "./pages/menu.js";

const container = document.getElementById("content");
const tabs = document.querySelectorAll("button");

container.innerHTML = renderHome();

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const page = e.target.dataset.page;

    if (page === "home") {
      container.innerHTML = renderHome();
    } else if (page === "menu") {
      container.innerHTML = renderMenu();
    } else if (page === "about") {
      container.innerHTML = renderAbout();
    }
  });
});
