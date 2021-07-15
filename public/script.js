
//헤더 드롭다운바
function dropdown_menu() {
    document.getElementById("myLanguage").classList.toggle("show");
}

window.click = function (event) {
    if (!event.target.matches('.dropbtn')) {

        const language_dropdown = document.getElementsByClassName("language-content");
        let i;
        for (i = 0; i < language_dropdown; i++) {
            const openDropdown = language_dropdown[i];


            
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show')
            }
        }
    }
}


//헤더 스크롤
    const contents = document.querySelector("#main");
    const h = document.querySelector("header");
    let Header_height ;
  
    function seTopPadding(){
     Header_height = h.offsetHeight;  //header의 높이값을 가져옴
     content.style.paddingTop = Header_height + "px";
    }
  
    function onScroll(){
      window.addEventListener("scroll", callbackFnc);
      function callbackFnc(){
        const y = window.pageYOffset;  //수직으로 스크롤 된 만큼의 픽셀값을 계산(pageYOffset)


        y > 300 ? h.classList.add("scroll") : h.classList.remove("scroll");
        // if(y > 300){
        //   h.classList.add("scroll");
        // } else {
        //   h.classList.remove("scroll");
        // }
      }
    }
  
    window.onload = function(){
      onScroll();
      seTopPadding();
    };
  
 



//input 경고창
// function input_click() {
//     alert("검색할 수 없습니다.")
// }





//슬라이드 메뉴 
document.querySelector(".content_manu1").addEventListener('click', function(){
    //https://anko3899.tistory.com/218 해보기
    document.querySelector(".content-under-txt").innerHTML = "바른뉴스";

});
document.querySelector(".content_manu2").addEventListener('click', function(){
    document.querySelector(".content-under-txt").innerHTML = "업무사례";
});
document.querySelector(".content_manu3").addEventListener('click', function(){
    document.querySelector(".content-under-txt").innerHTML = "언론보도";
});









//슬라이드
const slideWrapper = document.querySelector('.list-wrapper-slider');
const slider = document.querySelector('.list-wrapper-slider ul');
const slides = document.querySelectorAll('.list-wrapper-slider ul li');
const totalSlides = slides.length/3;

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');



console.log('slideWrapper',slideWrapper)
const sliderWidth = slideWrapper.clientWidth; // list-wrapper-slider width
let slideIndex = 0;


slider.style.width = sliderWidth * totalSlides + 'px';


function showSlides(n) {
    slideIndex = n;

    (slideIndex == -1) ?  slideIndex = totalSlides - 1 : (slideIndex === totalSlides) ? slideIndex = 0 : slideIndex = n;
    // if (slideIndex == -1) {
    //     slideIndex = totalSlides - 1;
    // } else if (slideIndex === totalSlides) {
    //     slideIndex = 0;
    // } //조건부연산자로 변경

    slider.style.left = -(sliderWidth * slideIndex) + 'px';
    // console.log(slideIndex);
}



function plusSlides(n){
    showSlides(slideIndex += n);  //next버튼을 클릭했을 때 현재 인덱스번호 +1을 대입한 li를 보여준다
    console.log(slideIndex);

    slideIndex == totalSlides - 1 ? nextBtn.classList.add('disabled') :  nextBtn.classList.remove('disabled');
    slideIndex > 0 ?  prevBtn.classList.add('disabled') :  prevBtn.classList.remove('disabled');
    // if(slideIndex == totalSlides - 1){
    //     nextBtn.classList.add('disabled');
    // }else{
    //     nextBtn.classList.remove('disabled');
    // }
}
  
// function currentSlide(n) {
//     showSlides(slideIndex = n);
//     console.log(slideIndex);
//     // slideIndex > 0 ?  prevBtn.classList.add('disabled') :  prevBtn.classList.remove('disabled');

// }


nextBtn.addEventListener('click', function () {
    plusSlides(1);
});

prevBtn.addEventListener('click', function () {
    plusSlides(-1);
});








