import "./styles.css";
import { renderHome } from "./pages/home.js";
import { renderAbout } from "./pages/about.js";
import { renderMenu } from "./pages/menu.js";

const container = document.getElementById("content");
const homeTabs = document.querySelectorAll("button");
container.innerHTML = renderHome();

function initHomeInteractions() {
  container.addEventListener("click", (e) => {
    const button = e.target.closest("[data-action]");
    if (!button) return;
    const action = button.dataset.action;
    const tab = button.dataset.tab;

    if (action === "visit-us") {
      const visitUsSection = document.getElementById("visit-us");
      if (visitUsSection) {
        visitUsSection.scrollIntoView({ behavior: "smooth" });
      }
    } else if (action === "view-menu") {
      container.innerHTML = renderMenu();
      initMenuTabs("coffee");
    } else if (action === "menu-tab") {
      container.innerHTML = renderMenu();
      initMenuTabs(tab);
    } else if (action === "about-page") {
      container.innerHTML = renderAbout();
    }
  });
}

initHomeInteractions();
function initMenuTabs() {
  const menuTabs = document.querySelectorAll(".menu-tab");
  const sections = document.querySelectorAll(".menu-section");

  menuTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const category = tab.dataset.category;

      menuTabs.forEach((t) => t.classList.remove("active"));
      sections.forEach((s) => s.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(category).classList.add("active");
    });
  });
}

homeTabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const page = e.target.dataset.page;

    if (page === "home") {
      container.innerHTML = renderHome();
    } else if (page === "menu") {
      container.innerHTML = renderMenu();
      initMenuTabs();
    } else if (page === "about") {
      container.innerHTML = renderAbout();
    }
  });
});
