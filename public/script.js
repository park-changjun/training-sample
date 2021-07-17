
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
    modal.classList.remove('hidden');
}
const closeModal = () => {
    modal.classList.add('hidden');
}

overlay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);
searchBtn.addEventListener('click', openModal);






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
        // if(y > 300){
        //   h.classList.add("scroll");
        // } else {
        //   h.classList.remove("scroll");
        // }
    }
}

window.onload = () => {
    onScroll();
    seTopPadding();
};


// visual search
// function input_click() {
//     alert("검색할 수 없습니다.")
// }



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
const totalSlides = slides.length/3;
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

// console.log('slideWrapper',slideWrapper)
const sliderWidth = slideWrapper.clientWidth; // list-wrapper-slider width
let slideIndex = 0;

slider.style.width = sliderWidth * totalSlides + 'px';

function showSlides(n) {
    slideIndex = n;

    (slideIndex == -1) ? slideIndex = totalSlides - 1 : (slideIndex == totalSlides) ? slideIndex = 0 : slideIndex = n;
    // if (slideIndex == -1) {
    //     slideIndex = totalSlides - 1;
    // } else if (slideIndex === totalSlides) {
    //     slideIndex = 0;
    // } //조건부연산자로 변경


    slider.style.left = -(sliderWidth * slideIndex) + 'px';
    // console.log(slideIndex);
}


const slidePagination = document.querySelector('.slide_btn');
const slideDots1 = document.querySelector('.dots1');
const slideDots2 = document.querySelector('.dots2');
const slideDots3 = document.querySelector('.dots3');


// function showDots(a){
//     slideIndex = a;

//     if(slideIndex == 0){
//         slidesdots1.classList.add('active');
//     }else if(slideIndex == 1){
//         slidesdots2.classList.add('active');
//     }else if(slideIndex == 2){
//         slidesdots3.classList.add('active');
//     }slidePagination.classList.remove('sctive');

// }

function plusSlides(n) {
    showSlides(slideIndex += n);  //next버튼을 클릭했을 때 현재 인덱스번호 +1을 대입한 li를 보여준다
    // console.log(slideIndex);

    slideIndex == totalSlides - 1 ? nextBtn.classList.add('disabled') : nextBtn.classList.remove('disabled');
    slideIndex > 0 ? prevBtn.classList.add('disabled') : prevBtn.classList.remove('disabled');
    // if(slideIndex == totalSlides - 1){
    //     nextBtn.classList.add('disabled');
    // }else{
    //     nextBtn.classList.remove('disabled');
    // }
}
nextBtn.addEventListener('click', function () {
    plusSlides(1);
});
prevBtn.addEventListener('click', function () {
    plusSlides(-1);
});








