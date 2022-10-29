const toggler = document.querySelector(".menu-toggler");
const navEl = document.querySelector("nav");
const icon = toggler.querySelector("img");
const lists = document.querySelectorAll("li");
const sections = document.querySelectorAll(".section");
const body = document.body;

//opening navbar and closing navbar
const handleOpen = (el) => {
  el.style.display = "block";
  icon.src = "./assets/images/icon-menu-close.svg";
  icon.alt = "Close Navigation Menu";
  body.style.overflow = "hidden";
};

const handleClose = (el) => {
  el.style.display = "none";
  icon.alt = "Open Navigation menu";
  icon.src = "./assets/images/icon-menu.svg";
  body.style.overflowY = "scroll";
};

//toggling navBar
navEl.tabIndex = 0;
toggler.addEventListener("click", () => {
  if (navEl.style.display === "none") {
    handleOpen(navEl);
  } else if (navEl.style.display !== "none") {
    handleClose(navEl);
  }
});

document.body.addEventListener("click", () => {
  if (document.activeElement !== toggler) {
    if (
      navEl !== document.activeElement &&
      document.body.getBoundingClientRect().width < 720
    ) {
      handleClose(navEl);
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
      intersecting
        ? section.classList.add("animate")
        : section.classList.remove("animate");
    });
  });
  observer.observe(section);
});
