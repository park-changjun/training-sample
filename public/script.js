// Multiple Slide
const slides = document.querySelector('.box-container ul');
const slide = document.querySelectorAll('.box-container ul li');
const slideCount = slide.length;
const slideWidth = 384;
const slideMargin = 24;
const prevBtn = document.querySelector('.left');
const nextBtn = document.querySelector('.right');

let currentIndex = 0;

makeClone();

function makeClone(){

  // Clonning elements at the end.
  slide.forEach((item)=> {
    let cloneSlide = item.cloneNode(true);
    cloneSlide.classList.add('clone');
    slides.appendChild(cloneSlide);
  });

  // Clonning elements at the start.
  let reversedSlide = Array.prototype.slice.call(slide).reverse();

  reversedSlide.forEach((item)=> {
    let cloneSlide = item.cloneNode(true);
    cloneSlide.classList.add('clone');
    slides.prepend(cloneSlide);
  });

  updateWidth();
  setInitialPosition();

  setTimeout(function(){
    slides.classList.add('animated');
  }, 10);
}


function updateWidth(){
  const currentSlides = document.querySelectorAll('.box-container ul li');
  const newSlidecount = currentSlides.length;

  const newWidth = (slideWidth + slideMargin) * newSlidecount - slideMargin + 'px';
  slides.style.width = newWidth;
}

function setInitialPosition(){
  const initialTranslateValue = -(slideWidth + slideMargin)*slideCount;
  slides.style.transform = `translateX(${initialTranslateValue + 4}px)`;
}

nextBtn.addEventListener('click', function(){
  moveSlide(currentIndex + 1);
});

prevBtn.addEventListener('click', function(){
  moveSlide(currentIndex - 1);
});

function moveSlide(num){
  slides.style.left = -num*(slideWidth + slideMargin)+'px';
  currentIndex = num;

  // push next button at last slide
  if (currentIndex === slideCount){
    setTimeout(function(){
      slides.classList.remove('animated');
      slides.style.left = '0px';
      currentIndex = 0;
    }, 300);

    setTimeout(function(){
      slides.classList.add('animated');
    }, 400);
  }

  // push prev button at first slide
  else if (currentIndex === -1){
    setTimeout(function(){
      slides.classList.remove('animated');
      slides.style.left = (-1)*(slideCount-1)*(slideWidth + slideMargin)+'px';
      currentIndex = slideCount-1;
    }, 300);

    setTimeout(function(){
      slides.classList.add('animated');
    }, 400);
  }

  setTimeout(function(){
    dotMove(currentIndex);
  },300);
}

// Change the message of the middle carousel
let menu = document.querySelectorAll('.middle-menu ul li a');
let bgMsg = document.querySelector('.middle-bg-msg');

menu.forEach(function(el){
  el.addEventListener('click', changeBgMsg);
});

function changeBgMsg(el){
  let menuTarget = el.currentTarget;
  let text = menuTarget.text;

  menu.forEach(function(el){
    el.classList.remove('menu-active');
  });

  document.querySelector("#" + text).classList.add('menu-active');
  bgMsg.textContent = text;
}

// dots at the bottom of carousel
let dots = document.querySelectorAll('.dot-container span');

function dotMove(currentIndex){
  dots.forEach(dot => {
    dot.classList.remove('dot-active');
  });
  if (currentIndex % 3 == 0){
    dots[parseInt(currentIndex/3)].classList.add('dot-active');
  }
  else{
    dots[parseInt(currentIndex/3)].classList.add('dot-active');
  }
}

// search-icon in nav bar
const navSearchBtn = document.querySelector('.nav-search button');
const searchDisplay = document.querySelector('.search-input');
const navCover = document.querySelector('.nav-search .cover');

navSearchBtn.onclick = function searchOpen(){
  if (window.getComputedStyle(searchDisplay).display === "none") {
    searchDisplay.style.display = "block";
    searchDisplay.classList.add('search-animated');
    navCover.classList.add('cover-active');
    document.querySelector('.lang').style.zIndex = 0;
    setTimeout(()=>searchDisplay.style.width = "300px", 10);
  }
  else {
    searchDisplay.style.display = "none";
    searchDisplay.style.width = "0px";
    navCover.classList.remove('cover-active');
    document.querySelector('.lang').style.zIndex = 3;
  }
}

// Language Drop-down - Clear
const dropdown = document.querySelector('.lang');
const dropdownList = document.querySelector('.lang-list');

dropdown.onclick = function openList(){
  if (window.getComputedStyle(dropdownList).display === "none") dropdownList.style.display = "block";
  else dropdownList.style.display = "none";
}

// When scrolled, change the background color of header
// src : https://wiki.jjagu.com/?p=51
const header = document.querySelector('header');
const nav = document.querySelector('.nav');
const viewHeight = window.innerHeight - 111;

window.addEventListener('scroll', function(){
  if (window.scrollY > viewHeight){
    header.classList.add('header-active');
    nav.classList.add('nav-active');
  }
  else{
    header.classList.remove('header-active');
    nav.classList.remove('nav-active');
  }
});


// When scrolled, move to the next section
// src : http://2nusa.blogspot.com/2016/10/jquery-mouse-wheel.html
window.onload = function(){
  const elm = document.querySelectorAll('.section');
  const elmCount = elm.length;
  elm.forEach(function(item, index){
    item.addEventListener('mousewheel', function(event){
      event.preventDefault();
      let delta = 0;

      if (!event) event = window.event;
      if (event.wheelDelta) {
          delta = event.wheelDelta / 120;
          if (window.opera) delta = -delta;
      } 
      else if (event.detail)
          delta = -event.detail / 3;

      let moveTop = window.scrollY;
      let elmSelector = elm[index];

      // wheel down : move to next section
      if (delta < 0){
        if (index !== elmCount-1){
          try{
            moveTop = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top;
          }catch(e){}
        }
      }
      // wheel up : move to previous section
      else{
        if (index !== 0){
          try{
            moveTop = window.pageYOffset + elmSelector.previousElementSibling.getBoundingClientRect().top;
          }catch(e){}
        }
      }

      if (index === 0) inputShow();

      const body = document.querySelector('html');
      window.scrollTo({top:moveTop, left:0, behavior:'smooth'});
    });
  });
}


// When we click input box, result box and cover open.
const inputBox = document.querySelector('.search input');
const searchResultBox = document.querySelector('.search-result');
const inputCover = document.querySelector('.top .cover');

inputBox.addEventListener('focus', function(){
  searchResultBox.style.display = 'block';
  inputCover.classList.add('cover-active');
});

// When we click outside of the input box, result box and cover disappear.
inputCover.onclick = function (){
  if (inputCover.classList.contains('cover-active')){
    inputCover.classList.remove('cover-active');
    searchResultBox.style.display = 'none';
    inputBox.blur();
  }
}
function inputShow(){
  if (inputCover.classList.contains('cover-active')){
    inputCover.classList.remove('cover-active');
    searchResultBox.style.display = 'none';
    inputBox.blur();
  }
}

// Random movie play
const movieArr = ['movie/movie1.mp4','movie/movie2.mp4' ];

function showMovie(){
  let randomNum = Math.round(Math.random());
  let objMovie = document.querySelector('video');
  objMovie.src = movieArr[randomNum];
}
showMovie();