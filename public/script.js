
// Napravi modul general i ubaci funkcije 

const closePage  = (page) =>{
  page.style.animation = "backOutRight 3s";
  setTimeout(() => {
    page.style.display = "none";
  }, 900);
}
const closeBox  = (page, title) =>{
  page.style.animation = "backOutRight 3s";
  setTimeout(() => {
    page.style.display = "none";
    title.innerHTML = '';
  }, 900);
}

const renderInfo = (title, firstEl, secondEl, thirdEl, gitRepo, live) =>{
  return `<h1>${title}</h1>
  <h3>Project info:</h3>
  <ul>
    <li>${firstEl}</li>
    <li>${secondEl}</li>
    <li>${thirdEl}</li>
  </ul>
  <div class="btn-box">
    <a href="${live}" target="_blank">Live Version</a>
    <button>View Project</button>
    <a href="${gitRepo}" target="_blank">GitHub Repo</a>
  </div>`
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
const portfolioDropdownHandler = document.getElementById('portfolio-dropdown')
const mainWrapper = document.getElementById('wrapper');
const aboutBox = document.getElementById('about-me-box');
const portfolioBox = document.getElementById('portfolio-box');
const webSitesHandler = document.getElementById('web');
const gameHandler = document.getElementById('games');
const appHandler = document.getElementById('app')
const nextBtnHandlerWeb = document.getElementById('next-web');
const prevBtnHandlerWeb = document.getElementById('prev-web');
const nextBtnHandlerApp = document.getElementById('next-app');
const prevBtnHandlerApp = document.getElementById('prev-app');
const nextBtnHandlerGame = document.getElementById('next-game');
const prevBtnHandlerGame = document.getElementById('prev-game');
const infoBox = document.querySelectorAll(".info")

// console.log()
let slideCounter = 1;

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

// porfolio
portfolioDropdownHandler.addEventListener('click', (elem)=>{
  elem.preventDefault();
  window.scrollTo(0, 0);
  setTimeout(()=>{
    mainWrapper.style.display = 'none';
  },1010);
  // aboutBox.innerHTML = renderAboutBox();
  document.getElementById("portfolio-box").style.display = "flex";
  document.getElementById("portfolio-box").style.animation = "backInDown 1s";
  menu.style.display = "none";
  menuCloseHandler.style.display = "none";
  menuOpenHandler.style.display = "block";
})

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
  document.querySelector('#web-info h1').innerHTML = `GymFit`;
  document.getElementById("web-carousel-view").innerHTML = `<img class="slide fade web-shift" src="img/portfolio/gym-01.png" style="display: block;" alt="">        
  <img class="slide fade web-shift" src="img/portfolio/house-01.png" style="display: none;" alt="">
  <img class="slide fade web-shift" src="img/portfolio/portfolio-01.png" style="display: none;" alt="">`;
  nextBtnHandlerWeb.style.backgroundImage = `url("img/portfolio/house-01.png")`;
    prevBtnHandlerWeb.style.backgroundImage = `url("img/portfolio/portfolio-01.png")`;


});

//  Game
gameHandler.addEventListener("click", () => {
  setTimeout(()=>{
    mainWrapper.style.display = 'none';
  },1010);
  window.scrollTo(0, 0);
  document.getElementById("game-box").style.display = "grid";
  document.getElementById("game-box").style.animation = "backInDown 1s";
  document.querySelector('#game-info h1').innerHTML = `javaScript Quizz`;
  document.getElementById("game-carousel-view").innerHTML = `  <img class="slide fade game-shift" src="img/portfolio/quizz-01.png" style="display: block;" alt="">        
  <img class="slide fade game-shift" src="img/portfolio/rps-01.png" style="display: none;" alt="">
  <img class="slide fade game-shift" src="img/portfolio/pig-01.png" style="display: none;" alt="">
  <img class="slide fade game-shift" src="img/portfolio/geo-01.png" style="display: none;" alt="">`;
  nextBtnHandlerGame.style.backgroundImage = `url("img/portfolio/rps-01.png")`;
  prevBtnHandlerGame.style.backgroundImage = `url("img/portfolio/geo-01.png")`;

});

//  App
appHandler.addEventListener("click", () => {
  setTimeout(()=>{
    mainWrapper.style.display = 'none';
  },1010);
  window.scrollTo(0, 0);
  document.getElementById("app-box").style.display = "grid";
  document.getElementById("app-box").style.animation = "backInDown 1s";
  document.querySelector('#app-info h1').innerHTML = `Calculator`;
  document.getElementById("app-carousel-view").innerHTML = `<img class="slide fade app-shift" src="img/portfolio/calc-01.png" style="display: block;" alt="">        
  <img class="slide fade app-shift" src="img/portfolio/planner-01.png" style="display: none;" alt="">
  <img class="slide fade app-shift" src="img/portfolio/currency-01.png" style="display: none;" alt="">
  <img class="slide fade app-shift" src="img/portfolio/wheater-01.png" style="display: none;" alt="">
  <img class="slide fade app-shift" src="img/portfolio/cov-01.png" style="display: none;" alt="">`;
  nextBtnHandlerApp.style.backgroundImage = `url("img/portfolio/planner-01.png")`;
    prevBtnHandlerApp.style.backgroundImage = `url("img/portfolio/cov-01.png")`;

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
    if (document.getElementById("portfolio-box").style.display === "flex") {
      closePage(document.getElementById("portfolio-box"));
    }
    if (document.getElementById("web-sites-box").style.display === "grid") {
      // slideCounter = 1;
      closeBox(document.getElementById("web-sites-box"), document.querySelector('#web-info h1'));
    };
    if (document.getElementById("game-box").style.display === "grid") {
      // slideCounter = 1;
      closeBox(document.getElementById("game-box"), document.querySelector('#game-info h1'));
    };
    if (document.getElementById("app-box").style.display === "grid") {
      // slideCounter = 1;
      closeBox(document.getElementById("app-box"), document.querySelector('#app-info h1'));
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


// WEB RENDER

let displaySlide = (num, shift) =>{
  let i;
  let slides = document.getElementsByClassName(shift);
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

let shiftSlide = (num, shift)=>{
  displaySlide(slideCounter += num, shift);
}



const resetAnimation = (id) =>{
  setTimeout(()=>{
    document.getElementById(id).style.animation = 'none'
        }, 1001)
}

// web shifters
const shiftPrevNextWeb = () =>{
  if(slideCounter === 1){
    nextBtnHandlerWeb.style.backgroundImage = `url("img/portfolio/house-01.png")`;
    prevBtnHandlerWeb.style.backgroundImage = `url("img/portfolio/portfolio-01.png")`;
    document.getElementById('web-info').style.animation = 'fadeIn 1s'
    document.getElementById('web-info').innerHTML = renderInfo(`GymFit`, `HTML, CSS, JS`, `Bootstrap 4`, `Responsive`, `https://github.com/AleksandarStanojevic1509/GymFit`, `#`)
    resetAnimation('web-info')
  }
  if(slideCounter === 2){
    nextBtnHandlerWeb.style.backgroundImage = `url("img/portfolio/portfolio-01.png")`;
    prevBtnHandlerWeb.style.backgroundImage = `url("img/portfolio/gym-01.png")`;
    document.getElementById('web-info').style.animation = 'fadeIn 1s'
    document.getElementById('web-info').innerHTML = renderInfo(`the h<span><i class="fas fa-home"></i></span>use`, `HTML, CSS, JS`, `Bootstrap 4, Responsive`, `Firebase`, `https://github.com/AleksandarStanojevic1509/theHouse`, `#`)
    resetAnimation('web-info')
  }
  if(slideCounter === 3){
    nextBtnHandlerWeb.style.backgroundImage = `url("img/portfolio/gym-01.png")`;
    prevBtnHandlerWeb.style.backgroundImage = `url("img/portfolio/house-01.png")`;
    document.getElementById('web-info').style.animation = 'fadeIn 1s'
    document.getElementById('web-info').innerHTML = renderInfo(`Portfolio`,`HTML, CSS, JS`, `Bootstrap 4`, `Responsive`, `https://github.com/AleksandarStanojevic1509/Portfolio-Template`, `#`)
    resetAnimation('web-info')
  }
}

// game shifters
const shiftPrevNextGame = () =>{
  if(slideCounter === 1){
    nextBtnHandlerGame.style.backgroundImage = `url("img/portfolio/rps-01.png")`;
    prevBtnHandlerGame.style.backgroundImage = `url("img/portfolio/geo-01.png")`;
    document.getElementById('game-info').style.animation = 'fadeIn 1s'
    document.getElementById('game-info').innerHTML = renderInfo(`javaScript Quizz`, `HTML`, `CSS`, `JS`, `https://github.com/AleksandarStanojevic1509/JavaScript-Quizz`, `#`)
    resetAnimation('game-info')
  }
  if(slideCounter === 2){
    nextBtnHandlerGame.style.backgroundImage = `url("img/portfolio/pig-01.png")`;
    prevBtnHandlerGame.style.backgroundImage = `url("img/portfolio/quizz-01.png")`;
    document.getElementById('game-info').style.animation = 'fadeIn 1s'
    document.getElementById('game-info').innerHTML = renderInfo(`Paper Rock Scissors`, `HTML, CSS, JS`, `socket.io`, `node.js`, `https://github.com/AleksandarStanojevic1509/RockPaperScissors`, `#`)
    resetAnimation('game-info')
  }
  if(slideCounter === 3){
    nextBtnHandlerGame.style.backgroundImage = `url("img/portfolio/geo-01.png")`;
    prevBtnHandlerGame.style.backgroundImage = `url("img/portfolio/rps-01.png")`;
    document.getElementById('game-info').style.animation = 'fadeIn 1s'
    document.getElementById('game-info').innerHTML = renderInfo(`Pig Game`,`HTML`, `CSS`, `JS`, `https://github.com/AleksandarStanojevic1509/PigGame`, `#`)
    resetAnimation('game-info')
  }
  if(slideCounter === 4){
    nextBtnHandlerGame.style.backgroundImage = `url("img/portfolio/quizz-01.png")`;
    prevBtnHandlerGame.style.backgroundImage = `url("img/portfolio/pig-01.png")`;
    document.getElementById('game-info').style.animation = 'fadeIn 1s'
    document.getElementById('game-info').innerHTML = renderInfo(`Zanimljiva Geografija`,`HTML, CSS, JS`, `Materialize, Responsive`, `socket.io, node.js`, `https://github.com/AleksandarStanojevic1509/ZanimljivaGeografija`, `https://zanimljivageografija-f1e43.firebaseapp.com/`)
    resetAnimation('game-info')
  }
}


// app shifters
const shiftPrevNextApp = () =>{
  if(slideCounter === 1){
    nextBtnHandlerApp.style.backgroundImage = `url("img/portfolio/planner-01.png")`;
    prevBtnHandlerApp.style.backgroundImage = `url("img/portfolio/cov-01.png")`;
    document.getElementById('app-info').style.animation = 'fadeIn 1s'
    document.getElementById('app-info').innerHTML = renderInfo(`Calculator`, `HTML`, `CSS`, `JS`, `https://github.com/AleksandarStanojevic1509/Calculator`, `#`)
    resetAnimation('app-info')
  }
  if(slideCounter === 2){
    nextBtnHandlerApp.style.backgroundImage = `url("img/portfolio/currency-01.png")`;
    prevBtnHandlerApp.style.backgroundImage = `url("img/portfolio/calc-01.png")`;
    document.getElementById('app-info').style.animation = 'fadeIn 1s'
    document.getElementById('app-info').innerHTML = renderInfo(`Daily Planner`, `HTML, CSS, JS`, `Bootstrap 4, Responsive`, `indexedDB, dexie.js`, `https://github.com/AleksandarStanojevic1509/DailyPlanner`, `#`)
    resetAnimation('app-info')
  }
  if(slideCounter === 3){
    nextBtnHandlerApp.style.backgroundImage = `url("img/portfolio/wheater-01.png")`;
    prevBtnHandlerApp.style.backgroundImage = `url("img/portfolio/planner-01.png")`;
    document.getElementById('app-info').style.animation = 'fadeIn 1s'
    document.getElementById('app-info').innerHTML = renderInfo(`Currency Calculator`,`HTML, CSS`, `JS`, `REST API`, `https://github.com/AleksandarStanojevic1509/CurrencyCalculator`, `#`)
    resetAnimation('app-info')
  }
  if(slideCounter === 4){
    nextBtnHandlerApp.style.backgroundImage = `url("img/portfolio/cov-01.png")`;
    prevBtnHandlerApp.style.backgroundImage = `url("img/portfolio/currency-01.png")`;
    document.getElementById('app-info').style.animation = 'fadeIn 1s'
    document.getElementById('app-info').innerHTML = renderInfo(`Simple Weather App`,`HTML, CSS, JS`, `Bootstrap 4, Responsive`, `REST API`, `https://github.com/AleksandarStanojevic1509/SimpleWeatherApp`, `#`)
    resetAnimation('app-info')
  }
  if(slideCounter === 5){
    nextBtnHandlerApp.style.backgroundImage = `url("img/portfolio/calc-01.png")`;
    prevBtnHandlerApp.style.backgroundImage = `url("img/portfolio/wheater-01.png")`;
    document.getElementById('app-info').style.animation = 'fadeIn 1s'
    document.getElementById('app-info').innerHTML = renderInfo(`Covid-19 Table`,`HTML, CSS, JS`, `Bootstrap 4, Responsive`, `REST API`,  `https://github.com/AleksandarStanojevic1509/Covid-19-table`, `#`)
    resetAnimation('app-info')
  }
}

// web btns
nextBtnHandlerWeb.addEventListener('click', () =>{
  shiftSlide(1, 'web-shift');
  shiftPrevNextWeb();
})

prevBtnHandlerWeb.addEventListener('click', () => {
  shiftSlide(-1, 'web-shift');
  shiftPrevNextWeb();  
})

// app btn
nextBtnHandlerApp.addEventListener('click', () =>{
  shiftSlide(1, 'app-shift');
  shiftPrevNextApp();
})

prevBtnHandlerApp.addEventListener('click', () => {
  shiftSlide(-1, 'app-shift');
  shiftPrevNextApp();  
})

// game btns
nextBtnHandlerGame.addEventListener('click', () =>{
  shiftSlide(1, 'game-shift');
  shiftPrevNextGame();
})

prevBtnHandlerGame.addEventListener('click', () => {
  shiftSlide(-1, 'game-shift');
  shiftPrevNextGame();  
})

const addImgToDisplayBox = (id,path) =>{
  for (let i = 1; i < 5; i++){
    document.getElementById(id).innerHTML += `<img class="img-project" src="img/portfolio/${path}${i}.png"alt="">`;
  }
}


// PROJECT INFO BOX
infoBox.forEach(elem=>{
  elem.addEventListener('click', (event)=>{
    window.scrollTo(0, 0);
    if(event.target.tagName === "BUTTON"){
      document.getElementById('display-box').style.display = 'block';
      document.getElementById('display-box').style.animation = 'fadeIn 1s';
      // web
      if(document.querySelector('#web-info h1').innerHTML === 'GymFit'){
        addImgToDisplayBox('display-project', "gym-prev-0" );
      }
      if(document.querySelector('#web-info h1').innerHTML === 'the h<span><i class="fas fa-home"></i></span>use'){
        addImgToDisplayBox('display-project', "house-prev-0" );
      }
      if(document.querySelector('#web-info h1').innerHTML === 'Portfolio'){
        addImgToDisplayBox('display-project', "port-prev-0" );
      }
      // game
      if(document.querySelector('#game-info h1').innerHTML === 'javaScript Quizz'){
        addImgToDisplayBox('display-project', "quizz-prev-0" );
      }
      if(document.querySelector('#game-info h1').innerHTML === 'Paper Rock Scissors'){
        addImgToDisplayBox('display-project', "rps-prev-0" );
      }
      if(document.querySelector('#game-info h1').innerHTML === 'Pig Game'){
        addImgToDisplayBox('display-project', "pig-prev-0" );
      }
      if(document.querySelector('#game-info h1').innerHTML === 'Zanimljiva Geografija'){
        addImgToDisplayBox('display-project', "geo-prev-0" );
      }
      // app
      if(document.querySelector('#app-info h1').innerHTML === 'Calculator'){
        addImgToDisplayBox('display-project', "calculator-prev-0" );
      }
      if(document.querySelector('#app-info h1').innerHTML === 'Daily Planner'){
        addImgToDisplayBox('display-project', "planner-prev-0" );
      }
      if(document.querySelector('#app-info h1').innerHTML === 'Currency Calculator'){
        addImgToDisplayBox('display-project', "currency-prev-0" );
      }
      if(document.querySelector('#app-info h1').innerHTML === 'Simple Weather App'){
        addImgToDisplayBox('display-project', "weather-prev-0" );
      }
      if(document.querySelector('#app-info h1').innerHTML === 'Covid-19 Table'){
        addImgToDisplayBox('display-project', "covid-prev-0" );
      }
    }
  })
})

// close info box
document.querySelector('.fa-times').addEventListener('click', ()=>{
  document.getElementById('display-project').innerHTML = ''
  document.getElementById('display-box').style.animation = 'fadeOut 1s'
  setTimeout(()=>{
    document.getElementById('display-box').style.display = 'none'
  },1001)


})


document.querySelectorAll('.btn-web').forEach(elem=>{
  elem.addEventListener('click',event=>{
    webSitesHandler.click()
  })
})
document.querySelectorAll('.btn-app').forEach(elem=>{
  elem.addEventListener('click',event=>{
    appHandler.click()
  })
})
document.querySelectorAll('.btn-game').forEach(elem=>{
  elem.addEventListener('click',event=>{
    gameHandler.click()
  })
})

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