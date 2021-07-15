
/* 2번째 섹션 슬라이드 */
const firstCardWrap = document.getElementById('first');
const secondCardWrap = document.getElementById('second');
const thirdCardWrap = document.getElementById('third');
const elementsBox = document.getElementsByClassName('elements-box');
const prvBtn = document.getElementById('prvBtn');
const nextBtn = document.getElementById('nextBtn');
let currentTransform = 0;
const TRANSFORM_UNIT = 408

const cardSlider = () => {
    if (currentTransform < 6) {
        currentTransform++;
        for (let i = 0; i < elementsBox.length; i++) {
            elementsBox[i].style.transform = `translateX(-${currentTransform * 408}px)`;
        }
    }
}

const cardSlider2 = () => {
    if (currentTransform > 0) {
        currentTransform--;
        for (let i = 0; i < elementsBox.length; i++) {
            elementsBox[i].style.transform = `translateX(-${currentTransform * 408}px)`;
        }
    }
}

prvBtn.addEventListener('click', cardSlider);
nextBtn.addEventListener('click', cardSlider2);


/* 슬라이드 루프 추가해야함 */

/* 드롭다운 */

const dropdown = document.getElementById('headerDropdown');
const language = document.getElementById('language');
let dropdownStatus = false;
const menuToggle = () => {
    const currentView = dropdownStatus === false ? '1' : '0';
    dropdown.style.opacity = currentView;
    dropdownStatus = !dropdownStatus;
}

language.addEventListener('click', menuToggle);

/* 드롭다운 끝 */


/* 검색시 나오는 모달창 */
const modal = document.getElementById('modal');
const search = document.getElementById('search');
let modalStatus = false;
const modalToggle = () => {
    modal.style.opacity = modalStatus === false ? '1' : '0';
    modal.style.zIndex = modalStatus === false ? '3' : '0';
    dropdownStatus = !dropdownStatus;
}
search.addEventListener('click', modalToggle);

// 스크롤이 감지되면 모달창을 꺼준다.
const closeModal = () => {
    modal.style.opacity = '0';
    modal.style.zIndex = '0';
    dropdownStatus = false;
    console.log(10000);
}
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

