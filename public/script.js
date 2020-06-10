const menuOpenHandler = document.getElementById("menu-icon-open");
const menuCloseHandler = document.getElementById("menu-icon-close");
const menu = document.getElementById("menu");
const toTopHendler = document.getElementById("to-top");
const returnHandler = document.querySelectorAll(".fa-reply");
const aboutHendler = document.getElementById("about-me");
const aboutDropdownHendler = document.getElementById('about-dropdown')
const contactHendler = document.getElementById("contact");
const contactDropdownHendler = document.getElementById("contract-dropdown");

// console.log()

menuOpenHandler.addEventListener("click", () => {
  menuOpenHandler.style.display = "none";
  // menuOpen.style.animation = 'backOutRight .6s cubic-bezier(0.5, 0, 0.5, 1) '
  menuCloseHandler.style.display = "block";
  menu.style.display = "block";
  menu.style.animation = "backInDown 1s";
});
menuCloseHandler.addEventListener("click", () => {
  menu.style.animation = "backOutDown 1s";
  setTimeout(() => {
    menu.style.display = "none";
  }, 580);
  menuCloseHandler.style.display = "none";
  menuOpenHandler.style.display = "block";
  // menuOpen.style.animation = 'backInLeft .6s cubic-bezier(0.5, 0, 0.5, 1) '
});

// About me
aboutHendler.addEventListener("click", () => {
  window.scrollTo(0, 0);
  document.getElementById("about-me-box").style.display = "grid";
  document.getElementById("about-me-box").style.animation = "backInDown 1s";
});
aboutDropdownHendler.addEventListener("click", (elem) => {
  elem.preventDefault();
  window.scrollTo(0, 0);
  document.getElementById("about-me-box").style.display = "grid";
  document.getElementById("about-me-box").style.animation = "backInDown 1s";
  menu.style.display = "none";
  menuCloseHandler.style.display = "none";
  menuOpenHandler.style.display = "block";
});

// Contact
contactHendler.addEventListener("click", () => {
  window.scrollTo(0, 0);
  document.getElementById("contact-me-box").style.display = "grid";
  document.getElementById("contact-me-box").style.animation = "backInDown 1s";
});
contactDropdownHendler.addEventListener("click", (elem) => {
  elem.preventDefault();
  window.scrollTo(0, 0);
  document.getElementById("contact-me-box").style.display = "grid";
  document.getElementById("contact-me-box").style.animation = "backInDown 1s";
  menu.style.display = "none";
  menuCloseHandler.style.display = "none";
  menuOpenHandler.style.display = "block";
});

returnHandler.forEach((elem) => {
  elem.addEventListener("click", () => {
    if (document.getElementById("about-me-box").style.display === "grid") {
      document.getElementById("about-me-box").style.animation = "backOutRight 3s";
      setTimeout(() => {
        document.getElementById("about-me-box").style.display = "none";
      }, 900);
    }
    if (document.getElementById("contact-me-box").style.display === "grid") {
      document.getElementById("contact-me-box").style.animation = "backOutRight 3s";
      setTimeout(() => {
        document.getElementById("contact-me-box").style.display = "none";
      }, 900);
    }

    // document.getElementById('about-me-box').style.display = 'none';
  });
});

document.addEventListener("scroll", (event) => {
  if (
    document.body.scrollTop > 120 ||
    document.documentElement.scrollTop > 120
  ) {
    toTopHendler.style.display = "block";
  } else {
    toTopHendler.style.display = "none";
  }
});
