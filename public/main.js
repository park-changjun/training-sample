
// 변수가 너무 지저분함. 사용빈도가 낮은 객체는 로직안에서만 셀렉팅해도 될듯
let currentSlideIndex = 0;
let headerColor = 0;


const articleWidth = 399;
const cardsBox = document.querySelector('.cards-box');
const cards = Array.from(document.querySelectorAll('.card'));
let cardsLength = cards.length;
const shouldShownCardsNum = 3;
const tabNextButton = document.querySelector('.tab-arrow-right');
const tabPrevButton = document.querySelector('.tab-arrow-left');
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
const cardPagenationBtn = [];

// card pagenation button
const buttonNumber = parseInt(cardsLength / shouldShownCardsNum);
const cardPagenation = document.querySelector('.card-pagenation');


function pagenation() {

    for(let i = 0; i < buttonNumber; i++ ) {
        let btn = document.createElement('button');
        cardPagenationBtn.push(btn);
        cardPagenation.append(btn);
    
    }

    for(let i = 0; i < cardPagenation.children.length; i++) {
        console.log(cardPagenation.children[i]);
        cardPagenation.children[i].addEventListener('click', () => {
            moveCard(i * shouldShownCardsNum);
        })
    }

}


pagenation();

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
    num ?
    headerWrapper.classList.add('active')
    : 
    headerWrapper.classList.remove('active')
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
    let cloned;
    for (let i =0; i < shouldShownCardsNum; i++) {
        cloned =cards[i].cloneNode(true);
        cloned.classList.add('cloned');
        cardsBox.append(cloned);
    }

    cloned = cards[cards.length - 1].cloneNode(true)
    cloned.classList.add('cloned');
    cardsBox.prepend(cloned);
}


function moveCard(index) {
    console.log('index',index);
    if(!cardsBox.classList.contains('animated')) cardsBox.classList.add('animated');
    cardsBox.style.left =  -index*articleWidth + 'px';
    currentSlideIndex = index;
    setTimeout(() => {
        indexCheck(index);
    }, 500);
    let activeBtnNum;  
    console.log('cardsLength', cardsLength)
    if(index < 0) activeBtnNum = cardPagenationBtn.length - 1
    else if(index >= cardsLength) activeBtnNum = parseInt(0);
    else activeBtnNum = parseInt(index / shouldShownCardsNum);
    console.log('activeBtnNum',activeBtnNum)
    removeOneActiveBtn(activeBtnNum);
}


function removeOneActiveBtn(activeBtnNum) {
    for(btn of cardPagenationBtn) {
        if(btn.classList.contains('active')) {
            btn.classList.remove('active');
            break;
        }
    }
    cardPagenationBtn[activeBtnNum].classList.add('active');
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


// 메인 검색 기능
const mainInputWrapper = document.querySelector('.input-wrapper');
const searchedList = document.querySelector('#search-section > ul');
const searchMainModal =  document.querySelector('.search-modal-mask')
console.log(searchedList);

mainInputWrapper.addEventListener('click', openMainModal);

function openMainModal() {
    mainInputWrapper.classList.add('active');
    searchMainModal.classList.add('active');
    searchedList.classList.add('active');
    window.addEventListener('scroll', scrollModalDown);
}

function scrollModalDown() {
    mainInputWrapper.classList.remove('active');
    searchMainModal.classList.remove('active');
    searchedList.classList.remove('active');
    window.removeEventListener('scroll', scrollModalDown);
}


// 함수 호출 부분

removeOneActiveBtn(0);
makeClone();



// event 등록
tabPrevButton.addEventListener('click', () => {
    moveCard(currentSlideIndex - 1);
})
tabNextButton.addEventListener('click', () => {
    moveCard(currentSlideIndex + 1);
})