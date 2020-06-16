
// Napravi modul general i ubaci funkcije 

const closePage  = (page) =>{
  page.style.animation = "backOutRight 3s";
  setTimeout(() => {
    page.style.display = "none";
  }, 900);
}


const menuOpenHandler = document.getElementById("menu-icon-open");
const menuCloseHandler = document.getElementById("menu-icon-close");
const menu = document.getElementById("menu");
const toTopHendler = document.getElementById("to-top");
const returnHandler = document.querySelectorAll(".fa-reply");
const aboutHendler = document.getElementById("about-me");
const aboutDropdownHendler = document.getElementById('about-dropdown');
const contactHendler = document.getElementById("contact");
const contactDropdownHendler = document.getElementById("contract-dropdown");
const mainWrapper = document.getElementById('wrapper');
const aboutBox = document.getElementById('about-me-box');
const webSitesHandler = document.getElementById('web');
const nextBtnHandler = document.getElementById('next');
const prevBtnHandler = document.getElementById('prev');

// console.log()

menuOpenHandler.addEventListener("click", () => {
  menuOpenHandler.style.display = "none";
  menuCloseHandler.style.display = "block";
  menu.style.display = "block";
  menu.style.animation = "backInDown 1s";
});
menuCloseHandler.addEventListener("click", () => {
  menu.style.animation = "backOutDown 1s";
  setTimeout(() => {
    menu.style.display = "none";
  }, 280);
  menuCloseHandler.style.display = "none";
  menuOpenHandler.style.display = "block";
});

// About me
aboutHendler.addEventListener("click", () => {
  setTimeout(()=>{
    mainWrapper.style.display = 'none';
  },1010);
  window.scrollTo(0, 0);
  // aboutBox.innerHTML = renderAboutBox();
  document.getElementById("about-me-box").style.display = "grid";
  document.getElementById("about-me-box").style.animation = "backInDown 1s";
});

aboutDropdownHendler.addEventListener("click", (elem) => {
  elem.preventDefault();
  window.scrollTo(0, 0);
  setTimeout(()=>{
    mainWrapper.style.display = 'none';
  },1010);
  // aboutBox.innerHTML = renderAboutBox();
  document.getElementById("about-me-box").style.display = "grid";
  document.getElementById("about-me-box").style.animation = "backInDown 1s";
  menu.style.display = "none";
  menuCloseHandler.style.display = "none";
  menuOpenHandler.style.display = "block";
});

// Contact
contactHendler.addEventListener("click", () => {
  setTimeout(()=>{
    mainWrapper.style.display = 'none';
  },1010);
  window.scrollTo(0, 0);
  document.getElementById("contact-me-box").style.display = "grid";
  document.getElementById("contact-me-box").style.animation = "backInDown 1s";
});

contactDropdownHendler.addEventListener("click", (elem) => {
  elem.preventDefault();
  window.scrollTo(0, 0);
  setTimeout(()=>{
    mainWrapper.style.display = 'none';
  },1010);
  document.getElementById("contact-me-box").style.display = "grid";
  document.getElementById("contact-me-box").style.animation = "backInDown 1s";
  menu.style.display = "none";
  menuCloseHandler.style.display = "none";
  menuOpenHandler.style.display = "block";
});



//  Web
webSitesHandler.addEventListener("click", () => {
  setTimeout(()=>{
    mainWrapper.style.display = 'none';
  },1010);
  window.scrollTo(0, 0);
  document.getElementById("web-sites-box").style.display = "grid";
  document.getElementById("web-sites-box").style.animation = "backInDown 1s";
});



// close pages
returnHandler.forEach((elem) => {
  elem.addEventListener("click", () => {
    mainWrapper.style.display = 'grid'
    if (document.getElementById("about-me-box").style.display === "grid") {
      closePage(document.getElementById("about-me-box"));
    }
    if (document.getElementById("contact-me-box").style.display === "grid") {
      closePage(document.getElementById("contact-me-box"));
    }
    if (document.getElementById("web-sites-box").style.display === "grid") {
      closePage(document.getElementById("web-sites-box"));
    };
  });
});

// scroll to top
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

let slideCounter = 1;

let displaySlide = (num) =>{
  let i;
  let slides = document.getElementsByClassName("slide");
  if (num > slides.length){
    slideCounter = 1;
  }
  if (num < 1){
    slideCounter = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideCounter-1].style.display = "block"; 
}

let shiftSlide = (num)=>{
  displaySlide(slideCounter += num);
}  




nextBtnHandler.addEventListener('click', () =>{
  shiftSlide(1);
})

prevBtnHandler.addEventListener('click', () => {
  shiftSlide(-1);
} )

// const renderAboutBox = () =>{
//   return `     <i class="fas fa-reply"></i>
//   <div id="who-am-I">
//     <h1 class="heading-style"><span>Who am I ?</span></h1>
//     <div>
//       <div id="img-box">
//         <img src="/public/img/portrait.jpg" alt="">
//       </div>
//       <div id="text-box">
//         <p>&emsp;Hi, my name is Aleksandar Stanojević, web developer beginner based in Niš, Serbia.
//           I have high motivation for learning about coding, and acquiring new skills.
//           I am interested in coding because I love dynamic jobs and learning new things.</p>
//         <p>&emsp;I successfully completed a Web Developer (JS) course organized by ITBootcamp. During the course I attended, 
//           I learned the basics of JavaScript (ES06) programming, as well as HTML and CSS, but most importantly I discover a 
//           passion for coding so I can say with 100% certainty that I want to learn and dedicate my time and effort to become a great developer.</p>
//         <p>&emsp;Also on the online platform Udemy, I attended several other courses related to JavaScript, HTML and CSS. On my Github account, there are several of my projects that I have done in the meantime, 
//           if you give me a chance I will be happy to tell you a little more about them.</p>
//         <p>&ensp;As a beginner it's very important to continue with practice, and that's why I'm 
//           looking for professional practice as a web developer.</p>
//       </div>
//     </div>
//   </div>
//   <div id="my-skills">
//     <div>
//       <h1 class="heading-style"><span>My skills are:</span></h1>
//     </div>
//     <div>
      
//     </div>

//   </div>`

// }