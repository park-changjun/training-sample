
// header dropdown bar 
const dropDown = document.querySelector('.dropdown');
const dropBtn = document.querySelector('.dropbtn');
const dropMenu = document.querySelector('.dropdown-menu');

dropBtn.addEventListener('click', () => {
    dropMenu.classList.toggle('show');
})





//header nav search
const searchBtn = document.querySelector('.nav_search_btn');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.modal_overlay');
const closeBtn = document.querySelector('.modal_search_box_btn');

const openModal = () => {
    modal.classList.remove('hidden'); //block
}
const closeModal = () => {
    modal.classList.add('hidden');  //none
}

searchBtn.addEventListener('click', openModal);
overlay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);






// visual search
const visualSearchBox = document.querySelector('.visual_search_box');
const visualSearchBtn = document.querySelector('.visual_search_btn');

function input_click() {
    // alert("검색할 수 없습니다.")
    // visualSearchBox.style.display = 'block';
    visualSearchBox.classList.add('noneSearchBox');
}

const closeSearchBox = () => {
    visualSearchBox.classList.remove('noneSearchBox');
    // visualSearchBox.style.display = 'none';
}

visualSearchBtn.addEventListener('click', closeSearchBox);





// header scroll
const contents = document.querySelector("#main");
const h = document.querySelector("header");
let Header_height;

function seTopPadding() {
    Header_height = h.offsetHeight;  //header의 높이값을 가져옴
    content.style.paddingTop = Header_height + "px";
}

function onScroll() {
    window.addEventListener("scroll", callbackFnc);
    function callbackFnc() {
        const y = window.pageYOffset;  //수직으로 스크롤 된 만큼의 픽셀값을 계산(pageYOffset)

        y > 150 ? h.classList.add("scroll") : h.classList.remove("scroll");
    }
}

window.onload = () => {
    onScroll();
    seTopPadding();
};



// //page scroll
// function pageScroll(){
//     window.scrollTo(1000,0);
// }





//content slide menu
const contentNews = document.querySelector(".content_manu_news");
const contentWork = document.querySelector(".content_manu_work");
const contentMedia = document.querySelector(".content_menu_media");
const contentBgtext = document.querySelector(".content-bg-txt");

contentNews.addEventListener('click', () => {
    contentBgtext.innerHTML = "바른뉴스";
    contentNews.classList.add('on');
    contentWork.classList.remove('on');
    contentMedia.classList.remove('on');
})
contentWork.addEventListener('click', () => {
    contentBgtext.innerHTML = "업무사례";
    contentNews.classList.remove('on');
    contentWork.classList.add('on');
    contentMedia.classList.remove('on');
})
contentMedia.addEventListener('click', () => {
    contentBgtext.innerHTML = "언론보도";
    contentNews.classList.remove('on');
    contentWork.classList.remove('on');
    contentMedia.classList.add('on');
})





// content slide

const slideWrapper = document.querySelector('.list-wrapper-slider');
const slider = document.querySelector('.list-wrapper-slider ul');
const slides = document.querySelectorAll('.list-wrapper-slider ul li');
const totalSlides = slides.length;
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

const sliderWidth = slideWrapper.clientWidth; // list-wrapper-slider width
let slideIndex = 0;

slider.style.width = sliderWidth * totalSlides + 'px';


const slideDots1 = document.querySelector('.dots1');
const slideDots2 = document.querySelector('.dots2');


function showSlides(n) {
    slider.style.left = -(n * 400) + 'px';
    // console.log(slideIndex);
}


function plusSlides(n) {
    showSlides(slideIndex += n);  //next버튼을 클릭했을 때 현재 인덱스번호 +1을 대입한 li를 보여준다
    // console.log(slideIndex);

    slideIndex == totalSlides - 3 ? nextBtn.classList.add('disabled') : nextBtn.classList.remove('disabled');
    slideIndex > 0 ? prevBtn.classList.add('disabled') : prevBtn.classList.remove('disabled');

    console.log(slideIndex);
}

nextBtn.addEventListener('click', () => plusSlides(1));
prevBtn.addEventListener('click', () => plusSlides(-1));



//slide pagination  

slideDots1.addEventListener('click', () => {
    slider.style.transform = 'translate(0px)';
    // slideDots1.style.background = '#8a6e4f';
    slideDots1.classList.add('btn_active');
    slideDots2.classList.remove('btn_active');
})

slideDots2.addEventListener('click', () => {
    slider.style.transform = 'translate(-1200px)';
    // slideDots2.style.background = '#8a6e4f';
    slideDots2.classList.add('btn_active');
    slideDots1.classList.remove('btn_active');
})


