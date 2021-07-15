/* 2번째 섹션 슬라이드 */
const firstCardWrap = document.getElementById('first');
const secondCardWrap = document.getElementById('second');
const thirdCardWrap = document.getElementById('third');
const elementsBox = document.getElementsByClassName('elements-box');
const prvBtn = document.getElementById('prvBtn');
const nextBtn = document.getElementById('nextBtn');
const elementsBoxContainer = document.querySelector('.elements-box-container');
const firstDot = document.querySelector('.dot-wrap div:nth-child(1)');
const secondDot = document.querySelector('.dot-wrap div:nth-child(2)');
const thirdDot = document.querySelector('.dot-wrap div:nth-child(3)');
const dotArr = [firstDot, secondDot, thirdDot];
let currentTransform = 0;
const TRANSFORM_UNIT = 408;

const cardSliderPrv = () => {
    if (currentTransform > 0) {
        currentTransform--;
        for (let i = 0; i < elementsBox.length; i++) {
            elementsBox[i].style.transform = `translateX(-${currentTransform * TRANSFORM_UNIT}px)`;
        }
    } else if (currentTransform === 0) {
        for (let i = 0; i < elementsBox.length; i++) {
            elementsBox[i].style.transform = `translateX(-${11}px)`;
        }
        setTimeout(() => {
            for (let i = 0; i < elementsBox.length; i++) {
                elementsBox[i].style.transform = `translateX(${0}px)`;
            }
        }, 500)
    }
}

const cardSliderNext = () => {
    switch (currentTransform) {
        // 4번째 기사를 보여줄때 밑의 도트를 변경해준다.
        case 2:
            currentTransform++;
            for (let i = 0; i < elementsBox.length; i++) {
                elementsBox[i].style.transform = `translateX(-${currentTransform * TRANSFORM_UNIT}px)`;
            }
            dotArr[0].classList.remove('active');
            dotArr[1].classList.add('active');
            break;

        // 7번째 기사를 보여줄때 밑의 도트를 변경해준다.
        case 5:
            currentTransform++;
            for (let i = 0; i < elementsBox.length; i++) {
                elementsBox[i].style.transform = `translateX(-${currentTransform * TRANSFORM_UNIT}px)`;
            }
            dotArr[1].classList.remove('active');
            dotArr[2].classList.add('active');
            break;

        case 6:
            for (let i = 0; i < elementsBox.length; i++) {
                elementsBox[i].style.transition = '1.5s';
                elementsBox[i].style.transform = `translateX(${0}px)`;
                currentTransform = 0;
            }
            setTimeout(() => {
                for (let i = 0; i < elementsBox.length; i++) {
                    elementsBox[i].style.transition = '0.5s';
                }
                dotArr[2].classList.remove('active');
                dotArr[0].classList.add('active');
            }, 1500)
            break;

        default:
            currentTransform++;
            for (let i = 0; i < elementsBox.length; i++) {
                elementsBox[i].style.transform = `translateX(-${currentTransform * TRANSFORM_UNIT}px)`;
            }
            break;
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
    dropdown.style.opacity = dropdownStatus === false ? VISIBLE : INVISIBLE;
    dropdownStatus = !dropdownStatus;
}

language.addEventListener('click', menuToggle);

/* 드롭다운 끝 */



/* 검색시 나오는 모달창 */
const modal = document.getElementById('modal');
const search = document.getElementById('search');
let modalStatus = false;
const BACK = '-1';
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
barunNews.addEventListener('click', () => {
    bgFont.innerText = "바른뉴스";
    barunNews.classList.add('active');
    workCase.classList.remove('active');
    report.classList.remove('active');
});
workCase.addEventListener('click', () => {
    bgFont.innerText = "업무사례";
    barunNews.classList.remove('active');
    workCase.classList.add('active');
    report.classList.remove('active');
});
report.addEventListener('click', () => {
    bgFont.innerText = "언론보도";
    barunNews.classList.remove('active');
    workCase.classList.remove('active');
    report.classList.add('active');
});
/* 클릭시 클래스 부여하고 뒷배경 바꾸기 끝 */

/* 인풋창에 글씨 입력시 모달창에 자동으로 입력 */
const searchInput = document.querySelector('.search-text');
const searchOutput = document.querySelector('.modal-text');

// 검색할 키워드들이 담긴 샘플 배열
const sampleArr = ['노동법률', '노동자', '노동 전문가', '근로', '근로 기준', '근로법', '형사', '형사법', '형사사건'];

// 빈 배열 여기에 정규표현식을 거친 배열의 요소들이 들어간다.
let filteredArr = [];

// keyup 이벤트시 실행될 함수
const searchFilter = () => {
    // 인풋에 입력된 value값을 들고와서 판단해주는 정규표현식
    const globalRegex = new RegExp(`${searchInput.value}/*`);
    sampleArr.forEach(test => {
        if (globalRegex.test(test)) {
            filteredArr.push(test)
        }
    })
    if (filteredArr.length === sampleArr.length || filteredArr.length == 0) {
        searchOutput.innerHTML = '어떤 법률적 자문이 필요하신가요?';
    } else {
        searchOutput.innerHTML = filteredArr;
    }
    filteredArr = [];
}

searchInput.addEventListener('keyup', searchFilter);
