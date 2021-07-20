/* eslint-disable */
import React, { useState, useEffect, useMemo } from "react";

const Index = () => {
  const [isLangClicked, setIsLangClicked] = useState(false);
  const [isNavSearchClicked, setIsNavSearchClicked] = useState(false);
  const [isSearchInputClicked, setIsSearchInputClicked] = useState(false);

  const [searchInput, setSearchInput] = useState("");
  const [inputValue, setInputValue] = useState("");

  const carouselMenu = ["바른뉴스", "업무사례", "언론보도"];
  const [bgMsg, setBgMsg] = useState("바른뉴스");
  const [bgFlag, setBgFlag] = useState(0);
  const [headerColor, setHeaderColor] = useState(false);

  return (
    <div>
      <Header
        isLangClicked={isLangClicked}
        setIsLangClicked={setIsLangClicked}
        isNavSearchClicked={isNavSearchClicked}
        setIsNavSearchClicked={setIsNavSearchClicked}
        headerColor={headerColor}
        setHeaderColor={setHeaderColor}
      />

      <SloganSection
        isSearchInputClicked={isSearchInputClicked}
        setIsSearchInputClicked={setIsSearchInputClicked}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />

      <CarouselSection
        carouselMenu={carouselMenu}
        bgMsg={bgMsg}
        setBgMsg={setBgMsg}
        bgFlag={bgFlag}
        setBgFlag={setBgFlag}
      />

      <NewsletterSection />

      <Footer />
    </div>
  );
};

const Header = (props) => {
  const scrollY = () => {
    if (window.scrollY > window.innerHeight - 111) {
      props.setHeaderColor(true);
    } else {
      props.setHeaderColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollY);
  }, []);

  return (
    <header className={props.headerColor ? "header-active" : "block"}>
      <div className="container">
        <button
          className="lang"
          onClick={() => {
            props.setIsLangClicked(!props.isLangClicked);
          }}
        >
          <span>Language</span>
          <img src="img/lan-arrow.png" alt="" />
          <div
            className={(props.isLangClicked
              ? ["lang-list", "block"]
              : ["lang-list"]
            ).join(" ")}
          >
            <ul>
              <li onClick={() => alert("페이지 영어로 바꾸기")}>English</li>
              <li onClick={() => alert("페이지 한글로 바꾸기")}>한국어</li>
            </ul>
          </div>
        </button>
        <nav
          className={(props.headerColor ? ["nav-active", "nav"] : ["nav"]).join(
            " "
          )}
        >
          <a href="index.html">
            <img className="nav-logo" src="img/toplogo.png" alt="" />
          </a>
          <NavMenu
            isNavSearchClicked={props.isNavSearchClicked}
            setIsNavSearchClicked={props.setIsNavSearchClicked}
          />
        </nav>
      </div>
    </header>
  );
};

const NavMenu = (props) => {
  return (
    <div className="nav-menu">
      <ul>
        <li className="nav-menu-li">
          <a href="#">바른 소개</a>
          <NavMenuDropdown />
        </li>
        <li className="nav-menu-li">
          <a href="#">업무분야</a>
          <NavMenuDropdown />
        </li>
        <li>
          <a href="#">구성원</a>
        </li>
        <li className="nav-menu-li">
          <a href="#">자료실</a>
          <NavMenuDropdown />
        </li>
        <li className="nav-menu-li">
          <a href="#">사회공헌</a>
          <NavMenuDropdown />
        </li>
        <li className="nav-menu-li">
          <a href="#">인재채용</a>
          <NavMenuDropdown />
        </li>
      </ul>
      <div className="nav-search" type="button">
        <div
          className={(props.isNavSearchClicked
            ? ["cover", "cover-active"]
            : ["cover"]
          ).join(" ")}
        ></div>
        <input
          className={(props.isNavSearchClicked
            ? ["search-input", "block"]
            : ["search-input"]
          ).join(" ")}
          type="text"
          placeholder="검색어를 입력하세요."
          style={props.isNavSearchClicked ? { width: "300px" } : {}}
        />
        <button
          type="submit"
          onClick={() => {
            props?.setIsNavSearchClicked?.(!props.isNavSearchClicked);
          }}
        >
          <img src="img/nav-search.png" />
        </button>
      </div>
    </div>
  );
};

const NavMenuDropdown = () => {
  return (
    <ul className="nav-menu-dropdown">
      <li>
        <a href="#">하위 메뉴1</a>
      </li>
      <li>
        <a href="#">하위 메뉴2</a>
      </li>
      <li>
        <a href="#">하위 메뉴3</a>
      </li>
    </ul>
  );
};

const SloganSection = (props) => {
  function showMovie() {
    const num = Math.round(Math.random());
    const src = `/movie/movie${num}.mp4`;
    return src;
  }
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    setVideoSrc(showMovie());
  }, []);

  return (
    <div className="top section">
      {videoSrc && (
        <video autoPlay={true} loop muted>
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      <div
        className={(props.isSearchInputClicked
          ? ["cover", "block"]
          : ["cover"]
        ).join(" ")}
        onClick={() => {
          if (props.isSearchInputClicked)
            props.setIsSearchInputClicked(!props.isSearchInputClicked);
        }}
      />
      <div className="container">
        <Slogan
          isSearchInputClicked={props.isSearchInputClicked}
          setIsSearchInputClicked={props.setIsSearchInputClicked}
          searchInput={props.searchInput}
          setSearchInput={props.setSearchInput}
          inputValue={props.inputValue}
          setInputValue={props.setInputValue}
        />
        <div className="arr-down-display">
          <p className="scroll">SCROLL</p>
          <img className="scroll-down-arrow" src="img/down-arrow.svg" />
        </div>
      </div>
    </div>
  );
};

const Slogan = (props) => {
  return (
    <div className="visual-content">
      <p className="slogan">
        WE DO THINGS RIGHT
        <br /> FOR YOUR RIGHT
      </p>
      <div className="search">
        <input
          value={props.inputValue}
          type="text"
          onFocus={(e) => {
            if (e.target.value !== "") e.target.value = "";
            props.setIsSearchInputClicked(!props.isSearchInputClicked);
          }}
          onChange={(e) => {
            const msg = e.target.value;
            props.setInputValue(msg);
            props.setSearchInput(msg);
          }}
        ></input>
        <button
          type="submit"
          onClick={() => {
            alert(props.searchInput);
            props.setIsSearchInputClicked(!props.isSearchInputClicked);
            props.setInputValue("");
            props.setSearchInput("");
          }}
        >
          <img src="img/search.png" />
        </button>
      </div>
      <div
        className={(props.isSearchInputClicked
          ? ["search-result", "block"]
          : ["search-result"]
        ).join(" ")}
      >
        {props.searchInput}
      </div>
    </div>
  );
};

const CarouselSection = (props) => {
  return (
    <div className="middle section">
      <div className="middle-bg-gra"></div>

      <div className="container">
        <CarouselMenu
          carouselMenu={props.carouselMenu}
          bgMsg={props.bgMsg}
          setBgMsg={props.setBgMsg}
          bgFlag={props.bgFlag}
          setBgFlag={props.setBgFlag}
        />
        <Carousel />
      </div>
    </div>
  );
};

const CarouselMenu = (props) => {
  return (
    <>
      <div className="middle-bg-msg">{props.bgMsg}</div>
      <div className="middle-menu">
        <ul>
          {props.carouselMenu.map((item, index) => {
            return (
              <li key={index}>
                <a
                  key={index}
                  className={props.bgFlag === index ? "menu-active" : "block"}
                  onClick={() => {
                    props.setBgMsg(item);
                    props.setBgFlag(index);
                  }}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
        <a className="middle-menu-plus" href="#">
          +더보기
        </a>
      </div>
    </>
  );
};

const Carousel = () => {
  const [animation, setAnimation] = useState(false);
  const [slidesLeft, setSlidesLeft] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const arr = [1, 2, 3];
  const slide = [<Card />, <Card />, <Card />, <Card />];
  const slideCount = slide.length;
  const slideWidth = 384;
  const slideMargin = 24;


  const slidesStyle = {
    transform:
      "translateX(" + (-(slideWidth + slideMargin) * slideCount + 4) + "px)",
    width: (slideWidth + slideMargin) * (slideCount * 3) - slideMargin + "px",
    left: slidesLeft + "px",
  };

  useEffect(() => {
    setTimeout(() => {
      setAnimation(true);
    }, 10);
  }, []);

  const prevBtn = () => {
    moveSlide(currentIndex - 1);
  };
  const nextBtn = () => {
    moveSlide(currentIndex + 1);
  };

  function moveSlide(num) {
    setSlidesLeft(-num * (slideWidth + slideMargin));
    setCurrentIndex(num);

    // push next button at last slide
    if (num === slideCount) {
      setTimeout(function () {
        setAnimation(false);
        setSlidesLeft(0);
        setCurrentIndex(0);
      }, 300);
      setTimeout(function () {
        setAnimation(true);
      }, 400);
    } 
    
    // push prev button at first slide
    else if (num === -1) {
      setTimeout(function () {
        setAnimation(false);
        setSlidesLeft(-1 * (slideCount - 1) * (slideWidth + slideMargin));
        setCurrentIndex(slideCount - 1);
      }, 300);
      setTimeout(function () {
        setAnimation(true);
      }, 400);
    }
  }

  return (
    <>
      <div className="box-content-wrapper">
        <a className="middle-box-arrow left" onClick={prevBtn}>
          <img src="img/left-arrow.svg" alt="" />
        </a>
        <a className="middle-box-arrow right" id="right" onClick={nextBtn}>
          <img src="img/right-arrow.svg" alt="" />
        </a>

        <div className="box-container">
          <ul style={slidesStyle} className={animation ? "animated" : "block"}>
            {arr.map((a) => {
              return slide.map((item, index) => <Card index={index} />);
            })}
          </ul>
        </div>
      </div>

      <div className="dot-container">
        <span
          className={(currentIndex < 3 ? ["dot", "dot-active"] : ["dot"]).join(" ")}
        >
          ·
        </span>
        <span
          className={(currentIndex >= 3 ? ["dot", "dot-active"] : ["dot"]).join(" ")}
        >
          ·
        </span>
      </div>
    </>
  );
};

const Card = (props) => {
  return (
    <li>
      <article className="box">
        <div className="box-top">
          <img className="flag" src="img/flag.svg" alt="" />
          <span>엔터테인먼트{props.index + 1}</span>
        </div>
        <p className="box-title">
          <a href="#">
            교정시설에 녹화장비 반입한 독립PD들 변호하여 1심 뒤집고 무죄를
            받아낸 사례
          </a>
        </p>
        <p className="box-body">
          <a href="#">
            법무법인(유한) 바른의 최재웅 변호사, 장은진 변호사, 황유진 변호사는
            주식회사 중앙고속(이하 “중앙고속”) 을 위하여 서울 고속 버스 터미널
            주식회사(이하
          </a>
        </p>
        <p className="box-date">2021.07.01</p>
        <div className="photo">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </article>
    </li>
  );
};

const NewsletterSection = () => {
  return (
    <>
      <div className="bottom section">
        <div className="container">
          <div className="bottom-left">
            <p className="left-newsletter">뉴스레터</p>
            <p className="left-newsletter-detail">
              법무바른은 월간 뉴스레터를 발행하여
              <br />
              법과 관련된 다양한 사례를 전합니다.
            </p>
            <a href="#">
              <p className="plus">+더보기</p>
            </a>
          </div>

          <div className="bottom-right">
            <MonthlyNewsletter />
            <MonthlyNewsletter />
          </div>
        </div>
      </div>
      <hr className="hr" />
    </>
  );
};

const MonthlyNewsletter = () => {
  return (
    <a href="https://barunlaw.com/letter/97/newsletter97.html">
      <div className="bottom-box">
        <div className="bottom-box-date date-active">2021.MARCH</div>
        <div className="bottom-box-title">
          <div className="newsletter-title">
            법무법인(유한)바른 뉴스레터-제94호 (2021.03)
          </div>
          <div className="right-arrow"></div>
        </div>
      </div>
    </a>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src="img/logo.png" />
      </div>
      <div className="footer-list">
        <a href="#">
          <ul>면책공고</ul>
        </a>
        <a href="#">
          <ul>|</ul>
        </a>
        <a href="#">
          <ul>개인정보처리방침</ul>
        </a>
        <a href="#">
          <ul>|</ul>
        </a>
        <a href="#">
          <ul>오시는길</ul>
        </a>
        <a href="#">
          <ul>|</ul>
        </a>
        <a href="#">
          <ul>사이트맵</ul>
        </a>
      </div>
      <p>서울 강남구 테헤란로 92길 7 바른빌딩</p>
      <p className="copyright">Copyright. Barun Law LLC. All rights reserved</p>
    </footer>
  );
};

export default Index;
