
// Menú adaptable para celulares
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "✕" : "☰";
  });
}

// Filtros de categorías en la página Productos
const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".catalog-grid .product-card");
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const category = button.dataset.filter;
    productCards.forEach(card => {
      card.hidden = category !== "todos" && card.dataset.category !== category;
    });
  });
});