
//헤더 드롭다운바
function dropdown_menu() {
    document.getElementById("myLanguage").classList.toggle("show");
}

window.click = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var language_dropdown = document.getElementsByClassName("language-content");
        var i;
        for (i = 0; i < language_dropdown; i++) {
            var openDropdown = language_dropdown[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show')
            }
        }
    }
}


//input 경고창
// function input_click() {
//     alert("검색할 수 없습니다.")
// }





//슬라이드
var slideWrapper = document.querySelector('.list-wrapper-slider');
var slides = document.querySelectorAll('.list-wrapper-slider ul li');
var totalSlides = slides.length/3; // li 갯수

console.log('slideWrapper',slideWrapper)
var sliderWidth = slideWrapper.clientWidth; // list-wrapper-slider width
var slideIndex = 0;
var slider = document.querySelector('.list-wrapper-slider ul');

slider.style.width = sliderWidth * totalSlides + 'px';


function showSlides(n) {
    slideIndex = n;
    if (slideIndex == -1) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex === totalSlides) {
        slideIndex = 0;
    }
    slider.style.left = -(sliderWidth * slideIndex) + 'px';
    console.log(slideIndex);
}

function plusSlides(n){
    showSlides(slideIndex += n);
}
  
function currentSlide(n) {
    showSlides(slideIndex = n);
}

var nextBtn = document.querySelector('.next');
var prevBtn = document.querySelector('.prev');

nextBtn.addEventListener('click', function () {
    // console.log("123123")
    plusSlides(1);
});
prevBtn.addEventListener('click', function () {
    plusSlides(-1);
});