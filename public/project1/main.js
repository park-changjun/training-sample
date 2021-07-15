/* 2번째 섹션 슬라이드 */
const firstCardWrap = document.getElementById('first');
const secondCardWrap = document.getElementById('second');
const thirdCardWrap = document.getElementById('third');
const elementsBoxs = Array.from(document.getElementsByClassName('elements-box'));
const prvBtn = document.getElementById('prvBtn');
const nextBtn = document.getElementById('nextBtn');
const elementsBoxsContainer = document.querySelector('.elements-box-container');
const firstDot = document.querySelector('.dot-wrap div:nth-child(1)');
const secondDot = document.querySelector('.dot-wrap div:nth-child(2)');
const thirdDot = document.querySelector('.dot-wrap div:nth-child(3)');
const dotArr = [firstDot, secondDot, thirdDot];

// 현재 위치를 알려주기 위한 변수 0이 초기값
let currentTransform = 0;

// 버튼을 클릭할때 카드들이 움직이는 가동범위
const TRANSFORM_UNIT = 408;

const cardSliderPrv = () => {
    if (currentTransform > 0) {
        currentTransform--;
        elementsBoxs.forEach(item => {
            item.style.transform = `translateX(-${currentTransform * TRANSFORM_UNIT}px)`;
        });
    } else {
        elementsBoxs.forEach(item => {
            item.style.transform = `translateX(-${10}px)`;
        });
        setTimeout(() => {
            elementsBoxs.forEach(item => {
                item.style.transform = `translateX(${0}px)`;
            });
        }, 500)
    }
}

const cardSliderNext = () => {
    switch (currentTransform) {
        // 4번째 기사를 보여줄때 밑의 도트를 변경해준다.
        case 2:
            currentTransform++;
            elementsBoxs.forEach(item => {
                item.style.transform = `translateX(-${currentTransform * TRANSFORM_UNIT}px)`;
            });
            dotArr[0].classList.remove('active');
            dotArr[1].classList.add('active');
            break;

        // 7번째 기사를 보여줄때 밑의 도트를 변경해준다.
        case 5:
            currentTransform++;
            elementsBoxs.forEach(item => {
                item.style.transform = `translateX(-${currentTransform * TRANSFORM_UNIT}px)`;
            });
            dotArr[1].classList.remove('active');
            dotArr[2].classList.add('active');
            break;
        // 7번째, 8번째, 9번째 기사가 보여직 있을때 다음 버튼을 클릭하면 초기화면으로 돌아간다.
        case 6:
            elementsBoxs.forEach(item => {
                item.style.transition = '1.5s';
                item.style.transform = `translateX(${0}px)`;
                currentTransform = 0;
            });
            setTimeout(() => {
                elementsBoxs.forEach(item => {
                    item.style.transition = '0.5s';
                });
                dotArr[2].classList.remove('active');
                dotArr[0].classList.add('active');
            }, 1500)
            break;

        default:
            currentTransform++;
            elementsBoxs.forEach(item => {
                item.style.transform = `translateX(-${currentTransform * TRANSFORM_UNIT}px)`;
            });
            break;
    }
}

const showByGroup = (e) => {
    switch (e.target.id) {
        case 'firstDot':
            dotArr[0].classList.add('active');
            dotArr[1].classList.remove('active');
            dotArr[2].classList.remove('active');
            elementsBoxs.forEach(item => {
                item.style.transition = '0.7s';
                item.style.transform = `translateX(${0}px)`;
                currentTransform = 0;
            });
            break;
        case 'secondDot':
            dotArr[0].classList.remove('active');
            dotArr[1].classList.add('active');
            dotArr[2].classList.remove('active');
            elementsBoxs.forEach(item => {
                item.style.transition = '0.7s';
                item.style.transform = `translateX(-1224px)`;
                currentTransform = 3;
            });
            break;
        case 'thirdDot':
            dotArr[0].classList.remove('active');
            dotArr[1].classList.remove('active');
            dotArr[2].classList.add('active');
            elementsBoxs.forEach(item => {
                item.style.transition = '0.7s';
                item.style.transform = `translateX(-2448px)`;
                currentTransform = 6;
            });
            break;
    }
    setTimeout(() => {
        elementsBoxs.forEach(item => {
            item.style.transition = '0.5s';
        });
    }, 700);
};

dotArr[0].addEventListener('click', (e) => showByGroup(e));
dotArr[1].addEventListener('click', (e) => showByGroup(e));
dotArr[2].addEventListener('click', (e) => showByGroup(e));
prvBtn.addEventListener('click', cardSliderPrv);
nextBtn.addEventListener('click', cardSliderNext);
/* 슬라이드 끝 */


/* opacity를 조정하는 상수 */
const VISIBLE = '1';
const INVISIBLE = '0';
/* opacity를 조정하는 상수 */

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


/* 필터링 */
const searchInput = document.querySelector('.search-text');
const searchOutput = document.querySelector('.modal-text');

// 검색할 키워드들이 담긴 샘플 배열
const sampleArr = ['노동법률', '노동자', '노동 전문가', '근로', '근로 기준', '근로법', '형사', '형사법', '형사사건'];

// keyup 이벤트시 실행될 함수
const searchFilter = () => {
    // 인풋에 입력된 value값을 들고와서 판단해주는 정규표현식
    const globalRegex = new RegExp(`${searchInput.value}/*`);
    const filteredArr = sampleArr.filter(filterd => globalRegex.test(filterd) && filterd);

    searchOutput.innerHTML = (filteredArr.length === sampleArr.length || filteredArr.length == 0) ? 
    '어떤 법률적 자문이 필요하신가요?' : filteredArr;
}

searchInput.addEventListener('keyup', searchFilter);
/* 필터링 끝 */


/* 스크롤시 header 속성 변경*/
const header = document.querySelector('header');
const changeHeaderBg = () => {
    header.style.backgroundColor = window.scrollY >= 110 ? '#0000009e' : 'unset';
}
document.addEventListener('scroll', changeHeaderBg);
/* 스크롤시 header 속성 변경끝*/