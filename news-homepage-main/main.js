const toggler = document.querySelector(".menu-toggler");
const navEl = document.querySelector("nav");
const icon = toggler.querySelector("img");
const lists = document.querySelectorAll("li");
const sections = document.querySelectorAll(".section");
const body = document.body;

//custom functions
function handleClose(el) {
  el.classList.remove("open");
}

function handleIcon() {
  if (toggler.classList.contains("open")) {
    icon.src = "./public/assets/images/icon-menu-close.svg";
    icon.alt = "Close Navigation Menu";
  } else if (!toggler.classList.contains("open")) {
    icon.src = "./public/assets/images/icon-menu.svg";
    icon.alt = "Open Navigation Menu";
  }
}

//toggling navBar
toggler.addEventListener("click", () => {
  toggler.classList.toggle("open");
  navEl.classList.toggle("open");
  if (navEl.classList.contains("open")) {
    body.style.overflow = "hidden";
  } else if (!navEl.classList.contains("open")) {
    body.style.overflowY = "scroll";
  }
  handleIcon();
});

//closing on click outside
navEl.tabIndex = 0;
document.body.addEventListener("click", () => {
  if (document.activeElement !== toggler) {
    if (
      navEl !== document.activeElement &&
      document.body.getBoundingClientRect().width < 720
    ) {
      toggler.classList.remove("open");
      handleClose(navEl);
      handleIcon();
      body.style.overflowY = "scroll";
    }
  }
});

//animations
lists.forEach((list, i) => {
  list.style.animationDuration = `${
    i === 0 || 1 ? 0.3 + i / 5 : i / 4 - i / 30
  }s`;
});

sections.forEach((section) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const intersecting = entry.isIntersecting;
      intersecting && section.classList.add("animate");
    });
  });
  observer.observe(section);
});
