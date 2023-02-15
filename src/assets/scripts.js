export const getSrc = (name) => {
  return new URL(`./images/${name}`, import.meta.url).href;
};

export const toggleMenu = (event) => {
  const burger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".mobile-nav");

  burger.classList.toggle("open");
  navbar.classList.toggle("-translate-x-full");
};

export const hideMenuOnClick = (event) => {
  const navbar = document.querySelector(".mobile-nav");
  const burger = document.querySelector(".hamburger");
  const links = document.querySelectorAll(".mobile-nav a");

  links.forEach((link, i) => {
    link.addEventListener("click", () => {
      burger.classList.toggle("open");
      navbar.classList.toggle("-translate-x-full");
    });
  })
}
