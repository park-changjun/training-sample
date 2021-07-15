
/* 2번째 섹션 슬라이드 */
const firstCardWrap = document.getElementById('first');
const secondCardWrap = document.getElementById('second');
const thirdCardWrap = document.getElementById('third');
const elementsBox = document.getElementsByClassName('elements-box');
const prvBtn = document.getElementById('prvBtn');
const nextBtn = document.getElementById('nextBtn');
let currentTransform = 0;
const TRANSFORM_UNIT = 408;

const cardSliderPrv = () => {
    if (currentTransform < 6) {
        currentTransform++;
        for (let i = 0; i < elementsBox.length; i++) {
            elementsBox[i].style.transform = `translateX(-${currentTransform * TRANSFORM_UNIT}px)`;
        }
    }
}

const cardSliderNext = () => {
    if (currentTransform > 0) {
        currentTransform--;
        for (let i = 0; i < elementsBox.length; i++) {
            elementsBox[i].style.transform = `translateX(-${currentTransform * TRANSFORM_UNIT}px)`;
        }
    }
}

prvBtn.addEventListener('click', cardSliderPrv);
nextBtn.addEventListener('click', cardSliderNext);
/* 슬라이드 루프 추가해야함 */



/* opacity를 조정하는 상수 */
const VISIBLE = '1';
const INVISIBLE = '0';


/* 드롭다운 */

const dropdown = document.getElementById('headerDropdown');
const language = document.getElementById('language');
let dropdownStatus = false;
const menuToggle = () => {
    const currentView = dropdownStatus === false ? VISIBLE : INVISIBLE;
    dropdown.style.opacity = currentView;
    dropdownStatus = !dropdownStatus;
}

language.addEventListener('click', menuToggle);

/* 드롭다운 끝 */



/* 검색시 나오는 모달창 */
const modal = document.getElementById('modal');
const search = document.getElementById('search');
let modalStatus = false;
const BACK ='0';
const FRONT = '3'
const modalToggle = () => {
    modal.style.opacity = modalStatus === false ? VISIBLE : INVISIBLE;
    modal.style.zIndex = modalStatus === false ? FRONT : BACK;
    dropdownStatus = !dropdownStatus;
}
search.addEventListener('click', modalToggle);


const closeModal = () => {
    modal.style.opacity = INVISIBLE;
    modal.style.zIndex = BACK;
    dropdownStatus = false;
}

// 스크롤이 감지되면 모달창을 꺼준다.
window.addEventListener('scroll', closeModal);

// 모달 배경 영역을 클리하면 모달창을 꺼준다.
modal.addEventListener('click', closeModal);
/* 모달창 정리 끝 */


/* 클릭시 클래스 부여하고 뒷배경 바꾸기 */
const barunNews = document.getElementById('barunNews'); 
const workCase = document.getElementById('workCase');
const report = document.getElementById('report');
const bgFont = document.getElementById('bgFont');
barunNews.addEventListener('click', () => {bgFont.innerText="바른뉴스"});
workCase.addEventListener('click', () => {bgFont.innerText="업무사례"});
report.addEventListener('click', () => {bgFont.innerText="언론보도"});

