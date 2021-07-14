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
  for (let i = 0; i < slideCount; i++){
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slides.appendChild(cloneSlide);
  }

  for (let i = slideCount-1; i >= 0; i--){
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slides.prepend(cloneSlide);
  }

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
  slides.style.transform = `translateX(${initialTranslateValue}px)`;
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
    console.log(currentIndex);
    dotMove(currentIndex);
  },300);
}

// Cnange the message of the middle carousel
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
const cover = document.querySelector('.cover');

navSearchBtn.onclick = function searchOpen(){
  if (window.getComputedStyle(searchDisplay).display === "none") {
    searchDisplay.style.display = "block";
    searchDisplay.classList.add('search-animated');
    cover.classList.add('cover-active');
    document.querySelector('.lang').style.zIndex = 0;
    setTimeout(()=>searchDisplay.style.width = "300px", 10);
  }
  else {
    searchDisplay.style.width = "0px";
    cover.classList.remove('cover-active');
    document.querySelector('.lang').style.zIndex = 3;
    setTimeout(()=>{
      searchDisplay.style.display = "none";
      searchDisplay.classList.remove('search-animated');
    }, 500);
  }
}

// Language Drop-down
const dropdown = document.querySelector('.lang');
const dropdownList = document.querySelector('.lang-list');

dropdown.onclick = function openList(){
  if (window.getComputedStyle(dropdownList).display === "none") dropdownList.style.display = "block";
  else dropdownList.style.display = "none";
}

// When scrolled, change the background color of header
// source : https://wiki.jjagu.com/?p=51
const header = document.querySelector('header');
const viewHeight = window.innerHeight - 111;

window.addEventListener('scroll', function(){
  if (window.scrollY > viewHeight){
    header.classList.add('header-active');
  }
  else{
    header.classList.remove('header-active');
  }
});