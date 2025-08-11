document.addEventListener("DOMContentLoaded", () => {
  // Привязка по id — надёжнее
  const linkTargets = [
    { text: "Спецпредложения", element: document.getElementById("specialOffers") },
    { text: "Услуги", element: document.getElementById("services") },
    { text: "Цены", element: document.getElementById("prices") },
    { text: "О компании", element: document.getElementById("about") },
    { text: "Контакты", element: document.getElementById("contacts") },
  ];

  const validTargets = linkTargets.filter(target => target.element);
  const navLinks = document.querySelectorAll('header nav a, footer nav a');

  // Клик — плавная прокрутка
  navLinks.forEach(link => {
    const target = validTargets.find(t => t.text.trim() === link.textContent.trim());
    if (target) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        target.element.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  });

  // Активация ссылки при прокрутке
  function updateActiveLink() {
    const scrollY = window.scrollY;

    validTargets.forEach(({ text, element }) => {
      const rect = element.getBoundingClientRect();
      const top = rect.top + scrollY;
      const bottom = top + element.offsetHeight;

      navLinks.forEach(link => {
        if (link.textContent.trim() === text) {
          if (scrollY >= top - 120 && scrollY < bottom - 120) {
            link.classList.add("active-link");
          } else {
            link.classList.remove("active-link");
          }
        }
      });
    });
  }

  window.addEventListener("scroll", updateActiveLink);
  window.addEventListener("load", updateActiveLink);
  updateActiveLink(); // инициализация
});