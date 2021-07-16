




//변수 지정
// var slideWrap = document.querySelector(".container2");    // 여기서 container2가 여러개이고 각자의 역할이 있다면 querySelectorAll을 써준다.
// var slideContainer = document.querySelector(".slider2");
// var slide = document.querySelectorAll(".item2");     //li는 여러개이고 각각 값이 다르기 때문에 querySelectorAll 을 사용 (all은 배열을 의미) 
// var nextBtn2 = document.querySelector('.next2');
// var prevBtn2 = document.querySelector('.prev2');
// // var slideWidth = 0;
// var totalslide = slide.length/3; // li갯수
// var currentIndex = 0;

// var nextBtn = document.getElementsByClassName('.next2');
// var prevBtn = document.getElementsByClassName('.prev2');  처럼 id, class명에 맞춰서 사용해도 무관.

//슬라이드 높이의 기본값은 0



//슬라이드 높이 확인하여 부모의 높이로 지정하기   대상.offsetHeight : 대상의 높이을 확인
//$slideHeight = $slide[0].offsetHeight;  > slide의 첫번째의 높이를 가져와서 slideHeight에 담음

// for(var i = 0; i < totalslide; i++){
//     if(slideWidth < slide[i].offsetWidth){
//         slideWidth = slide[i].offsetWidth;
// //     }
// // }

// $slideWrap.style.width = slideWidth + 'px';
// $slideContainer.style.width = slideWidth + 'px';

// // var slideWidth = $slideWrap.clientWidth;  // margin값과 border값이 제외된, padding값까지만 적용된 container2의 width
// // slide.style.width = slideWidth * totalslide + 'px'; // container2길이 * li 갯수(한번에 3개씩 보여줄 것이기 때문에 /3)


// //슬라이드 가로 배열
// for(var a = 0; a < totalslide; a++){
//     slide[a].style.left = a * 100 + '%';
// }

// function goToSlide(idx){
//     $slideContainer.style.left = -100 * idx + '%';
//     currentIndex = idx;
// }

// nextBtn2.addEventListener('click', function(){
//     // goToSlide(currentIndex + 1);

//     if(currentIndex == totalslide - 1){
//         goToSlide(0);
//     }else{
//         goToSlide(currentIndex + 1);
//     }
// });

// prevBtn2.addEventListener('click', function(){
//     // goToSlide(currentIndex - 1);

//     if(currentIndex == 0){
//         goToSlide(totalslide - 1);
//     }else{
//         goToSlide(currentIndex - 1);
//     }
// });







var slideWrapper = document.querySelector('.container2');
var slideUl = document.querySelector('.slider2');
var slides = document.querySelectorAll('.item2');
var nextBtn = document.querySelector('.next2');
var prevBtn = document.querySelector('.prev2');
var totalSlides = slides.length/3; // item의 갯수/3



var sliderWidth = slideWrapper.clientWidth; // container의 width
var slideIndex = 0;


slideUl.style.width = sliderWidth * totalSlides + 'px';


function showSlides(n) {
    slideIndex = n;
    if (slideIndex == -1) {   //li의 번호가 -1이라면
        slideIndex = totalSlides - 1;  //li의 갯수에서 -1을 해라
    } else if (slideIndex === totalSlides) {  //li의 번호가 li의 갯수와 같다면(마지막li이라면)
        slideIndex = 0;   //li의 0번으로 가라(첫번째li로)
    }
    slideUl.style.left = -(sliderWidth * slideIndex) + 'px'; //왼쪽으로 이동
    
    console.log(slideIndex);
}

function plusSlides(n){
    showSlides(slideIndex += n);
}
  
function currentSlide(n) {
    showSlides(slideIndex = n);
}

nextBtn.addEventListener('click', function () {
    plusSlides(1);
});
prevBtn.addEventListener('click', function () {
    plusSlides(-1);
});








function searchToggle(obj, evt){
    var container = obj.closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && obj.closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
}