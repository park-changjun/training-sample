import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import dummyCards from '../data/dummyCard'
import dummyLetters from '../data/dummyLetters'

// isSub => header 110px 이하로 내려올때 색 변경하는 기준 프롭
const HeaderLogo = ({ isSub }) => {
  return <a className="header-logo"></a>
}

const HeaderLanguageSelect = ({}) => {
  return <></>
}

const HeaderNav = ({ isSub, selectedLang = 'KOREAN' }) => {
  return (
    <div className="header-content">
      <div className="header-language-selecter">
        <p>{selectedLang}</p>
        <i className="fas fa-chevron-down"></i>
        <select>
          <option value="KOREAN">KOREAN</option>
          <option value="ENGLISH">ENGLISH</option>
        </select>
      </div>
      <div className="header-nav">
        <ul>
          <li className="header-list">
            <a href="#">바른소개</a>
            <ul>
              <li>
                <a>바른소개</a>
              </li>
              <li>
                <a>바른소개</a>
              </li>
              <li>
                <a>바른소개</a>
              </li>
              <li>
                <a>바른소개</a>
              </li>
              <li>
                <a>바른소개</a>
              </li>
            </ul>
          </li>
          <li className="header-list">
            <a href="#">업무분야</a>
            <ul>
              <li>
                <a>업무분야</a>
              </li>
              <li>
                <a>업무분야</a>
              </li>
              <li>
                <a>업무분야</a>
              </li>
            </ul>
          </li>
          <li className="header-list">
            <a href="#">구성원</a>
            <ul>
              <li>
                <a>구성원</a>
              </li>
              <li>
                <a>구성원</a>
              </li>
              <li>
                <a>구성원</a>
              </li>
              <li>
                <a>구성원</a>
              </li>
            </ul>
          </li>
          <li className="header-list">
            <a href="#">자료실</a>
            <ul>
              <li>
                <a>자료실</a>
              </li>
              <li>
                <a>자료실</a>
              </li>
              <li>
                <a>자료실</a>
              </li>
              <li>
                <a>자료실</a>
              </li>
              <li>
                <a>자료실</a>
              </li>
              <li>
                <a>자료실</a>
              </li>
              <li>
                <a>자료실</a>
              </li>
            </ul>
          </li>
          <li className="header-list">
            <a href="#">사회공원</a>
            <ul>
              <li>
                <a>사회공원</a>
              </li>
              <li>
                <a>사회공원</a>
              </li>
              <li>
                <a>사회공원</a>
              </li>
              <li>
                <a>사회공원</a>
              </li>
            </ul>
          </li>
          <li className="header-list">
            <a href="#">인재채용</a>
            <ul>
              <li>
                <a>인재채용</a>
              </li>
              <li>
                <a>인재채용</a>
              </li>
              <li>
                <a>인재채용</a>
              </li>
              <li>
                <a>인재채용</a>
              </li>
              <li>
                <a>인재채용</a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="search-box">
          <div className="search-input-wrapper">
            <input className="search-input" placeholder="검색어를 입력하세요" />
          </div>
          <button className="toggle-search-button">
            <div></div>
          </button>
        </div>
        <div className="modal-mask"></div>
      </div>
    </div>
  )
}

const HeaderContainer = ({ isSub }) => {
  return (
    <div id="wrapper-header">
      <header>
        <HeaderLogo />
        <HeaderNav />
      </header>
    </div>
  )
}
// 여기 위에 까지 Header component

const MainText = ({ mainText }) => {
  return (
    <p>
      {mainText.top}
      <br />
      {mainText.bottom}
    </p>
  )
}

const SearchBox = ({}) => {

  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <div className="search-section-content-wrapper">
        <div className="input-wrapper">
          <input 
            placeholder="검색할 내용을 입력해주세요" 
            type="text" 
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}  
          />
          <button>
            <img src="images/search-button-big.png" alt="search-button-big" />
          </button>
        </div>
      </div>
      <ul>
        <li>
          <a>test</a>
        </li>
      </ul>
    </>
  )
}

const ScrollButton = ({}) => {
  return (
    <div id="search-section-bottom">
      <p>SCROLL</p>
      <img src="images/arrow-down.png" alt="scroll-arrow-down" />
    </div>
  )
}

const SearchModal = ({}) => {
  return <div className="search-modal-mask"></div>
}

const SearchContainer = ({}) => {
  return (
    <div id="wrapper-search-section">
      <section id="search-section">
        <MainText
          mainText={{ top: 'WE DO THINGS RIGHT', bottom: 'FOR YOUR RIGHT' }}
        />
        <SearchBox />
        <ScrollButton />
        <SearchModal />
      </section>
    </div>
  )
}

// 위에 까지 search section

const CardLetterNav = ({ letterList }) => {
  const [selected, setSelected] = useState('')
  return (
    <div className="card-section-letter">
      <p>{selected}</p>
      <ul>
        {letterList.map((item, index) => (
          <li
            key={`${item}${index}`}
            onClick={() => {
              setSelected(item)
            }}
          >
            <a>{item}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

const ShowMoreButton = ({ which }) => {
  return (
    <button className={`showmore ${which}`}>
      <p>+ 더보기</p>
    </button>
  )
}

const Card = ({ card }) => {
  return (
    <article className="card">
      <div className="card-label">{card.label}</div>
      <div className="card-label-shadow"></div>
      <p className="card-title">{card.title}</p>
      <p className="card-content">{card.content}</p>
      <p className="card-date">{card.date}</p>
      <div className="card-img-wrapper">
        {card.characters.length &&
          card.characters.map((character, index) => (
            <div key={index} className="card-img">
              <img src={character.src} />
            </div>
          ))}
      </div>
    </article>
  )
}

const CardsBox = ({ cards }) => {
  return (
    <div className="cards-box">
      {cards.map((card, index) => (
        <Card key={`${card.label}${index}`} card={card} />
      ))}
    </div>
  )
}

const CardPagenation = ({}) => {
  return <div className="card-pagenation"></div>
}

const CardButtons = ({}) => {
  return (
    <>
      <button className="tab-arrow-left">
        <img src="images/tab-arrow-left.png" alt="image-tab-arrow-left" />
      </button>
      <button className="tab-arrow-right">
        <img src="images/tab-arrow-right.png" alt="image-tab-arrow-right" />
      </button>
    </>
  )
}

const CardContainer = ({}) => {
  return (
    <div id="wrapper-card-section">
      <section id="card-section">
        <CardLetterNav letterList={['바른뉴스', '업무사례', '언론보도']} />
        <ShowMoreButton which="cards" />
        <div className="cards-wrapper">
          <CardsBox cards={dummyCards} />
        </div>
        <CardPagenation />
        <CardButtons />
      </section>
    </div>
  )
}

const NewsLetterDesc = () => {
  return (
    <div id="letter-desc">
      <p>뉴스레터</p>
      <p className="main-letter">
        법무바른은 월간 뉴스레터를 발행하여
        <br />
        법과 관련된 다양한 사례를 전합니다.
      </p>
      <ShowMoreButton which="news" />
    </div>
  )
}

const LatestTwoLetters = ({ latestTwoLetters }) => {
  return (
    <div id="latest-letters">
      {
        latestTwoLetters &&
        latestTwoLetters.map((letter, index) => (
          <a
            key={`${letter.date}${index}`}
            href={letter.href}
            target="_blank"
          >
            <div className="letter-ractangle">
              <p className="ractangle-date">{letter.date}</p>
              <p className="ractangle-content">
                {letter.content}
              </p>
            </div>
          </a>
        ))
      }
    </div>
  )
}

const LetterContainer = ({}) => {
  return (
    <div id="wrapper-letter-section">
      <section id="letter-section">
        <NewsLetterDesc />
        <LatestTwoLetters latestTwoLetters={dummyLetters} />
      </section>
    </div>
  )
}

const FooterContainer = ({}) => {
  return (
    <div id="wrapper-footer">
      <footer>
        <img src="images/gray-logo.png" alt="gray-logo" />
        <ul>
          <li>
            <a href="#">면책공고</a>
          </li>
          <li>
            <a href="#">개인정보처리방침</a>
          </li>
          <li>
            <a href="#">오시는길</a>
          </li>
          <li>
            <a href="#">사이트맵</a>
          </li>
        </ul>
        <address>서울 강남구 테헤란로 92길 7 바른빌딩</address>
        <p>Copyright.BarunLawLLC.All rights reserved</p>
      </footer>
    </div>
  )
}

const Index = () => {
  return (
    <div id="wrapper">
      <Head>
        <title>테스트</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <script src="https://kit.fontawesome.com/5c7b32b093.js" crossorigin="anonymous"></script> */}
      </Head>
      <HeaderContainer />
      <SearchContainer />
      <CardContainer />
      <LetterContainer />
      <FooterContainer />
    </div>
  )
}

export default Index
