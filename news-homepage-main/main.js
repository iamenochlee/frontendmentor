const toggler = document.querySelector(".menu-toggler");
const navBar = document.querySelector(".list--container");
const body = document.body;
const image = toggler.querySelector("img");
const lists = document.querySelectorAll("li");

//opening navbar and closing navbar
const handleOpen = (el, closeEl) => {
  el.style.display = "block";
  closeEl.src = "./assets/images/icon-menu-close.svg";
  closeEl.alt = "Close Navigation Menu";
  body.style.overflow = "hidden";
};

const handleClose = (el, closeEl) => {
  el.style.display = "none";
  closeEl.alt = "Open Navigation menu";
  body.style.overflow = "scroll";
  closeEl.src = "./assets/images/icon-menu.svg";
};

toggler.addEventListener("click", () => {
  if (navBar.style.display === "block") {
    handleClose(navBar, image);
  } else if ((navBar.style.display = "none")) {
    handleOpen(navBar, image);
  }
});

document.addEventListener("click", () => {
  if (
    navBar !== document.activeElement &&
    body.getBoundingClientRect().width < 720
  ) {
    if (document.activeElement !== toggler) {
      handleClose(navBar, image);
    }
  }
});

//animation

lists.forEach((list, i) => {
  list.style.animationDuration = `${i === 0 ? 0.3 : i / 4 - i / 30}s`;
});
