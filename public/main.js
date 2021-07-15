
// 변수가 너무 지저분함. 사용빈도가 낮은 객체는 로직안에서만 셀렉팅해도 될듯
let currentSlideIndex = 0;
let headerColor = 0;


const articleWidth = 399;
const cardsBox = document.querySelector('.cards-box');
const cards = Array.from(document.querySelectorAll('.card'));
let cardsLength = cards.length;
const tabNextButton = document.querySelector('.tab-arrow-right');
const tabPrevButton = document.querySelector('.tab-arrow-left');
const cardPagenation = document.querySelector('.card-pagenation');
const headerList = document.querySelectorAll('.header-list');
const cardSectionLetters = Array.from(document.querySelector('.card-section-letter > ul').children);
const letterP = document.querySelector('.card-section-letter > p');
const headerSearchBtn = document.querySelector('.toggle-search-button');
const modalMask = document.querySelector('.modal-mask');
const searchInputWrapper = document.querySelector('.search-input-wrapper');
const searchBox = document.querySelector('.search-box');
const searchInput = document.querySelector('.search-input');
const languageToggleBtn = document.querySelector('#header-right-top > ul');
const heaferLanguageBox = document.querySelector('#header-right-top');

heaferLanguageBox.addEventListener('click', ()=> {
    console.log('clicked');
    languageToggleBtn.classList.toggle('active');
})

window.addEventListener('scroll', () => {
    // console.log(window.pageYOffset > 110);
    let tmp;
    if(window.pageYOffset > 110) {
        tmp = 1;
    } else {
        tmp = 0;
    }
    if(headerColor === tmp) return
    headerColor = tmp;
    changeHeader(headerColor);
})


function changeHeader(num) {
    let headerWrapper = document.querySelector('#wrapper-header')
    if(num) {
        headerWrapper.classList.add('active');
    } else {
        headerWrapper.classList.remove('active');
    }
}

headerSearchBtn.addEventListener('click', openSearchBox);


function openSearchBox () {
    toggleSearchBox();
    window.addEventListener('click', checkClickInput)
    headerSearchBtn.removeEventListener('click', openSearchBox);
    headerSearchBtn.addEventListener('click', searchInputContent);
}


function searchInputContent(event) {
    if(!searchInput.value) {
        alert('검색할 내용을 입력해주세요');
        searchInput.focus();
    } else {
        console.log('검색 로직 짜야함');
    }
}


function toggleSearchBox() {
    searchInputWrapper.classList.toggle('active');
    searchBox.classList.toggle('active');
    modalMask.classList.toggle('active');
}

function checkClickInput(event) {
    console.log(event);
    if(event.target === modalMask) {
        toggleSearchBox();
        window.removeEventListener('click', checkClickInput);
        headerSearchBtn.removeEventListener('click', searchInputContent);
        headerSearchBtn.addEventListener('click', openSearchBox);
    } 
}


for(let letter of cardSectionLetters) {
    letter.addEventListener('click', () => {
        letterP.textContent = letter.textContent;
    });
}

for(let list of headerList) {
    list.addEventListener('mouseover', () => {
        list.children[1].classList.add('show');
    })

    list.addEventListener('mouseout', () => {
        list.children[1].classList.remove('show');
    })
}



cardsBox.style.transform = `translateX(-${articleWidth}px)`;
console.log(cardsBox.style.left);

function makeClone() {
    for (let i =0; i < cards.length; i++) {
        cardsBox.append(cards[i].cloneNode(true));
    }
    cardsBox.prepend(cards[cards.length - 1].cloneNode(true));
}


function moveCard(index) {
    if(!cardsBox.classList.contains('animated')) cardsBox.classList.add('animated');
    cardsBox.style.left =  -index*articleWidth + 'px';
    setTimeout(() => {
        indexCheck(index);
    }, 500);
}

function indexCheck(index) {    
    if(index > 0 && index < cardsLength) return;

    cardsBox.classList.remove('animated');

    if(index < 0) {
        cardsBox.style.left = (-1)*(cardsLength-1)*articleWidth+'px';
        currentSlideIndex = cardsLength-1;
    }

    if(index === cardsLength) {
        currentSlideIndex = 0;
        cardsBox.style.left = 0  + 'px';
    }
}





// 함수 호출 부분
makeClone();



// event 등록
tabPrevButton.addEventListener('click', () => {
    moveCard(--currentSlideIndex);
})
tabNextButton.addEventListener('click', () => {
    moveCard(++currentSlideIndex);
})