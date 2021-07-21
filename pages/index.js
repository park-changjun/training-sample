import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import Head from 'next/head'
import dummyCards from '../data/dummyCard'
import dummyLetters from '../data/dummyLetters'
import dummyNav from '../data/dummyNav'
import dummySearchData from '../data/dummySearchData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


// Header components section
// isSub => header 110px 이하로 내려올때 색 변경하는 기준 프롭
const HeaderLogo = () => {
  return <a className="header-logo"></a>
}

const HeaderLanguageSelect = () => {
  const [openLanguageOpt, setOpenLanguageOpt] = useState(false)
  const [nowLang, setNowLang] = useState('KOREAN')
  return (
    <div
      className="header-language-selecter"
      onClick={() => {
        setOpenLanguageOpt((prev) => !prev)
      }}
    >
      <p>{nowLang}</p>
      <FontAwesomeIcon icon={faChevronDown} />
      {/* <i className="fas fa-chevron-down"></i> */}
      <ul className={openLanguageOpt ? `active` : ''}>
        <li
          data-value="KOREAN"
          onClick={(e) => {
            setNowLang(e.target.dataset.value)
          }}
        >
          KOREAN
        </li>
        <li
          data-value="ENGLISH"
          onClick={(e) => {
            setNowLang(e.target.dataset.value)
          }}
        >
          ENGLISH
        </li>
        <li
          data-value="FRENCH"
          onClick={(e) => {
            setNowLang(e.target.dataset.value)
          }}
        >
          FRENCH
        </li>
      </ul>
    </div>
  )
}

const HeaderLists = ({ navLists }) => {
  return (
    <ul>
      {navLists &&
        navLists.map((nav) => (
          <li key={nav.title} className="header-list">
            <a href="#">{nav.title}</a>
            <ul>
              {nav.sub &&
                nav.sub.map((sub, index) => (
                  <li key={`${sub}${index}`}>
                    <a>{sub}</a>
                  </li>
                ))}
            </ul>
          </li>
        ))}
    </ul>
  )
}

const HeaderSearchBox = ({
  headerModalOpen,
  setHeaderModalOpen,
  setAppTakeClick,
}) => {
  const [searchText, setSearchText] = useState('')
  const inputRef = useRef()

  useEffect(() => {
    console.log(`__headerModalOpen : ${headerModalOpen}`)
  }, [headerModalOpen])

  const checkInputText = (e) => {
    if (searchText) {
      alert(`현재 입력된 input ${searchText}`)
    } else {
      alert('검색어를 입력해야 합니다.')
    }
    inputRef.current.focus()
  }

  const openHeaderModal = (e) => {
    console.log('openHeaderModal')
    setHeaderModalOpen(true)
    setAppTakeClick(true)
  }

  return (
    <div className={`search-box ${headerModalOpen ? 'active' : ''}`}>
      <div
        className={`search-input-wrapper ${headerModalOpen ? 'active' : ''}`}
      >
        <input
          ref={inputRef}
          className="search-input"
          placeholder="검색어를 입력하세요"
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
          value={searchText}
        />
      </div>
      <button className="toggle-search-button">
        <div
          onClick={(e) => {
            console.log(headerModalOpen)
            headerModalOpen ? checkInputText(e) : openHeaderModal(e)
          }}
        />
      </button>
    </div>
  )
}

const HeaderModal = ({ headerModalOpen }) => {
  return <div className={`modal-mask ${headerModalOpen && 'active'}`}></div>
}

const HeaderNav = ({
  navLists,
  setAppTakeClick,
  headerModalOpen,
  setHeaderModalOpen,
}) => {
  return (
    <div className="header-nav">
      <HeaderLists navLists={navLists} />
      <HeaderSearchBox
        headerModalOpen={headerModalOpen}
        setHeaderModalOpen={setHeaderModalOpen}
        setAppTakeClick={setAppTakeClick}
      />
      <HeaderModal headerModalOpen={headerModalOpen} />
    </div>
  )
}

const HeaderContents = ({
  isSub,
  navLists,
  setAppTakeClick,
  headerModalOpen,
  setHeaderModalOpen,
}) => {
  return (
    <div className="header-content">
      <HeaderLanguageSelect />
      <HeaderNav
        navLists={navLists}
        setAppTakeClick={setAppTakeClick}
        headerModalOpen={headerModalOpen}
        setHeaderModalOpen={setHeaderModalOpen}
      />
    </div>
  )
}

const HeaderContainer = ({
  navLists,
  setAppTakeClick,
  headerModalOpen,
  setHeaderModalOpen,
}) => {

  const [isSubMode, setIsSubMode] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log(window.pageYOffset);
      if(window.pageYOffset > 110) {
        setIsSubMode(true);
      } else {
        setIsSubMode(false);
      }
    })
  }, []);

  return (
    <div id="wrapper-header" className={`${isSubMode ? 'active' : ''}`}>
      <header>
        <HeaderLogo />
        <HeaderContents
          navLists={navLists}
          setAppTakeClick={setAppTakeClick}
          headerModalOpen={headerModalOpen}
          setHeaderModalOpen={setHeaderModalOpen}
        />
      </header>
    </div>
  )
}
// Header components section end


// search components section
const MainText = ({ mainText }) => {
  return (
    <p>
      {mainText.top}
      <br />
      {mainText.bottom}
    </p>
  )
}

const SearchBox = ({ modalOpen, setModalOpen }) => {
  const [inputValue, setInputValue] = useState('')


  const focusHandle = (e) => {
    setModalOpen(true);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit!!');
  }

  return (
    <>
      <div className={`main-search-box ${modalOpen ? 'active' : ''}`}>
        <form className="input-wrapper" onSubmit={handleSubmit}>
          <input
            placeholder="검색할 내용을 입력해주세요"
            type="text"
            value={inputValue}
            onFocus={focusHandle}
            onChange={(e) => {
              setInputValue(e.target.value)
            }}
          />
          <button type="submit" disabled={!modalOpen}>
            <img src="images/search-button-big.png" alt="search-button-big" />
          </button>
        </form>
      </div>
      <ul className={`${modalOpen ? 'active' : ''}`}>
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

const SearchModal = ({ modalOpen, setModalOpen, emptyInput}) => {

  const scrollModalDown = useCallback(
    () => {
      emptyInput.current.focus();
      setModalOpen(false); 
    },
    [],
  )


  useEffect(() => {
    console.log('modalOpen', modalOpen)
    console.log('useEffect');

    if(modalOpen) {
      window.addEventListener('scroll', scrollModalDown)
    } else {
      window.removeEventListener('scroll', scrollModalDown)
    }
    
  }, [modalOpen])
  


  return <div className={`search-modal-mask ${modalOpen ? 'active' : ''}`}></div>
}


const SearchContainer = ({}) => {


  // let selectedVideo = useMemo(() => Math.round(Math.random()), []);
  const [selectedVideo, setselectedVideo] = useState(Math.round(Math.random()))

  console.log('selectedVideo', selectedVideo);

  const [modalOpen, setModalOpen] = useState(false);
  const emptyInput = useRef();

  return (
    <div id="wrapper-search-section">
      <video 
        autoPlay 
        loop
        muted
        src={`${selectedVideo ? "videos/city-view.mp4" : "videos/river-view.mp4"}`}
      />
      <section id="search-section">
        <MainText
          mainText={{ top: 'WE DO THINGS RIGHT', bottom: 'FOR YOUR RIGHT' }}
        />
        <SearchBox modalOpen={modalOpen} setModalOpen={setModalOpen}/>
        <ScrollButton />
        <SearchModal modalOpen={modalOpen} setModalOpen={setModalOpen} emptyInput={emptyInput}/>
        <input type="text" className="unvisible-input" ref={emptyInput}/>
      </section>
    </div>
  )
}
// search components section end



// card components section
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
            <a className={selected === item ? 'active' : ''}>{item}</a>
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

const Card = ({ card, cloned }) => {
  return (
    <article className={`card ${cloned ? 'cloned' : ''}`}>
      <div className="card-label">{card.label || '라벨'}</div>
      <div className="card-label-shadow"></div>
      <p className="card-title">{card?.title || '타이틀'}</p>
      <p className="card-content">{card?.content || '컨텐츠'}</p>
      <p className="card-date">{card?.date || '날짜'}</p>
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

const CardsBox = ({ currentIndex, cards, isAnimated }) => {
  const cardsBoxStyle = {
    left: currentIndex * -399,
    transform: `translateX(-399px)`,
  }

  return (
    <div
      className={`cards-box ${isAnimated ? 'animated' : ''}`}
      style={cardsBoxStyle}
    >
      <Card card={cards[cards.length - 1]} cloned />
      {cards.map((card, index) => (
        <Card key={`${card.label}${index}`} card={card} />
      ))}
      {cards.map((card, index) => (
        <Card key={`${card.label}${index} cloned`} card={card} cloned />
      ))}
    </div>
  )
}

const CardPagenation = ({ nowIndex }) => {
  useEffect(() => {
    console.log('nowIndex', nowIndex)
  }, [nowIndex])

  return (
    <div className="card-pagenation">
      <button className={nowIndex === 0 ? 'active' : ''}></button>
      <button className={nowIndex === 1 ? 'active' : ''}></button>
    </div>
  )
}

const CardButtons = ({
  setCurrentIndex,
  currentIndex,
  cardLength,
  setIsAnimated,
}) => {
  const [isDisabled, setIsDisabled] = useState(false)

  const moveCardHandle = (index) => {
    setIsDisabled(true)
    setCurrentIndex(index)
    setTimeout(() => {
      setIsDisabled(false)
    }, 300)
    if (index < 0) {
      setTimeout(() => {
        setIsAnimated(false)
        moveCardHandle(cardLength - 1)
        setTimeout(() => {
          setIsAnimated(true)
        }, 100)
      }, 200)
    }

    if (index >= cardLength) {
      // console.log('cardLength', cardLength)
      setTimeout(() => {
        setIsAnimated(false)
        moveCardHandle(0)
        setTimeout(() => {
          setIsAnimated(true)
        }, 100)
      }, 200)
    }
  }

  return (
    <>
      <button
        disabled={isDisabled}
        className="tab-arrow-left"
        onClick={() => moveCardHandle(--currentIndex)}
      >
        <img src="images/tab-arrow-left.png" alt="image-tab-arrow-left" />
      </button>
      <button
        disabled={isDisabled}
        className="tab-arrow-right"
        onClick={() => moveCardHandle(++currentIndex)}
      >
        <img src="images/tab-arrow-right.png" alt="image-tab-arrow-right" />
      </button>
    </>
  )
}

const CardContainer = ({ cards }) => {
  const [isAnimated, setIsAnimated] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    console.log(currentIndex)
  }, [currentIndex])

  return (
    <div id="wrapper-card-section">
      <section id="card-section">
        <CardLetterNav letterList={['바른뉴스', '업무사례', '언론보도']} />
        <ShowMoreButton which="cards" />
        <div className="cards-wrapper">
          <CardsBox
            currentIndex={currentIndex}
            cards={cards}
            isAnimated={isAnimated}
          />
        </div>
        <CardPagenation nowIndex={parseInt(currentIndex / 3)} />
        <CardButtons
          setIsAnimated={setIsAnimated}
          cardLength={cards.length}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </section>
    </div>
  )
}
// card components section end


// letter components section
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
      {latestTwoLetters &&
        latestTwoLetters.map((letter, index) => (
          <a key={`${letter.date}${index}`} href={letter.href} target="_blank">
            <div className="letter-ractangle">
              <p className="ractangle-date">{letter.date}</p>
              <p className="ractangle-content">{letter.content}</p>
            </div>
          </a>
        ))}
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
// letter components section end


// footer component
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
// footer component end

const Index = () => {
  const [appTakeClick, setAppTakeClick] = useState(false)
  const [headerModalOpen, setHeaderModalOpen] = useState(false)

  React.useEffect(() => {
    // console.log(`Index __headerModalOpen : ${headerModalOpen}`)
  }, [headerModalOpen])

  return (
    <div
      id="wrapper"
      onClick={
        appTakeClick
          ? (e) => {
              if (e.target.parentElement.closest('.search-box')) {
                return
              } else {
                setHeaderModalOpen(false)
                setAppTakeClick(false)
              }
            }
          : null
      }
    >
      <Head>
        <title>법무법인(유한) 바른-김예찬</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <HeaderContainer
        headerModalOpen={headerModalOpen}
        setHeaderModalOpen={(isOpen) => {
          console.log(`-----isOpen : ${isOpen}`)

          setHeaderModalOpen(isOpen)
        }}
        navLists={dummyNav}
        setAppTakeClick={setAppTakeClick}
      />

      <SearchContainer />
      <CardContainer cards={dummyCards} />
      <LetterContainer />
      <FooterContainer />
    </div>
  )
}

export default Index
